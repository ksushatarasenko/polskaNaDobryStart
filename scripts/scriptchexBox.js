// script checkBox

function checkCheckbox(taskId) {
    const correctAnswers = {
        task506E3: {
            question1: ['3'], 
            question2: ['3'],     
            question3: ['3'],    
            question4: ['3'],    
            question5: ['3'], 
            question6: ['2'],    
            question7: ['3'],   
            question8: ['3']  
        }
    };

    let allCorrect = true;

    if (correctAnswers[taskId]) {
        const answers = correctAnswers[taskId];

        for (const [question, correctValues] of Object.entries(answers)) {
            const selectedAnswers = document.querySelectorAll(`#${taskId} input[name="${question}"]:checked`);
            const selectedValues = Array.from(selectedAnswers).map(input => input.value);
            const taskElement = document.querySelector(`#${taskId} .task:has(input[name="${question}"])`);

            // Проверка на совпадение выбранных значений с правильными
            if (selectedValues.length === correctValues.length && selectedValues.every(val => correctValues.includes(val))) {
                taskElement.classList.add('correct');
                taskElement.classList.remove('incorrect');
            } else {
                taskElement.classList.add('incorrect');
                taskElement.classList.remove('correct');
                allCorrect = false;
            }
        }
    } else {
        console.error(`No correct answers provided for task id: ${taskId}`);
        return;
    }

   
}

document.getElementById('checkCheckbox').addEventListener('click', function() {
    checkCheckbox('task506E3');
});
