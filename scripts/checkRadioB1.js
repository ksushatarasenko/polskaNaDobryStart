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
        // lekcja 02
        task0203: {
            question1: '2',
            question2: '1',
            question3: '2',
            question4: '1',
            question5: '2',
            question6: '2',
            question7: '2',
        },
        task0210: {
            question1: '3',
            question2: '1',
            question3: '3',
            question4: '3',
            question5: '2',
            question6: '1',
            question7: '2',
        },
        task0212: {
            question1: '2',
        },
        task0229: {
            question1: '1',
            question2: '1',
            question3: '2',
            question4: '1',
            question5: '1',
            question6: '2',
            question7: '1',
            question8: '2',
        },
        // 3
        task0303: {
            question1: '2',
            question2: '2',
            question3: '2',
            question4: '1',
            question5: '1',
            question6: '2',
            question7: '1',
            question8: '2',
        },
        task0304: {
            question1: '2',
        },
        task0315: {
            question1: '2',
        },
        task0320: {
            question1: '1',
        },
        task0327: {
            question1: '3',
            question2: '3',
            question3: '1',
            question4: '3',
        },
        //4
        task0403: {
            question1: '2',
            question2: '2',
            question3: '2',
            question4: '2',
            question5: '1',
            question6: '1',
            question7: '2',
            question8: '1',
            question9: '1',
        },
        task0411: {
            question1: '2',
        },
        // 05
        task0511: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '1',
            question6: '2',
        },
        task0512: {
            question1: '3',
        },
        task0524: {
            question1: '1',
            question2: '2',
            question3: '1',
            question4: '1',
            question5: '1',
        },
        // 06
        task0603: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '2',
            question6: '1',
            question7: '2',
            question8: '1',
            question9: '2',
            question10: '2',
            question11: '2',
        },
        // 07
        task0707: {
            question1: '2',
        },
        task0726: {
            question1: '2',
            question2: '3',
            question3: '2',
            question4: '2',
        },
        // 8
        task0813: {
            question1: '3',
        },
        // 9
        task0904: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '2',
            question6: '1',
        },
        task0909: {
            question1: '2',
            question2: '1',
            question3: '3',
            question4: '2',
            question5: '1',
            question6: '2',
        },
        task0920: {
            question1: '2',
            question2: '1',
            question3: '3',
            question4: '2',
            question5: '3',
        },
        // 10
        task1015: {
            question1: '1',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '1',
        },
        // 11
        task1109: {
            question1: '2',
        },
        task1111: {
            question1: '3',
        },
        task1114: {
            question1: '2',
            question2: '2',
            question3: '1',
            question4: '1',
            question5: '2',
            question6: '2',
            question7: '2',
        },
        task1118: {
            question1: '2',
            question2: '1',
            question3: '1',
            question4: '3',
            question5: '2',
            question6: '3',
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
