function check() {
    let personName = document.getElementById('personName');
    let userSurname = document.getElementById('userSurname');

    if(personName.value == ''){
        document.getElementById('errorMessage').innerHTML+="Введите Ваше имя<br>";
    }
}