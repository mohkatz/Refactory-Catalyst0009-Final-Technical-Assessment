const validate = (e) => {
    const surName = document.registration.surname;
    const givenName = document.registration.givenname;
    // const gender = document.registration.gender;
    const dob = document.registration.dob;
    const country = document.registration.country;
    const residence = document.registration.residence;
    const nat = document.registration.nationality;

    //* Error messages
    const surErr = document.getElementById('sur-error');
    const givErr = document.getElementById('giv-error');
    // const genErr = document.getElementById('gen-error');
    const dobErr = document.getElementById('dob-error');
    const cotErr = document.getElementById('cot-error');
    const resErr = document.getElementById('res-error');
    const natErr = document.getElementById('nat-error');


    //*Regular expressions are rules or requirements for the given fields
    const nameRegex = /([A-Za-z]){1,16}/;
    const residenceRegex = /([A-Za-z]){1,20}/;
    const moreRegex = /([A-Za-z]){5,50}/;

    //* Validation

    //* === Surname ===
    if (surName.value == "") {
        surName.focus()
        surName.style.border = "2px solid red";
        surErr.innerHTML = "Invalid Field!"
        surErr.style = "color:red; font-size:15px;"
        e.preventDefault();
        return false;
    } else {
        surErr.innerHTML = ""
        surName.style.border = "2px solid green"
    };

    if (!surName.value.match(nameRegex)) {
        surName.focus();
        surName.style.border = "2px solid red"
        return false;
    } else {
        surName.style.border = '2px solid green';
    };

    //* === Given name ===
    if (givenName.value == "") {
        givenName.focus()
        givenName.style.border = "2px solid red";
        givErr.innerHTML = "Invalid Field!"
        givErr.style = "color:red; font-size:15px;"
        e.preventDefault();
        return false;
    } else {
        givErr.innerHTML = ""
        givenName.style.border = "2px solid green"
    }

    if (!givenName.value.match(nameRegex)) {
        givenName.focus();
        givenName.style.border = "2px solid red"
        return false;
    } else {
        givenName.style.border = '2px solid green';
    }

    // //* === Gender ===
    // if (gender.value == "") {
    //     gender.focus()
    //     gender.style.border = "2px solid red";
    //     genErr.innerHTML = "Gender must be Specified!"
    //     genErr.style = "color:red; font-size:15px;"
    //     e.preventDefault();
    //     return false;
    // } else {
    //     genErr.innerHTML = ""
    //     gender.style.border = "2px solid green"
    // }

    //* === D.O.B ===
    var birthday = document.getElementById("dob").value; // Don't get Date yet...
    var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
    var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
    var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
    var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
    var cutOff19 = new Date(); // should be a Date
    cutOff19.setFullYear(todayYear - 19); // ...
    var cutOff95 = new Date();
    cutOff95.setFullYear(todayYear - 95);
    if (!regexVarTest) { // Test this before the other tests
        dobErr.innerHTML = "Enter date of birth as dd/mm/yyyy";
        dobErr.style = "color:red; font-size:15px;"
    } else if (isNaN(userBirthDate)) {
        dobErr.innerHTML = "Date of Birth is invalid";
        dobErr.style = "color:red; font-size:15px;"
    } else if (userBirthDate > cutOff19) {
        dobErr.innerHTML = "You have to be older than 19";
        dobErr.style = "color:red; font-size:15px;"
    } else if (userBirthDate < cutOff95) {
        dobErr.innerHTML = "You have to be younger than 95";
        dobErr.style = "color:red; font-size:15px;"
    } else {
        dobErr.innerHTML = "";
        dob.style.border = '2px solid green';
    }


    //* === Country ===
    if (country.value == "") {
        country.focus()
        country.style.border = "2px solid red";
        cotErr.innerHTML = "You Must Select Country Of Residence!"
        cotErr.style = "color:red; font-size:15px;"
        e.preventDefault();
        return false;
    } else {
        cotErr.innerHTML = ""
        country.style.border = "2px solid green"
    }

    //* === Residence ===
    if (residence.value == "") {
        residence.focus()
        residence.style.border = "2px solid red";
        resErr.innerHTML = "Invalid Field!"
        resErr.style = "color:red; font-size:15px;"
        e.preventDefault();
        return false;
    } else {
        resErr.innerHTML = ""
        residence.style.border = "2px solid green"
    }

    if (!residence.value.match(residenceRegex)) {
        residence.focus();
        residence.style.border = "2px solid red"
        return false;
    } else {
        residence.style.border = '2px solid green';
    }

    //* === Nationality ===
    if (nat.value == "") {
        nat.focus()
        nat.style.border = "2px solid red";
        natErr.innerHTML = "Invalid Field!"
        natErr.style = "color:red; font-size:15px;"
        e.preventDefault();
        return false;
    } else {
        natErr.innerHTML = ""
        nat.style.border = "2px solid green"
    }

    if (!nat.value.match(moreRegex)) {
        nat.focus();
        nat.style.border = "2px solid red"
        return false;
    } else {
        nat.style.border = '2px solid green';
    }
    return true;
}


const formElement = document.getElementById("regform");

formElement.addEventListener('submit', function(e) {
    validate(e);
})