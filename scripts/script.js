// Универсальная функция для проверки всех типов вопросов
function checkAll(setId) {
    const set = document.getElementById(setId);

    // Вызов функции для проверки вписанных слов, если есть input поля
    checkAnswers(setId);

    // Проверка вариантов с data-correct
    const questions = set.querySelectorAll('.questionOption');

    questions.forEach(question => {
        const correctIndex = question.getAttribute('data-correct');
        const selectedOption = question.querySelector('.selected');
        const selectedIndex = selectedOption ? selectedOption.getAttribute('data-index') : null;

        // Если вариант выбран, проверяем его корректность
        if (selectedIndex !== null) {
            if (selectedIndex === correctIndex) {
                selectedOption.classList.add('correct');
                selectedOption.classList.remove('incorrect');
            } else {
                selectedOption.classList.add('incorrect');
                selectedOption.classList.remove('correct');
            }
        }
    });
}

// Функция для проверки вписанных слов
function checkAnswers(setId) {
    const set = document.getElementById(setId);
    const inputs = set.querySelectorAll('input[data-answer]');

    inputs.forEach(input => {
        const correctAnswer = input.getAttribute('data-answer').toLowerCase();
        const userAnswer = input.value.trim().toLowerCase();

        // Проверяем правильность ответа в input
        if (userAnswer === correctAnswer) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });
}

// Обработчик клика для выбора вариантов ответов
document.addEventListener('DOMContentLoaded', (event) => {
    const questions = document.querySelectorAll('.questionOption');

    questions.forEach(question => {
        const options = question.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });
    });

    // Обработчик клика для кнопок проверки
    const checkButtons = document.querySelectorAll('.checkAnswersBtn');

    checkButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const setId = button.getAttribute('data-set-id');
            checkAll(setId);  // Универсальный вызов для проверки конкретного набора вопросов
        });
    });
});


// кнопка для подсказки --------------------------------------------
function toggleHints(hintsId) {
    var hints = document.getElementById(hintsId);
    if (hints.style.display === "none") {
        hints.style.display = "block";
    } else {
        hints.style.display = "none";
    }
}

// prowerka Optima

function toggleHint2(element) {
    element.classList.toggle('active');
}



// Увеличение картинки при клике
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            this.classList.toggle('zoomed');
        });
    });
});

// функция для выпадающего списка
function checkAnswersForm(formId) {
    const form = document.getElementById(formId);
    const selects = form.querySelectorAll('select');

    selects.forEach(select => {
        if (select.value === "correct") {
            select.classList.remove('incorrect');
            select.classList.add('correct');
        } else {
            select.classList.remove('correct');
            select.classList.add('incorrect');
        }
    });
}

// функция выбора ответа на кнопке

// Для хранения выбранных ответов
let selectedAnswers = {};

function selectAnswer(questionId, btnElement) {
    // Убираем с других кнопок синие бордеры
    const buttons = document.querySelectorAll(`#${questionId} .answerBtn`);
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Добавляем синий бордер на выбранную кнопку
    btnElement.classList.add('selected');

    // Сохраняем выбранный ответ (правильный или неправильный)
    selectedAnswers[questionId] = btnElement.dataset.correct === 'true';
}

function checkAllAnswersBtn() {
    // Перебираем все вопросы
    const questions = document.querySelectorAll('.button-container');
    questions.forEach(question => {
        const questionId = question.id;
        const buttons = question.querySelectorAll('.answerBtn');

        // Перебираем кнопки каждого вопроса
        buttons.forEach(btn => {
            const isSelected = btn.classList.contains('selected');
            const isCorrect = btn.dataset.correct === 'true';

            // Подсвечиваем правильный или неправильный ответ
            if (isSelected && isCorrect) {
                btn.classList.add('correct'); // Зеленый бордер для правильных ответов
            } else if (isSelected && !isCorrect) {
                btn.classList.add('incorrect'); // Красный бордер для неправильных
            }
        });
    });
}


// 
// texteria

document.getElementById('checkAnswersButton').addEventListener('click', function () {
    // Находим все текстовые поля с атрибутом data-correct
    const answers = document.querySelectorAll('.answer-input');
    let correctCount = 0;

    answers.forEach(answer => {
        const userAnswer = answer.value.trim(); // Получаем введённый текст
        const correctAnswer = answer.getAttribute('data-correct'); // Ожидаемый ответ

        if (userAnswer === correctAnswer) {
            // Если ответ верный
            answer.classList.add('correct');
            answer.classList.remove('incorrect');
            correctCount++;
        } else {
            // Если ответ неверный
            answer.classList.add('incorrect');
            answer.classList.remove('correct');
        }
    });

    // Отображаем результат проверки
    const resultDiv = document.getElementById('result');
    if (correctCount === answers.length) {
        resultDiv.textContent = 'Все ответы правильные! Молодец!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Правильных ответов: ${correctCount} из ${answers.length}`;
        resultDiv.style.color = 'red';
    }
});


// -------------- выбор несколько ответов

// function arraysEqual(arr1, arr2) {
//     return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
// }

// function checkAnswersLabel(formId, resultId) {
//     const form = document.getElementById(formId);
//     const questions = form.getElementsByClassName('question');
//     let score = 0;
//     let isAllCorrect = true;

//     for (let i = 0; i < questions.length; i++) {
//         const question = questions[i];
//         const correctAnswers = question.getAttribute('data-correct').split(',').map(val => val.trim());
//         const selectedAnswers = Array.from(form.querySelectorAll(`input[name="q${i + 1}"]:checked`)).map(el => el.value.trim());

//         if (!arraysEqual(selectedAnswers, correctAnswers)) {
//             isAllCorrect = false;
//         } else {
//             score++;
//         }
//     }

//     const resultElement = document.getElementById(resultId);
//     if (isAllCorrect) {
//         resultElement.innerHTML = "Правильно!";
//     } else {
//         resultElement.innerHTML = "Неправильно!";
//     }
// }


function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

function checkAnswersLabel(formId, resultId) {
    const form = document.getElementById(formId);
    const questions = form.getElementsByClassName('question');
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const correctAnswers = question.getAttribute('data-correct').split(',').map(val => val.trim());
        const selectedAnswers = Array.from(form.querySelectorAll(`input[name="q${i + 1}"]:checked`)).map(el => el.value.trim());

        const labels = question.querySelectorAll('label');

        // Reset colors before checking
        labels.forEach(label => label.style.color = '');

        // Compare correct answers with user selection
        labels.forEach(label => {
            const input = label.querySelector('input');
            if (input) {
                const answerValue = input.value.trim();
                if (selectedAnswers.includes(answerValue)) {
                    if (correctAnswers.includes(answerValue)) {
                        label.style.color = 'green'; // Correctly selected answer
                    } else {
                        label.style.color = 'red'; // Incorrectly selected answer
                    }
                } else {
                    if (correctAnswers.includes(answerValue)) {
                        label.style.color = 'green'; // Correct answer not selected
                    }
                }
            }
        });

        // Update score if all selected answers match correct answers
        if (arraysEqual(selectedAnswers, correctAnswers)) {
            score++;
        }
    }

}
