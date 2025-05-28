const USERS = [
    {name: "Вера", age: 4, key: "vera"},
    {name: "Матвей", age: 7, key: "matvey"},
    {name: "Никита", age: 12, key: "nikita"}
];
const USER_STYLES = {
    "Вера":"vera",
    "Матвей":"matvey",
    "Никита":"nikita"
};
const TODAY = new Date();
const IS_SUMMER = (TODAY.getMonth() === 5 || TODAY.getMonth() === 6 || TODAY.getMonth() === 7);
// === Вопросы ===
const QUESTIONS_SET = {
    "Вера": [
        {
            label: "Как ты себя чувствуешь?",
            key: "feel",
            type: "emoji",
            options: [
                {emoji:"😊", text:"Весело!"},
                {emoji:"😴", text:"Сонно"},
                {emoji:"😕", text:"Грустно"}
            ],
            bg: "linear-gradient(120deg,#fffde7 50%, #f8bbd0 100%)",
            icon: "🌞"
        },
        {
            label: "Что тебе сегодня приснилось?",
            key: "dream",
            type: "emoji",
            options: [
                {emoji:"🦄", text:"Волшебство"},
                {emoji:"🐱", text:"Животные"},
                {emoji:"🙈", text:"Не помню"}
            ],
            bg: "linear-gradient(120deg,#e1f5fe 50%, #ede7f6 100%)",
            icon: "💤"
        },
        {
            label: "Что бы ты хотела сегодня сделать?",
            key: "goal",
            type: "emoji",
            options: [
                {emoji:"🎨", text:"Рисовать"},
                {emoji:"🤸", text:"Играть"},
                {emoji:"📚", text:"Слушать сказку"}
            ],
            bg: "linear-gradient(120deg,#fcebb6 50%, #f8bbd0 100%)",
            icon: "🌈"
        }
    ],
    "Матвей": [
        {
            label: "Как ты себя чувствуешь?",
            key: "feel",
            type: "emoji",
            options: [
                {emoji:"😃", text:"Классно"},
                {emoji:"🙂", text:"Хорошо"},
                {emoji:"😕", text:"Не очень"}
            ],
            bg: "linear-gradient(120deg,#e3f5fe 50%, #b3e5fc 100%)",
            icon: "☀️"
        },
        {
            label: "Что тебе снилось?",
            key: "dream",
            type: "emoji",
            options: [
                {emoji:"🚗", text:"Машины"},
                {emoji:"🦸", text:"Герои"},
                {emoji:"😴", text:"Не помню"}
            ],
            bg: "linear-gradient(120deg,#fff8e1 50%, #b3e5fc 100%)",
            icon: "💤"
        },
        {
            label: "Что бы ты хотел узнать сегодня?",
            key: "learn",
            type: "emoji",
            options: [
                {emoji:"🌍", text:"Про мир"},
                {emoji:"🦕", text:"Про животных"},
                {emoji:"🤔", text:"Что-то новое"}
            ],
            bg: "linear-gradient(120deg,#e1f5fe 50%, #ffe0b2 100%)",
            icon: "🔍"
        },
        {
            label: "Чем поможешь дома сегодня?",
            key: "help",
            type: "emoji",
            options: [
                {emoji:"🥣", text:"Накрою на стол"},
                {emoji:"🧹", text:"Уберу игрушки"},
                {emoji:"😊", text:"Помогу маме"}
            ],
            bg: "linear-gradient(120deg,#c8e6c9 50%, #b3e5fc 100%)",
            icon: "🌱"
        },
        {
            label: IS_SUMMER ?
                "Что ты сегодня будешь читать?" :
                "Что ты сегодня почитаешь?",
            key: "read",
            type: "emoji",
            options: [
                {emoji:"📚", text:"Книгу"},
                {emoji:"📖", text:"Библию"},
                {emoji:"📰", text:"Журнал"}
            ],
            bg: "linear-gradient(120deg,#fffde7 50%, #b3e5fc 100%)",
            icon: "📚"
        }
    ],
    "Никита": [
        {
            label: "Какое у тебя настроение?",
            key: "feel",
            type: "emoji",
            options: [
                {emoji:"😎", text:"Супер!"},
                {emoji:"🙂", text:"Хорошее"},
                {emoji:"😶", text:"Скучно"},
                {emoji:"😩", text:"Нет сил"}
            ],
            bg: "linear-gradient(120deg,#ffcdd2 60%, #e57373 100%)",
            icon: "🔥"
        },
        {
            label: "Что тебе сегодня снилось?",
            key: "dream",
            type: "emoji",
            options: [
                {emoji:"🌈", text:"Крутой сон"},
                {emoji:"🚀", text:"Были приключения"},
                {emoji:"🙈", text:"Не запомнил"}
            ],
            bg: "linear-gradient(120deg,#e1f5fe 50%, #e57373 100%)",
            icon: "🛌"
        },
        {
            label: "Какая твоя главная задача на день?",
            key: "goal",
            type: "emoji",
            options: [
                {emoji:"📖", text:"Учёба"},
                {emoji:"🏆", text:"Спорт"},
                {emoji:"🆕", text:"Научиться новому"}
            ],
            bg: "linear-gradient(120deg, #ffebee 60%, #fbc02d 100%)",
            icon: "🏆"
        },
        {
            label: "Что бы ты хотел создать/придумать сегодня?",
            key: "create",
            type: "emoji",
            options: [
                {emoji:"🤖", text:"Робота/игру"},
                {emoji:"🎧", text:"Плейлист"},
                {emoji:"🎲", text:"Настолку"}
            ],
            bg: "linear-gradient(120deg, #e8eaf6, #ffcdd2 100%)",
            icon: "💡"
        },
        {
            label: "Какая привычка/рутина будет сегодня?",
            key: "habit",
            type: "emoji",
            options: [
                {emoji:"⚡️", text:"Зарядка"},
                {emoji:"🚰", text:"Пить воду"},
                {emoji:"📖", text:"Читать каждый день"}
            ],
            bg: "linear-gradient(120deg, #ffe0b2, #e57373 100%)",
            icon: "🔋"
        },
        {
            label: IS_SUMMER ?
                "Что хочешь прочитать летом?" :
                "Что будешь читать сегодня?",
            key: "read",
            type: "emoji",
            options: [
                {emoji:"📖", text:"Приключения"},
                {emoji:"📚", text:"Библию"},
                {emoji:"📰", text:"Интересное в интернете"}
            ],
            bg: "linear-gradient(120deg,#e1f5fe,#ffcdd2 100%)",
            icon: "📖"
        },
        {
            label: IS_SUMMER
                ? "Сколько минут сегодня не трогаешь телефон?"
                : "Сколько часов без телефона до 18:00?",
            key: "phone",
            type: "emoji",
            options: [
                {emoji:"⏳", text:"> 2 часа"},
                {emoji:"⌛️", text:"1 час"},
                {emoji:"🤏", text:"Маленько"}
            ],
            bg: "linear-gradient(120deg,#bbded6,#ffcdd2 100%)",
            icon: "📵"
        },
        {
            label: IS_SUMMER
                ? "Что записал в тетрадь или Библию сегодня?"
                : "Что запишешь в дневник?",
            key: "journal",
            type: "emoji",
            options: [
                {emoji:"📝", text:"Домашка/идеи"},
                {emoji:"📅", text:"Планы"},
                {emoji:"🙏", text:"Стих или мысль из Библии"}
            ],
            bg: "linear-gradient(120deg, #e3f2fd, #ffcdd2 100%)",
            icon: "📓"
        },
        {
            label: "Как подумаешь сегодня о Боге?",
            key: "bible",
            type: "emoji",
            options: [
                {emoji:"📖", text:"Почитаю Библию"},
                {emoji:"🤲", text:"Помолюсь утром"},
                {emoji:"❤️", text:"Сделаю что-то доброе"}
            ],
            bg: "linear-gradient(120deg,#fff3e0,#e1bee7 100%)",
            icon: "🙌"
        }
    ]
};
// ======= Хранилище и функции =======
const app = document.getElementById('app');
let currentUser = null;
let answers = {};
let step = 0;
let QUESTIONS = [];

