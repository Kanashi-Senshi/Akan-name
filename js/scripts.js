function akanName(){
    var name = document.getElementById("personName").value;
    var birthday = document.getElementById("personBirthday").value;
    console.log(birthday)
    var birthday = Array.from(birthday);
    console.log(birthday);
    var year =birthday.slice(0,4);
    var month =birthday.slice(5,7);
    var date =birthday.slice(8,10);
    console.log("Date sliced "+ date)
    var MM = month.join('');
    var DD = date.join('');
    console.log("Date joined "+ DD)
    var MM = parseInt(MM);
    var MM = MM -2;
    console.log("MM is "+ MM)
    var DD = parseInt(DD);
    console.log("DD iS "+ DD)
    var CC = year.slice(0, 2);
    var YY = year.slice(2, 4);
    var CC = CC.join('');
    var YY = YY.join('');
    var CC = parseInt(CC);
    console.log("CC is "+ CC);
    var YY = parseInt(YY);
    console.log("YY is "+ YY)
    var d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    d = Math.floor(d);
    d= Math.abs(d);
    console.log(d);
    if (document.getElementById('male').checked) {
        if (d === 1) {
            document.getElementById("output").innerHTML = " your Akan name is Kwasi";
        }
        else if (d === 2) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwadwo";
        }
        else if (d === 3) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwabena";
        }
        else if (d === 4) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwaku";
        }
        else if (d === 5) {
            document.getElementById("output").innerHTML = name + " your Akan name is Yaw";
        }
        else if (d === 6) {
            document.getElementById("output").innerHTML = name + " your Akan name is Kofi";
        }
        else {
            document.getElementById("output").innerHTML = name + " your Akan name is Kwame";
        }
    }
    else if (document.getElementById('female').checked) {
        if (d === 2) {
            document.getElementById("output").innerHTML = name + " your Akan name is AKosua";
        }
        else if (d === 3) {
            document.getElementById("output").innerHTML = name + " your Akan name is Adwoa";
        }
        else if (d === 4) {
            document.getElementById("output").innerHTML = name + " your Akan name is Abenaa";
        }
        else if (d === 5) {
            document.getElementById("output").innerHTML = name + " your Akan name is Akua";
        }
        else if (d === 6) {
            document.getElementById("output").innerHTML = name + " your Akan name is Yaa";
        }
        else if (d === 0) {
            document.getElementById("output").innerHTML = name + " your Akan name is Afua";
        }
        else {
            document.getElementById("output").innerHTML = name + " your Akan name is Ama";
        }
    }else{
        alert("Choose a gender.")
    }
}