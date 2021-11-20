var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

const surname = document.form.surname;
const givenname = document.form.givenname;
const dob = document.form.dob;
const residence = document.form.residence;
const gender = document.form.gender
// const Title = document.form.
const country = document.form.country;
const nation = document.form.nationality;

const surnameError = document.getElementById("surname-error")
const givennameError = document.getElementById("givenname-error")
const dobError = document.getElementById("dob-error")
const residenceError = document.getElementById("residence-error")
const genderError = document.getElementById("gender-error")
const countryError = document.getElementById("country-error")
const nationError = document.getElementById("nationality-error")

const validate = ()=>{
    
    if(surname =="") {
        surnameError.innerHTML ="Invalid Field";
        surnameError.style="color:red";
        surname.style.border="1px solid red"
        surname.focus();
    
    }else if(!(surname.length < 17 )){
        surnameError.innerHTML ="Invalid Field";
        surnameError.style="color:red";
        surname.style.border="1px solid red"
        surname.focus();
    };
    
    if(givenname =="") {
        givennameError.innerHTML ="Invalid Field";
        givennameError.style="color:red";
        givenname.style.border="1px solid red"
        givenname.focus();
    }else if(!(surname.length < 17 )){
        givennameError.innerHTML ="Invalid Field";
        givennameError.style="color:red";
        givenname.style.border="1px solid red"
        givenname.focus();
    }
    
    if(dob  =="") {
        esidenceError.innerHTML ="Invalid Field";
        dobError.style="color:red";
        dob.style.border="1px solid red"
        dob.focus();
    };
    if(residence =="") {
        dobError.innerHTML ="Invalid Field";
        dobError.style="color:red";
        residence.style.border="1px solid red"
        residence.focus();
    }

}


const patientform = document.getElementById("regform")
patientform.addEventListener('submit',validate)