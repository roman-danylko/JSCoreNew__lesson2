let email = prompt();

if(email.includes('@') == false){
    console.log('Ви ввели невірний email. Відсутній символ "@". Приклад правильно введених даних: student@ukr.net')
} else if (email.indexOf('@') >= email.length - 2){
    console.log('Ви ввели невірно email. Символ "@" знаходиться в кінці стрічки, що є неприпустимо. Приклад правильно введених даних: student@ukr.net')
} else if (email.indexOf('@') == 0){
    console.log('Ви ввели невірно email. Символ "@" знаходиться в на початку стрічки, що є неприпустимо. Приклад правильно введених даних: student@ukr.net')
}