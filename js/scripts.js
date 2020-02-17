function akanName(){
    var name = document.getElementById("personName").value;
    var birthday = document.getElementById("personBirthday").value;
    console.log(birthday)
    var birthday = Array.from(birthday);
    var year =birthday.slice(0,4);
    var month =birthday.slice(5,7);
    var date =birthday.slice(8,10);
    var year = year.join('')
    var month = month.join('');
    var date = date.join('');
    var year = parseInt(year);
    var month = parseInt(month);
    var date = parseInt(date);
    var year = new Date (`${year}-${month}-${date}`);
    var d = year.getDay();
    console.log(d);
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (d ===d)
        if (document.getElementById('male').checked) {
            document.getElementById("output").innerHTML =( name + " your Akan name is " + maleName[d] + " and you were born on a " + weekday[d] + ".");
        }else if (document.getElementById('female').checked) {
            document.getElementById("output").innerHTML =( name + " your Akan name is " + femaleName[d] + " and you were born on a " + weekday[d] + ".");
        }else{
            alert("Choose a gender.")
        }
    else{
        alert("Input your birthday!")
    }
}