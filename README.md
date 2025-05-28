# eday
# Утренняя анкета для детей / Morning Questionnaire for Kids

## Описание проекта / Project Description

**Русский**  
Это простой веб-проект — анкета для детей (4–12 лет), который помогает утром настраиваться на хороший день. Дети выбирают своё имя и отвечают на несколько очень коротких, мотивирующих вопросов. Их ответы сохраняются в браузере, формируется небольшой мотивационный план на день, а также доступна история ответов. Основные цели — улучшить настроение, снизить время за телефоном и поддержать самостоятельность ребёнка.  
Проект подходит для размещения на GitHub Pages (только HTML/CSS/JS, полностью фронтенд).

**English**  
This is a simple web project — a morning questionnaire for kids (ages 4–12) to help start the day with a good mood. Kids select their name and answer a few very short, motivating questions. Their responses are saved in the browser, a small motivation plan is generated, and answer history is available too. The main goals are to improve mood, reduce screen time, and support the child’s independence.  
The project is made for GitHub Pages (HTML/CSS/JS only, fully frontend).

---

## Как использовать / How to Use

1. Клонируйте или скачайте этот репозиторий.  
   Clone or download this repository.

2. Файлы проекта:

# Утренняя анкета для детей / Morning Questionnaire for Kids

## Описание проекта / Project Description

**Русский**  
Это простой веб-проект — анкета для детей (4–12 лет), который помогает утром настраиваться на хороший день. Дети выбирают своё имя и отвечают на несколько очень коротких, мотивирующих вопросов. Их ответы сохраняются в браузере, формируется небольшой мотивационный план на день, а также доступна история ответов. Основные цели — улучшить настроение, снизить время за телефоном и поддержать самостоятельность ребёнка.  
Проект подходит для размещения на GitHub Pages (только HTML/CSS/JS, полностью фронтенд).

**English**  
This is a simple web project — a morning questionnaire for kids (ages 4–12) to help start the day with a good mood. Kids select their name and answer a few very short, motivating questions. Their responses are saved in the browser, a small motivation plan is generated, and answer history is available too. The main goals are to improve mood, reduce screen time, and support the child’s independence.  
The project is made for GitHub Pages (HTML/CSS/JS only, fully frontend).

---

## Как использовать / How to Use

1. Клонируйте или скачайте этот репозиторий.  
   Clone or download this repository.

2. Файлы проекта:

/index.html
/style.css
/app.js


3. Откройте `index.html` в браузере для теста  
Open `index.html` in your browser to test

4. Для публикации на GitHub Pages:
1. Зайдите в настройки репозитория на GitHub  
   Go to the repository settings on GitHub  
2. В разделе **Pages** выберите исходную ветку (обычно `main`), папку `/` (root или `/docs` если нужно)  
   In the **Pages** section, set the source branch (usually `main`), folder `/` (root or `/docs` if required)  
3. Сайт будет доступен по вашему адресу GitHub Pages  
   The website will be available at your GitHub Pages url

---

## Структура анкеты / Questionnaire Structure

- **Выбор имени**: Вера (4 года), Матвей (7 лет), Никита (12 лет)
- **Утренние вопросы**:  
- Как ты себя чувствуешь? / How do you feel today?  
- Что тебе сегодня приснилось? / What did you dream about?  
- Чего хочешь сегодня сделать? / What do you want to do today?
- **Мотивация**: После заполнения анкеты показывается простая мотивационная фраза
- **План дня**: На основе ответов формируется мини-план дня без гаджетов
- **История**: Сохраняется история ответов в браузере
- **Адаптация для возраста**: Вопросы и план соответствуют возрасту ребёнка

---

## Как дополнять и изменять проект / How to Modify or Expand the Project

- **Добавить/изменить вопросы:**  
- Откройте файл `app.js`, найдите блок `const QUESTIONS = [...]`  
 Добавьте или измените объекты с вопросами.

- **Изменить мотивационные фразы:**  
- В файле `app.js` найдите функцию `motivationPhrase()`  
 Добавьте свои фразы в массив.

- **Добавить пользователей:**  
- В файле `app.js` найдите массив `USERS`  
 Добавьте нового ребёнка с именем и возрастом.

- **Доработать стиль:**  
- Внесите стилистические изменения в `style.css` для адаптации внешнего вида.

- **Локальное хранение:**  
- Вся информация хранится ТОЛЬКО в браузере пользователя (localStorage).
- Данные не отправляются на сервер.

---

## License

[MIT License](LICENSE)