function reset() {
    currentUser = null;
    answers = {};
    step = 0;
}
function today() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,'0') + "-" + String(d.getDate()).padStart(2,'0');
}
function saveAnswers(user, date, answers) {
    const storageKey = "answers_" + user;
    let all = JSON.parse(localStorage.getItem(storageKey) || "[]");
    all = all.filter(record => record.date !== date);
    all.unshift({date, answers});
    localStorage.setItem(storageKey, JSON.stringify(all.slice(0, 13)));
}
function getAnswers(user) {
    const storageKey = "answers_" + user;
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
}
function motivationPhrase(name) {
    const phrases = [
        "Пусть у тебя получится всё, что задумал!",
        "Меняй мир к лучшему, начни с себя сегодня!",
        "Семья, друзья и Бог рядом — впереди отличный день!",
        "Хорошего дня! Больше радости, меньше экрана! 😊",
        "Самое важное — видеть прекрасное вокруг."
    ];
    if (name === "Вера") return "Пусть твой день будет радостным и весёлым! 🦄";
    if (name === "Матвей") return "Мечтай, играй, узнай новое — ты молодец!";
    return phrases[Math.floor(Math.random()*phrases.length)];
}
function planForDay(answers, age) {
    let plan = [];
    if (age < 6) {
        plan = [
            "Поиграй с игрушками без гаджетов",
            "Погуляй на улице с родными",
            "Обними маму или папу",
            "Попробуй: " + (answers.goal||'сделать что-то интересное')
        ];
    } else if (age < 9) {
        plan = [
            "Поиграй с братом/сестрой или другом",
            "Помоги дома — просто так",
            "Делай зарядку или танцуй под музыку",
            (answers.read?.includes("Библию") ? "Почитай Библию" : "Почитай книгу или Библию")
        ];
        if (IS_SUMMER) plan.push("Сегодня будет меньше телефона!");
    } else {
        plan = [
            "Выполни свою главную задачу дня (или придумай новую)",
            "Напиши пару мыслей или записей в дневник или Библию",
            (answers.bible?.includes("Библию") ? "Каждый день читай Божье слово!" : "Прочитай сегодня хотя бы пару стихов из Библии"),
            (answers.habit ? "Сделай привычку дня: "+answers.habit : ""),
            "Как можно меньше телефона — только полезное!"
        ].filter(Boolean);
        if (IS_SUMMER) plan.push("Летом пополнить багаж знаний и духовных открытий!");
    }
    return plan;
}
function buildTelegramText(username, answers, questionsList) {
    let lines = [`⭐ Доброе утро, это анкета ${username}:`];
    questionsList.forEach(q=>{
        lines.push(`${q.icon||""} ${q.label} ${answers[q.key]||""}`);
    });
    lines.push(`\nОтвет отправлен из семейной анкеты фрагмент: https://github.com`);
    return lines.join('\n');
}
function telegramShareBtn(text) {
    const btn = document.createElement('button');
    btn.textContent = "📤 Поделиться в Телеграм";
    btn.className = "tg-share";
    btn.onclick = () => {
        const url = 'https://t.me/share/url?url=&text=' + encodeURIComponent(text);
        window.open(url, "_blank");
    };
    return btn;
}
function history(user) {
    const div = document.createElement('div');
    div.style.marginTop = "16px";
    const ansList = getAnswers(user);
    if (ansList.length === 0) return div;
    const h = Object.assign(document.createElement('h3'), {textContent: 'История ответов:'});
    div.appendChild(h);
    ansList.forEach(item => {
        const entry = document.createElement('div');
        entry.className = "history-entry";
        entry.innerHTML = `<b>${item.date}:</b><br>` + QUESTIONS.map(q =>
            `<span>${q.icon||''}<b> ${q.label.split(' ')[0]}:</b> <span>${item.answers[q.key]}</span>`
        ).join("<br>");
        div.appendChild(entry);
    });
    return div;
}
function miniExitBtn() {
    const btn = Object.assign(document.createElement('button'), {
        textContent: "⟵ Назад",
        onclick: ()=>{ reset(); render(); }
    });
    btn.style.margin = "12px auto 0 auto";
    btn.style.display = "block";
    btn.style.width = "120px";
    btn.style.background = "#f5f5f5";
    btn.style.color = "#667";
    btn.style.border = "1.4px solid #e0e0e0";
    btn.style.fontSize = "1.11rem";
    return btn;
}
// === Главная логика — визуализация ===
function render() {
    app.className = "";
    app.innerHTML = "";

    if (!currentUser) {
        reset();
        app.innerHTML += "<h2>Кто ты?</h2>";
        const wrap = document.createElement('div');
        wrap.className = "user-select";
        USERS.forEach(u => {
            const btn = document.createElement('button');
            btn.className = `user-btn`;
            btn.textContent = u.name;
            btn.onclick = () => {
                currentUser = u.name;
                QUESTIONS = QUESTIONS_SET[currentUser] || [];
                render();
            };
            wrap.appendChild(btn);
        });
        app.appendChild(wrap);
    } else if (step < QUESTIONS.length) {
        app.className = USER_STYLES[currentUser];
        const q = QUESTIONS[step];
        const block = document.createElement('div');
        block.className = "question-block";
        block.style.background = q.bg;

        block.innerHTML = `
            <div class="question-icon">${q.icon}</div>
            <div class="question-label">${q.label}</div>
        `;
        const opts = document.createElement('div');
        opts.className = "options-row";
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "option-emoji";
            btn.innerHTML = `<span>${opt.emoji}</span><span style="font-size:1.08rem; margin-top:2px">${opt.text}</span>`;
            btn.onclick = () => {
                answers[q.key] = `${opt.emoji} ${opt.text}`;
                step++;
                render();
            };
            opts.appendChild(btn);
        });
        block.appendChild(opts);
        app.appendChild(Object.assign(document.createElement("h2"), {textContent: currentUser}));
        app.appendChild(block);
        app.appendChild(miniExitBtn());
    } else {
        let user = currentUser, age = USERS.find(u => u.name === user).age;
        saveAnswers(user, today(), answers);
        app.className = USER_STYLES[user];
        app.appendChild(Object.assign(document.createElement('h2'), {textContent: user + ", день начинается!"}));
        let motiv = document.createElement("div");
        motiv.className = "motivation";
        motiv.textContent = motivationPhrase(user);
        app.appendChild(motiv);

        let plan = planForDay(answers, age);
        let planDiv = document.createElement("div");
        planDiv.className = "plan";
        planDiv.innerHTML = "<b>Твой план:</b><br><ul style='list-style:none;padding:0;margin:8px 0 0 0'>" +
            plan.map(item => `<li>${item}</li>`).join("") + "</ul>";
        app.appendChild(planDiv);

        let results = document.createElement("div");
        results.style.margin = "18px auto 5px auto";
        results.style.background = "#fefefe";
        results.style.borderRadius = "13px";
        results.style.padding = "11px 13px 6px 13px";
        results.innerHTML = `<b>Твои ответы сегодня:</b><br>` +
            QUESTIONS.map(q => `<span>${q.icon || ""} <b>${q.label}:</b> <span>${answers[q.key]}</span>`).join("<br>");
        app.appendChild(results);

        // Кнопка Поделиться в Телеграм
        let shareText = buildTelegramText(user, answers, QUESTIONS);
        app.appendChild(telegramShareBtn(shareText));
        // История и повтор
        app.appendChild(history(user));
        let again = Object.assign(document.createElement('button'), {
            textContent: "⟲ Пройти ещё раз",
            onclick: ()=>{
                answers = {};
                step = 0; render();
            }
        });
        again.style.margin = "12px 0 0 0";
        app.appendChild(again);
        app.appendChild(miniExitBtn());
    }
}
render();
