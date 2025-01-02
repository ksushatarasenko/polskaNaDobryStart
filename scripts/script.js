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

// Проверка порядка диалогов----------------------------------------
const correctDialogs = {
    "dialog1": [
        "Dzień dobry. Czy jest czarny długopis?",
        "Dzień dobry, tak, jest.",
        "Ile kosztuje?",
        "Dwa złote, ale mam taki ładny niebieski z małym kotkiem. Kosztuje dwa pięćdziesiąt.",
        "Aha, więc poproszę ten długopis z kotkiem.",
        "Coś jeszcze?",
        "Tak, proszę jeszcze kanapkę.",
        "Z żółtym serem czy z białym serem? Ta z żółtym kosztuje trzy złote, a z białym trzy dwadzieścia, ale jest naprawdę dobra i zdrowa.",
        "A czy jest kanapka z nutellą?",
        "Niestety, nie ma.",
        "To poproszę bułkę z białym serem i jeszcze małe kakao.",
        "Może chcesz duże? Jesteś taka malutka! Musisz dużo jeść!",
        "No dobrze, proszę duże kakao. Ile płacę?",
        "Siedem złotych, siedemdziesiąt groszy.",
        "Proszę. Tu jest osiem złotych.",
        "I trzydzieści groszy reszty. Dziękuję.",
        "Do widzenia!"
    ]
};

// Проверка порядка диалога
function checkOrder(dialogId) {
    const correctOrder = correctDialogs[dialogId];
    const userOrder = [...document.getElementById('orderedDialog').querySelectorAll('.draggable')]
        .map(el => el.textContent.trim());

    userOrder.forEach((text, index) => {
        const element = document.getElementById('orderedDialog').children[index];
        if (text === correctOrder[index]) {
            element.style.backgroundColor = 'lightgreen'; // Подсветка зелёным при правильном порядке
        } else {
            element.style.backgroundColor = 'lightcoral'; // Подсветка красным при неправильном порядке
        }
    });

    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        alert('Poprawnie uporządkowane!');
    } else {
        alert('Niestety, spróbuj ponownie.');
    }
}

// Логика перетаскивания
const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('orderedDialog');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
    const afterElement = getDragAfterElement(dropzone, e.clientY);
    const dragging = document.querySelector('.dragging');
    if (afterElement == null) {
        dropzone.appendChild(dragging);
    } else {
        dropzone.insertBefore(dragging, afterElement);
    }
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', () => {
    dropzone.classList.remove('dragover');
});

function getDragAfterElement(containerFraz, y) {
    const draggableElements = [...containerFraz.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
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

 
