document.getElementById('practice1').addEventListener('click', function() {
    let output = "Практическая работа № 1\n";
    // 0) Создать переменную, узнать ее тип, добавить вывод на экран текста
    let variable = 5; // Пример переменной
    output += "0) Создана переменная, тип: " + typeof variable + "\n";
    // 2) Вывести все числа от 1 до 40, с использованием 3-х разных циклов
    // Цикл for
    output += "2) Числа от 1 до 40 (Цикл for): ";
    for (let i = 1; i <= 40; i++) {
        output += i + " ";
    }
    output += "\n";
    // Цикл while
    output += "   Числа от 1 до 40 (Цикл while): ";
    let j = 1;
    while (j <= 40) {
        output += j + " ";
        j++;
    }
    output += "\n";
    // Цикл do-while
    output += "   Числа от 1 до 40 (Цикл do-while): ";
    let k = 1;
    do {
        output += k + " ";
        k++;
    } while (k <= 40);
    output += "\n";
    // 5) Вывести четные числа от 8 до 20
    output += "5) Четные числа от 8 до 20: ";
    for (let i = 8; i <= 20; i += 2) {
        output += i + " ";
    }
    output += "\n";
    // 6) Вывести нечетные числа от 1 до 7, пропустив 5
    output += "6) Нечетные числа от 1 до 7 (пропуская 5): ";
    for (let i = 1; i <= 7; i += 2) {
        if (i !== 5) {
            output += i + " ";
        }
    }
    output += "\n";

    document.getElementById('output').innerText = output;
});

document.getElementById('practice2').addEventListener('click', function() {
    let output = "Практическая работа № 2\n";
    // 1) Создание массива тремя разными способами
    let array1 = [1, 2, 3, 4, 5];
    let array2 = new Array(6, 7, 8, 9, 10);
    let array3 = Array.of(11, 12, 13, 14, 15);
    output += "1) Массивы созданы тремя способами\n";
    // 2) Вывести на экран 5-й член массива и изменить его значение
    output += "2) 5-й член массива array1: " + array1[4] + "\n";
    array1[4] = 100;
    output += "   Измененный 5-й член массива array1: " + array1[4] + "\n";
    // 3) Длина массива
    output += "3) Длина массива array1: " + array1.length + "\n";
    // 4) Вывести все элементы массива
    output += "4) Элементы массива array1: ";
    for (let i = 0; i < array1.length; i++) {
        output += array1[i] + " ";
    }
    output += "\n";
    // 5) Создание и объединение двух массивов
    let mergedArray = array1.concat(array2);
    output += "5) Объединенный массив: " + mergedArray.join(", ") + "\n";
    // 6) и 7) Удаление последнего элемента массива
    let removedElement = mergedArray.pop();
    output += "6) Удаленный элемент: " + removedElement + "\n";
    removedElement = mergedArray.pop();
    output += "7) Удаленный элемент: " + removedElement + "\n";
    // 8) Добавление нового элемента в начало массива
    mergedArray.unshift(0);
    output += "8) Массив после добавления элемента: " + mergedArray.join(", ") + "\n";
    // 9) Получение текущей даты
    let today = new Date();
    output += "9) Сегодняшняя дата: " + today.toLocaleDateString() + "\n";
    // 10) Вывод даты в форматированном виде
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    output += "10) Сегодняшняя дата (форматированная): " + today.toLocaleDateString('ru-RU', options) + "\n";
    // 11) Функция произведения двух случайных чисел
    function calculateProduct() {
        let num1 = Math.floor(Math.random() * 51);
        let num2 = Math.floor(Math.random() * 51);
        return { num1, num2, product: num1 * num2 };
    }
    let result = calculateProduct();
    output += "11) Произведение двух случайных чисел: " + result.num1 + " x " + result.num2 + " = " + result.product + "\n";
    document.getElementById('output').innerText = output;
});

document.addEventListener('DOMContentLoaded', function() {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = prompt('Пожалуйста, представьтесь:');
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }
    if (userName) {
        alert('Добро пожаловать, ' + userName + '!');
    }
});

