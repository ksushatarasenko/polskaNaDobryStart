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

 
