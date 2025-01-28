function checkRadio(taskId) {
    const correctAnswers = {
        task0103: {
            question1: '1',
            question2: '2',
            question3: '2',
            question4: '1',
            question5: '1',
            question6: '2',
            question7: '1',
        },
        task0108: {
            question1: '3',
        },
        task0110: {
            question1: '1',
            question2: '2',
            question3: '1',
        },
        task0113: {
            question1: '2',
            question2: '1',
            question3: '2',
            question4: '2',
            question5: '1',
            question6: '2',
            question7: '2',
        },
        task0118: {
            question1: '2',
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