const qBank = [
    {
        question: "Какой метод массива используется для добавления элемента в конец массива?",
        options: ["unshift", "push", "pop", "shift"],
        answer: "push",
        points: 1
    },
    {
        question: "Какое ключевое слово используется для объявления переменной?",
        answer: "let",
        points: 2
    },
    {
        question: "Как называется оператор '===' в JavaScript?",
        options: ["Присваивание", "Сравнение", "Строгое равенство", "Строгая неравенство"],
        answer: "Строгое равенство",
        points: 1
    },
    {
        question: "Какой метод преобразует JSON в объект JavaScript?",
        answer: "parse",
        points: 2
    },
    {
        question: "Какой метод используется для отладки и вывода информации в консоль?",
        answer: "log",
        points: 1
    },
    {
        question: "Что делает оператор '||' в JavaScript?",
        options: ["ИЛИ", "И", "XOR", "НЕ"],
        answer: "ИЛИ",
        points: 1
    },
    {
        question: "Какое ключевое слово используется для создания константы?",
        answer: "const",
        points: 2
    },
    {
        question: "Какой метод строки используется для поиска подстроки?",
        options: ["find", "search", "locate", "indexOf"],
        answer: "indexOf",
        points: 1
    },
    {
        question: "Какой метод используется для округления числа до ближайшего целого?",
        answer: "Math.round",
        points: 2
    },
    {
        question: "Какой объект используется для работы с датами?",
        answer: "Date",
        points: 1
    },
    {
        question: "Как называется структура данных, представляющая собой набор пар ключ-значение?",
        options: ["Array", "Object", "Set", "Map"],
        answer: "Object",
        points: 1
    },
    {
        question: "Какой метод массива используется для удаления последнего элемента?",
        answer: "pop",
        points: 2
    },
    {
        question: "Какая инструкция используется для обработки исключений?",
        options: ["try...catch", "if...else", "switch...case", "for...while"],
        answer: "try...catch",
        points: 1
    },
    {
        question: "Какой оператор используется для объединения строк?",
        answer: "+",
        points: 1
    },
    {
        question: "Какой метод массива используется для добавления элемента в начало массива?",
        answer: "unshift",
        points: 2
    },
];

function getRandomQuestions(questions, num = 10) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const questions = getRandomQuestions(qBank);  

function startTest() {
    let score = 0;
    let userAnswers = [];

    for (let i = 0; i < questions.length; i++) {
        let userResponse;
        if (questions[i].options) {
            userResponse = prompt(`${questions[i].question}\nОтветы: ${questions[i].options.join(', ')}`);
        } else {
            userResponse = prompt(questions[i].question);
        }

        let isCorrect = userResponse.toLowerCase() === questions[i].answer.toLowerCase();
        if (isCorrect) {
            score += questions[i].points;
        }
        userAnswers.push({ question: questions[i].question, userResponse, isCorrect });
    }

    showResults(score, userAnswers);
}

function showResults(score, userAnswers) {
    let output = `Ваш результат: ${score} баллов(а).\n`;
    userAnswers.forEach(answer => {
        output += `Вопрос: ${answer.question}\nВаш ответ: ${answer.userResponse} - ${answer.isCorrect ? 'Верно' : 'Неверно'}\n\n`;
    });
    alert(output);
}

document.getElementById('startTest').addEventListener('click', startTest);

document.getElementById('showSplash').addEventListener('click', function() {
    let userName = localStorage.getItem('userName') || 'Гость';
    let today = new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('splashContent').innerText = `Сегодня ${today}\nДобро пожаловать, ${userName}!`;
    document.getElementById('splashScreen').style.display = 'flex';
});

document.getElementById('splashScreen').addEventListener('click', function() {
    this.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
    let themeTogglerText = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
    document.getElementById('themeToggler').textContent = themeTogglerText;
});

document.getElementById('backgroundSelect').addEventListener('change', function() {
    var selectedBackground = this.value;
    document.body.classList.remove('bg-none', 'bg-pattern1', 'bg-pattern2');
    document.body.classList.add('bg-' + selectedBackground);
});

document.getElementById('openThemeSettings').addEventListener('click', function() {
    var themeSettings = document.querySelector('.theme-settings');
    themeSettings.classList.toggle('hidden');
});

document.getElementById('colorSchemeSelect').addEventListener('change', function() {
    updateColorScheme(this.value);
});

document.addEventListener('DOMContentLoaded', function() {
    let preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    document.body.classList.add(preferredTheme);
    updateColorScheme('blue');
    let themeTogglerText = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
    document.getElementById('themeToggler').textContent = themeTogglerText;
});

function updateColorScheme(scheme) {
    document.body.classList.remove('scheme-blue', 'scheme-green', 'scheme-red');
    if (scheme !== 'default') {
        document.body.classList.add('scheme-' + scheme);
    }
}

document.getElementById('themeToggler').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    let currentScheme = document.getElementById('colorSchemeSelect').value;
    updateColorScheme(currentScheme);
    this.textContent = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
});

document.addEventListener('DOMContentLoaded', function() {
    let preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    document.body.classList.add(preferredTheme);
    updateColorScheme(document.getElementById('colorSchemeSelect').value);
    let themeTogglerText = document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
    document.getElementById('themeToggler').textContent = themeTogglerText;
});
