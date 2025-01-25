function checkRadio(taskId) {
    const correctAnswers = {
        task604: {
            question1: '1',
            question2: '1',
            question3: '2',
            question4: '2',
            question5: '1',
        },
        task617: {
            question1: '2',
        },
        task624: {
            question1: '1',
        },
        task6d04: {
            question1: '2',
            question2: '1',
            question3: '1',
            question4: '2',
            question5: '1',
            question6: '1'
        },
        task705: {
            question1: '3',
        },
        task711: {
            question1: '2',
        },
        task724: {
            question1: '1',
            question2: '2',
            question3: '2',
            question4: '2',
            question5: '1',
            question6: '1'
        },
        task704: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '2'
        },
        task705: {
            question1: '2',
            question2: '1',
            question3: '2',
            question4: '2',
            question5: '1',
            question6: '2'
        },
        task814: {
            question1: '1',
        },
        task918: {
            question1: '2',
        },
        task1011: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '1',
            question6: '2'
        },
        task1013: {
            question1: '3',
        },
        task1016: {
            question1: '1',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '1'
        },
        task1018: {
            question1: '3',
        },
        task1108: {
            question1: '1',
            question2: '1',
            question3: '1',
            question4: '2',
            question5: '1',
            question6: '2',
            question7: '2'
        },
        task1122: {
            question1: '3',
        },
        task1209: {
            question1: '2',
        },
        task1318: {
            question1: '3',
        },
        task1409: {
            question1: '2',
        },
        task1428: {
            question1: '3',
        },
        task1520: {
            question1: '2',
        },
        task1612: {
            question1: '3',
        },
        task1617: {
            question1: '2',
            question2: '1',
            question3: '2',
            question4: '1',
            question5: '3',
        },
        task1707: {
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
