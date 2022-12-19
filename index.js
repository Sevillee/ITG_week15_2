function check() {
    let personName = document.getElementById('personName');
    let userSurname = document.getElementById('userSurname');

    let userMail = document.getElementById('userEmail');

    let password = document.getElementById('psw');
    let passwordRep = document.getElementById('psw-repeat');


    document.getElementById('errorMessageName').innerHTML='';
    document.getElementById('errorMessageSurname').innerHTML='';
    document.getElementById('errorMessageEmail').innerHTML='';
    document.getElementById('errorMessagePsw').innerHTML='';

    if(personName.value == ''){
        document.getElementById('errorMessageName').innerHTML+="Введите Ваше имя<br>";
    }

    if(userSurname.value == ''){
        document.getElementById('errorMessageSurname').innerHTML+="Введите Вашу фамилию<br>";
    }

    if(userMail.value == ''){
        document.getElementById('errorMessageEmail').innerHTML+="Введите Ваш емейл<br>";
    }

    if(password.value == ''){
        document.getElementById('errorMessagePsw').innerHTML+="Поле не заполнено<br>";
    }
    
}