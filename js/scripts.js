function akanName(){
    var name = document.getElementById("personName").value;
    var birthday = document.getElementById("personBirthday").value;
    console.log(birthday)
    var birthday = Array.from(birthday);
    console.log(birthday);
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
    console.log("New date is " + d);
    if (document.getElementById('male').checked) {
        if (d === 0) {
            document.getElementById("output").innerHTML = " your Akan name is Kwasi";
        }
        else if (d === 1) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwadwo";
        }
        else if (d === 2) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwabena";
        }
        else if (d === 3) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwaku";
        }
        else if (d === 4) {
            document.getElementById("output").innerHTML = name + " your Akan name is Yaw";
        }
        else if (d === 5) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kofi";
        }
        else {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwame";
        }
    }
    else if (document.getElementById('female').checked) {
        if (d === 0) {
            document.getElementById("output").innerHTML = name + " your Akan name is AKosua";
        }
        else if (d === 1) {
            document.getElementById("output").innerHTML = name + " your Akan name is Adwoa";
        }
        else if (d === 2) {
            document.getElementById("output").innerHTML = name + " your Akan name is Abenaa";
        }
        else if (d === 3) {
            document.getElementById("output").innerHTML = name + " your Akan name is Akua";
        }
        else if (d === 4) {
            document.getElementById("output").innerHTML = name + " your Akan name is Yaa";
        }
        else if (d === 5) {
            document.getElementById("output").innerHTML = name + " your Akan name is Afua";
        }
        else {
            document.getElementById("output").innerHTML = name + " your Akan name is Ama";
        }
    }else{
        alert("Choose a gender.")
    }
}