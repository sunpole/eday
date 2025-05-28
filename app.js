// ==== ДАННЫЕ ====
const USERS = [
    {name: "Вера", age: 4},
    {name: "Матвей", age: 7},
    {name: "Никита", age: 12}
];

const QUESTIONS = [
    {
        label: "Как ты себя чувствуешь?",
        key: "feel",
        type: "select",
        options: ["Весело!", "Ладно", "Устал(а)", "Не знаю"]
    },
    {
        label: "Что тебе сегодня приснилось?",
        key: "dream",
        type: "text"
    },
    {
        label: "Чего хочешь сегодня сделать?",
        key: "goal",
        type: "text"
    }
];

// ==== УТИЛИТЫ ====

function saveAnswers(user, date, answers) {
    const storageKey = "answers_" + user;
    let all = JSON.parse(localStorage.getItem(storageKey) || "[]");
    // Удалить запись за этот день если уже есть
    all = all.filter(record => record.date !== date);
    all.unshift({date, answers});
    localStorage.setItem(storageKey, JSON.stringify(all.slice(0, 10))); // Храним только 10 дней
}

function getAnswers(user) {
    const storageKey = "answers_" + user;
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function today() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,'0') + "-" + String(d.getDate()).padStart(2,'0');
}

function motivationPhrase() {
    const phrases = [
        "Каждый день — новое приключение! 🚀",
        "Ты сможешь всё, если захочешь!",
        "Сделай сегодня что-то доброе!",
        "Верь в себя, у тебя получится!",
        "Меньше телефона — больше интересных игр!"
    ];
    // Случайная фраза
    return phrases[Math.floor(Math.random()*phrases.length)];
}

function planForDay(goal, age) {
    let ideas = [
        "Поиграй без телефона хотя бы 1 час",
        "Попробуй нарисовать картинку",
        "Сделай зарядку с утра",
        "Помоги кому-то из семьи",
        "Придумай весёлую игру",
        "Погуляй на улице",
        "Проведи время за книгой или игрой"
    ];
    if (!goal) goal = "Что-нибудь новое";
    // Выбираем рекомендации по возрасту
    if (age < 6) {
        return [
            "Поиграй с игрушками без телефона",
            "Погуляй с кем-нибудь дома или на улице",
            `Попробуй: "${goal}"`
        ];
    }
    if (age < 9) {
        return [
            "Поиграй с другом/сестрой/братом",
            "Помоги маме или папе",
            `Сегодня твоя цель: "${goal}"`
        ];
    }
    return [
        "Поставь себе маленькую задачу — выполни сам!",
        "Раздели телефон/гаджеты с делом: сначала дело, потом экран.",
        `Не забудь про свою цель: "${goal}"`
    ];
}

// ==== РЕНДЕР ====

const app = document.getElementById('app');
let currentUser = null;

// Главная функция (рендер)
function render() {
    app.innerHTML = "";
    app.appendChild(header());
    if (!currentUser) {
        app.appendChild(userSelect());
    } else {
        app.appendChild(motivation());
        app.appendChild(form());
        app.appendChild(history());
    }
}
function header() {
    const h = document.createElement('h1');
    h.textContent = 'Доброе утро!';
    return h;
}
function userSelect() {
    const wrap = document.createElement('div');
    wrap.className = 'user-select';
    USERS.forEach(user => {
        const b = document.createElement('button');
        b.className = 'user-btn';
        b.textContent = user.name;
        b.onclick = () => { currentUser = user.name; render(); };
        wrap.appendChild(b);
    });
    return wrap;
}
function motivation() {
    const div = document.createElement('div');
    div.className = 'motivation';
    div.textContent = motivationPhrase();
    return div;
}
function form() {
    const form = document.createElement('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const ans = {};
        QUESTIONS.forEach(q => {
            ans[q.key] = form.elements[q.key].value?.trim();
        });
        saveAnswers(currentUser, today(), ans);
        render();
    };
    // Заголовок: имя
    const username = currentUser;
    form.appendChild(Object.assign(document.createElement('h2'), {textContent: username}));

    // Вопросы
    QUESTIONS.forEach(q => {
        const lab = Object.assign(document.createElement('label'), {className: 'question', htmlFor: q.key, textContent: q.label});
        form.appendChild(lab);

        let input;
        if (q.type === "select") {
            input = document.createElement('select');
            q.options.forEach(opt => {
                const o = document.createElement('option');
                o.value = opt; o.textContent = opt;
                input.appendChild(o);
            });
        } else {
            input = document.createElement('input');
            input.type = "text";
            input.placeholder = "Коротко...";
        }
        input.name = q.key;
        input.id = q.key;
        form.appendChild(input);
    });

    // Кнопка
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Готово!';
    form.appendChild(btn);

    // Сгенерировать мини-план для мотивации
    const planDiv = document.createElement('div');
    planDiv.className = 'plan hide';
    form.oninput = function() {
        const goalVal = form.elements['goal'].value;
        planDiv.innerHTML = "";
        if (goalVal.trim().length > 0) {
            planDiv.classList.remove('hide');
            let age = USERS.find(u => u.name === currentUser).age;
            let planList = planForDay(goalVal, age);
            planDiv.innerHTML = `<b>Сегодняшний план:</b><ul>` +
                planList.map(item => `<li>${item}</li>`).join("") + `</ul>`;
        } else {
            planDiv.classList.add('hide');
        }
    };
    form.appendChild(planDiv);

    return form;
}
function history() {
    const div = document.createElement('div');
    div.className = 'history';

    const ansList = getAnswers(currentUser);
    if (ansList.length === 0) return div;
    const h = Object.assign(document.createElement('h3'), {textContent: 'История ответов:'});
    div.appendChild(h);

    // Кратко показать несколько последних дней
    ansList.forEach(item => {
        const entry = document.createElement('div');
        entry.className = 'history-entry';
        entry.innerHTML = `<b>${item.date}:</b><br>` +
            QUESTIONS.map(q => `<b>${q.label}</b> <span>${item.answers[q.key]}</span>`).join('<br>');

        // Показать мини-план
        let age = USERS.find(u => u.name === currentUser).age;
        let plan = planForDay(item.answers.goal, age);
        entry.innerHTML += `<div class="plan"><b>План:</b> ${plan.join('; ')}</div>`;
        div.appendChild(entry);
    });

    // Кнопка выхода
    const back = Object.assign(document.createElement('button'), {
        textContent: "⟵ Сменить имя",
        onclick: () => { currentUser = null; render(); }
    });
    div.appendChild(back);

    return div;
}

// ==== СТАРТ ====
render();
