function checkRadio(taskId) {
    const correctAnswers = {
        task2_01_17: {
            question1: '3',
        },
    };

    let allCorrect = true;

    // Проверяем, есть ли корректные ответы для данного задания
    if (correctAnswers[taskId]) {
        const answers = correctAnswers[taskId];

        // Перебираем все вопросы для данного задания
        for (const [question, correctValue] of Object.entries(answers)) {
            const selectedAnswer = document.querySelector(`#${taskId} input[name="${question}"]:checked`);
            
            // Проверка на наличие выбранного ответа
            const inputElement = document.querySelector(`#${taskId} input[name="${question}"]`);
            if (!inputElement) {
                console.error(`Не найден элемент input для question ${question} в task ${taskId}`);
                continue;
            }

            const taskElement = inputElement.closest('.task');
            if (!taskElement) {
                console.error(`Не найден элемент .task для question ${question} в task ${taskId}`);
                continue;
            }

            if (selectedAnswer) {
                // Проверяем правильность ответа
                if (selectedAnswer.value === correctValue) {
                    taskElement.classList.add('correct');
                    taskElement.classList.remove('incorrect');
                } else {
                    taskElement.classList.add('incorrect');
                    taskElement.classList.remove('correct');
                    allCorrect = false;
                }
            } else {
                // Если пользователь не выбрал вариант ответа
                taskElement.classList.add('incorrect');
                taskElement.classList.remove('correct');
                allCorrect = false;
            }
        }
    } else {
        console.error(`Нет правильных ответов для задания с id: ${taskId}`);
        return;
    }
}
