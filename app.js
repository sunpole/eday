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

function shuffle(array) {  
  let arr = array.slice();  
  for (let i = arr.length - 1; i > 0; i--) {  
    const j = Math.floor(Math.random() * (i + 1));  
    [arr[i], arr[j]] = [arr[j], arr[i]];  
  }  
  return arr;  
}  

// Дополнительные мотивационные вопросы для Никиты с возможностью "свой вариант"  
function getNikitaQuestions() {  
    let base = [  
        {  
            label: "Кем хочешь стать через год?",  
            key: "future",  
            type: "emoji+input",  
            options: [  
                {emoji:"👨‍🔬", text:"Стать умнее"},  
                {emoji:"🏆", text:"Лучше в спорте"},  
                {emoji:"🧑‍🎨", text:"Развивать таланты"},  
                {emoji:"❤️", text:"Сильнее в вере и семье"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#ffcdd2 60%, #fbc02d 100%)", icon: "🎯"  
        },  
        {  
            label: "Как бы поступил Иисус в твоей трудной ситуации?",  
            key: "jesus",  
            type: "emoji+input",  
            options: [  
                {emoji:"🤝", text:"Проявил доброту"},  
                {emoji:"🙏", text:"Помолился"},  
                {emoji:"🤲", text:"Помог другому"},  
                {emoji:"😌", text:"Простил"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#ece9f7,#ffcdd2 100%)", icon: "✝️"  
        },  
        {  
            label: "Что держит тебя ближе к Богу?",  
            key: "bibleclose",  
            type: "emoji+input",  
            options: [  
                {emoji:"📖", text:"Читаю Библию"},  
                {emoji:"🙏", text:"Молюсь"},  
                {emoji:"❤️", text:"Стараюсь делать добро"},  
                {emoji:"👪", text:"Семейные разговоры"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#fffde7, #e1bee7 100%)", icon: "🙌"  
        },  
        {  
            label: "Что вдохновляет не тратить время на телефон?",  
            key: "notPhone",  
            type: "emoji+input",  
            options: [  
                {emoji:"📗", text:"Книга интереснее"},  
                {emoji:"🏃", text:"Тренировка"},  
                {emoji:"😃", text:"Общение с семьёй"},  
                {emoji:"💡", text:"Стать лучше"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#c1c8e4,#f9f9f9 100%)", icon: "📵"  
        },  
        {  
            label: "Что бы ты хотел сделать важного для семьи?",  
            key: "family",  
            type: "emoji+input",  
            options: [  
                {emoji:"🥗", text:"Приготовить или помочь"},  
                {emoji:"🧹", text:"Убраться"},  
                {emoji:"🎁", text:"Порадовать родных"},  
                {emoji:"💬", text:"Поговорить с родителями"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg, #ffe0b2, #ffb6b9 100%)", icon: "👪"  
        },  
        {  
            label: "Когда ты сегодня займёшься уроками?",  
            key: "study",  
            type: "emoji+input",  
            options: [  
                {emoji:"⏲", text:"Сразу после школы"},  
                {emoji:"🌅", text:"После обеда"},  
                {emoji:"🌙", text:"Перед сном (не лучший вариант)"},  
                {emoji:"🔄", text:"Когда напомнят"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg, #e3f2fd, #ffe0b2 100%)", icon: "📚"  
        },  
        {  
            label: IS_SUMMER ? "Что будешь читать этим летом?" : "Что прочитаешь сегодня?",  
            key: "read",  
            type: "emoji+input",  
            options: [  
                {emoji:"📖", text:"Приключения"},  
                {emoji:"📚", text:"Библию"},  
                {emoji:"📰", text:"Интересное"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#e1f5fe,#ffcdd2 100%)", icon: "📖"  
        },  
        {  
            label: "Что бы ты записал (ДЗ, мысль, планы) в дневник или тетрадь?",  
            key: "journal",  
            type: "emoji+input",  
            options: [  
                {emoji:"📝", text:"Домашка"},  
                {emoji:"✍️", text:"Мысли/планы"},  
                {emoji:"📖", text:"Стих или идея из Библии"},  
                {emoji:"🤔", text:"Вопрос родителям"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#b2f7ef,#fadcff 100%)", icon: "📔"  
        },  
        {  
            label: "Что бы ты изменил в своём дне?",  
            key: "change",  
            type: "emoji+input",  
            options: [  
                {emoji:"⏲", text:"Меньше телефона"},  
                {emoji:"💬", text:"Больше общаться с родными"},  
                {emoji:"📝", text:"Лучше планировать"},  
                {emoji:"🤝", text:"Больше помогать"},  
                {emoji:"✍️", text:"Свой вариант"}  
            ],  
            bg: "linear-gradient(120deg,#fbed96,#abecd6 100%)", icon: "🔁"  
        }  
    ];  
    // мешаем вопросы каждый день, первый — “кем стать”  
    let first = base.splice(0,1);  
    let rest = shuffle(base);  
    return first.concat(rest);  
}  

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
    "Никита": getNikitaQuestions()  
};  

// ФУНКЦИИ ДЛЯ РАБОТЫ  
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
            "Запиши мысли, планы или домашку в дневник/тетрадь",
            (answers.bibleclose?.includes("Библию") || answers.read?.includes("Библию") ? "Читай Божье слово каждый день!" : "Прочитай сегодня хотя бы пару стихов из Библии"),
            (answers.habit ? "Сделай привычку дня: "+answers.habit : ""),
            "Минимизируй телефон — только для полезного!"
        ].filter(Boolean);
        if (IS_SUMMER) plan.push("Летом — новые книги, интересы, знания и духовные открытия!");
    }
    return plan;
}
function buildTelegramText(username, answers, questionsList) {
    let lines = [`⭐ Доброе утро, это анкета ${username}:`];
    questionsList.forEach(q=>{
        lines.push(`${q.icon||""} ${q.label} ${answers[q.key]||""}`);
    });
    lines.push(`\nОтвет отправлен из семейной анкеты на сайте!`);
    return lines.join('\n');
}
function telegramShareBtn(text) {
    const btn = document.createElement('button');
    btn.textContent = "📤 Поделиться в Телеграм";
    btn.className = "tg-share";
    btn.onclick = () => {
        const url = 'https://t.me/share/url?url=&text=' + encodeURIComponent(text);
        if(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)){
            window.open(url, "_blank");
        } else {
            window.open(url, "_blank");
            setTimeout(()=>{
                if(document.getElementById("tg-notify")) return;
                let note = document.createElement("div");
                note.className = 'tg-note';
                note.id = "tg-notify";
                note.textContent = "На ПК нельзя поделиться напрямую — открой сайт на телефоне, либо скопируй ответы и отправь родителям в Телеграм!";
                btn.parentElement.appendChild(note);
            }, 400);
        }
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

// === ГЛАВНАЯ ВИЗУАЛИЗАЦИЯ ===
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
                QUESTIONS = (currentUser === "Никита"
                    ? getNikitaQuestions() // с перемешкой и "свой вариант"
                    : QUESTIONS_SET[currentUser]) || [];
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
        let inputNode = null;
        let inputValue = '';
        let otherSelected = false;

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "option-emoji";
            btn.innerHTML = `<span>${opt.emoji}</span><span style="font-size:1.13rem; margin-top:2px">${opt.text}</span>`;
            btn.onclick = () => {
                if (q.type && q.type.includes("input") && (opt.text === "Свой вариант" || idx === q.options.length-1)) {
                    if (!inputNode) {
                        otherSelected = true;
                        inputNode = document.createElement('input');
                        inputNode.type = "text";
                        inputNode.className = "opt-other-input";
                        inputNode.placeholder = "Напиши свой ответ";
                        inputNode.oninput = e => { inputValue = e.target.value; };
                        opts.appendChild(inputNode);

                        let okBtn = document.createElement('button');
                        okBtn.type = "button";
                        okBtn.textContent = "OK";
                        okBtn.className = "option-emoji";
                        okBtn.onclick = () => {
                            if(inputValue.trim().length < 1) {inputNode.style.borderColor="red";return;}
                            answers[q.key] = inputValue.trim();
                            step++;
                            render();
                        };
                        opts.appendChild(okBtn);
                        inputNode.focus();
                    }
                } else {
                    answers[q.key] = `${opt.emoji} ${opt.text}`;
                    step++;
                    render();
                }
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

        // Мотивационные рекомендации для Никиты
        if(currentUser === "Никита") {
            let recDiv = document.createElement("div");
            recDiv.style.background="#fff8e1";
            recDiv.style.borderRadius="12px";
            recDiv.style.margin="14px 0 10px 0";
            recDiv.style.padding="18px 14px";
            recDiv.style.color="#d84315";
            recDiv.style.fontSize="1.14rem";
            recDiv.style.fontWeight="bold";
            recDiv.innerHTML = `<b>Мотивация на день, Никита:</b><ul style='margin:11px 0 0 0; padding-left:24px;text-align:left'>
            <li>Записывай домашние задания (и мысли) в дневник или тетрадь сразу после уроков.</li>
            <li>Поставь себе цель помочь дома хотя бы 1 раз сегодня.</li>
            <li>Меньше телефона — больше общения и новых реальных достижений.</li>
            <li>Вечером расскажи родителям, что ты сегодня узнал, сделал или чему научился.</li>
            <li>Каждый день открывай Библию — хотя бы одну главу.</li>
            </ul>`;
            app.appendChild(recDiv);
        }

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
