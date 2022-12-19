function check() {
    let personName = document.getElementById('personName');
    let userSurname = document.getElementById('userSurname');

    let userMail = document.getElementById('userMail');

    let password = document.getElementById('psw');
    let pswRepeat = document.getElementById('pswRepeat');


    document.getElementById('errorMessageName').innerHTML='';
    document.getElementById('errorMessageSurname').innerHTML='';
    document.getElementById('errorMessageEmail').innerHTML='';
    document.getElementById('errorMessagePsw').innerHTML='';
    document.getElementById('errorMessagePsw-repeat').innerHTML='';

    if(personName.value == ''){
        document.getElementById('errorMessageName').innerHTML+="Введите Ваше имя<br>";
    }

    if(userSurname.value == ''){
        document.getElementById('errorMessageSurname').innerHTML+="Введите Вашу фамилию<br>";
    }

    if(userMail.value == ''){
        document.getElementById('errorMessageEmail').innerHTML+="Введите Ваш емейл<br>";
    }

    if(password.value == '' ){
        document.getElementById('errorMessagePsw').innerHTML+="Поле не заполнено<br>";
    }

    else if(password.value.length <=6){
        document.getElementById('errorMessagePsw').innerHTML+="Минимальное количество знаков 6<br>";
    }

    if(pswRepeat.value == '' ){
        document.getElementById('errorMessagePsw-repeat').innerHTML+="Поле не заполнено<br>";
    }

    else if(pswRepeat.value.length <=6){
        document.getElementById('errorMessagePsw-repeat').innerHTML+="Минимальное количество знаков 6<br>";
    }
}