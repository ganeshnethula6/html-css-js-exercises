
function validate() {
  var form = document.getElementById("form");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var dob = document.getElementById("dob");
  var streetAd = document.getElementById("streetAd");
  var cityAd = document.getElementById("cityAd");
  var stateAd = document.getElementById("stateAd");
  var zipcode = document.getElementById("zipcode");
  var email = document.getElementById("email");
  var mobileNumber = document.getElementById("mobileNumber");
  var prmSkill = document.getElementById("prmSkill");
  var secSkill = document.getElementById("secSkill");
  var hearAboutUs = document.getElementById("hearAboutUs");
  var gender = document.querySelector('input[name = gender]:checked').value;
  var clgName = document.getElementById("clgName");
  var course = document.getElementById("course");
  var yop = document.getElementById("yop");
  var cgpa = document.getElementById("cgpa");

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const dobValue = dob.value.trim();
  const streetAdValue = streetAd.value.trim();
  const cityAdValue = cityAd.value.trim();
  const stateAdValue = stateAd.value.trim();
  const zipcodeValue = zipcode.value.trim();
  const emailValue = email.value.trim();
  const mobileNumberValue = mobileNumber.value.trim();
  const prmSkillValue = prmSkill.value.trim();
  const secSkillValue = secSkill.value.trim();
  const hearAboutUsValue = hearAboutUs.value.trim();
  const genderValue = gender.trim();
  const clgNameValue = clgName.value.trim();
  const courseValue = course.value.trim();
  const yopValue = yop.value.trim();
  const cgpaValue = cgpa.value.trim();

  validateFirstName(firstNameValue);
  validateLastName(lastNameValue);
  validateDob(dobValue);
  validateGender(genderValue);
  validateStreet(streetAdValue);
  validateCity(cityAdValue);
  validateState(stateAdValue);
  validateZipcode(zipcodeValue)
  validateEmail(emailValue);
  validatemobileNumber(mobileNumberValue);
  validatePrimeSkills(prmSkillValue);
  validateSecSkills(secSkillValue);
  validateClgName(clgNameValue);
  validateCourse(courseValue);
  validateYop(yopValue);
  validateCgpa(cgpaValue);

}

function validateFirstName(firstNameValue) {
  const firstNamePattern = /[^A-z]/g.test(firstNameValue);
  if (firstNameValue == "") {
    document.getElementById("fname-error-text").innerHTML = "First name shouldn't be blank";
  }
  else if (firstNamePattern) {
    document.getElementById("fname-error-text").innerHTML = "please enter the only text";
  }
  else {
    document.getElementById("fname-error-text").innerHTML = "";
  }
}

function validateLastName(lastNameValue) {
  const lastNamePattern = /[^A-z]/g.test(lastNameValue);
  if (lastNameValue == "") {
    document.getElementById("lname-error-text").innerHTML = "First name shouldn't be blank";
  }
  else if (lastNamePattern) {
    document.getElementById("lname-error-text").innerHTML = "please enter the only textn";
  }
  else {
    document.getElementById("lname-error-text").innerHTML = "";
  }
}

function validateDob(dobValue) {
  if (dobValue == "") {
    document.getElementById("dob-error-text").innerHTML = "date of birth shouldn't be blank";
  }
  else {
    document.getElementById("dob-error-text").innerHTML = "";
  }
}
function validateGender(genderValue) {
  if (genderValue == "") {
    document.getElementById("gender-error-text").innerHTML = "gender shouldn't be blank";
  }
  else {
    document.getElementById("gender-error-text").innerHTML = "";
  }
}

function validateStreet(streetAdValue) {
  if (streetAdValue == "") {
    document.getElementById("street-error-text").innerHTML = "street shouldn't be blank";
  }
  else {
    document.getElementById("street-error-text").innerHTML = "";
  }
}

function validateCity(cityAdValue) {
  if (cityAdValue == "") {
    document.getElementById("city-error-text").innerHTML = "city shouldn't be blank";
  }
  else {
    document.getElementById("city-error-text").innerHTML = "";
  }
}
function validateState(stateAdValue) {
  if (stateAdValue == "") {
    document.getElementById("state-error-text").innerHTML = "State shouldn't be blank";
  }
  else {
    document.getElementById("state-error-text").innerHTML = "";
  }
}

function validateZipcode(zipcodeValue) {
  const zipcodePattern = /\d{5}/g.test(zipcodeValue);
  if (zipcodeValue == "") {
    document.getElementById("zipcode-error-text").innerHTML = "zicode shouldn't be blank";
  }
  else if (!zipcodePattern) {
    document.getElementById("zipcode-error-text").innerHTML = "zipcode should be numbers and length 5";
  }
  else {
    document.getElementById("zipcode-error-text").innerHTML = "";
  }
}

function validateEmail(emailValue) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
  if (emailValue == "") {
    document.getElementById("email-error-text").innerHTML = "email shouldn't be blank";
  }
  else if (!emailPattern) {
    document.getElementById("email-error-text").innerHTML = "please enter correct email pattern";
  }
  else {
    document.getElementById("email-error-text").innerHTML = "";
  }
}

function validatemobileNumber(mobileNumberValue) {
  const mobileNumberPattern = /^[0]?[789]\d{9}/g.test(mobileNumberValue);
  if (mobileNumberValue == "") {
    document.getElementById("mobile-error-text").innerHTML = "Mobile Number shouldn't be blank";
  }
  else if (!mobileNumberPattern) {
    document.getElementById("mobile-error-text").innerHTML = "phone number should be number and start with 9/8/7 and length is 10";
  }
  else {
    document.getElementById("mobile-error-text").innerHTML = "";
  }
}

function validatePrimeSkills(prmSkillValue) {
  if (prmSkillValue == "") {
    document.getElementById("primSkill-error-text").innerHTML = "please selectc the Primary Skill";
  }
  else {
    document.getElementById("primSkill-error-text").innerHTML = "";
  }
}

function validateSecSkills(secSkillValue) {
  if (secSkillValue == "") {
    document.getElementById("secSkill-error-text").innerHTML = "please selectc the Secondary Skill";
  }
  else {
    document.getElementById("secSkill-error-text").innerHTML = "";
  }
}



function validateClgName(clgNameValue) {
  if (clgNameValue == "") {
    document.getElementById("clgName-error-text").innerHTML = "Please enter the College Name";
  } else {
    document.getElementById("clgName-error-text").innerHTML = "";
  }
}


function validateCourse(courseValue) {
  if (courseValue == "") {
    document.getElementById("course-error-text").innerHTML = "Please enter the Course";
  } else {
    document.getElementById("course-error-text").innerHTML = "";
  }
}
function validateYop(yopValue) {
  let yopPattern = /[0-9]{4}/g.test(yopValue);
  if (yopValue == "") {
    document.getElementById("yop-error-text").innerHTML = "Please enter the Year of Passing";
  } else if (!yopPattern) {
    document.getElementById("yop-error-text").innerHTML = "Year of Passing should be number and length 4";
  } else {
    document.getElementById("yop-error-text").innerHTML = "";
  }
}

function validateCgpa(cgpaValue) {
  let cgpaPattern = /[0-9.]/g.test(cgpaValue);
  if (cgpaValue == "") {
    document.getElementById("cgpa-error-text").innerHTML = "Please enter the CGPA";
  }
  else if (!cgpaPattern) {
    document.getElementById("cgpa-error-text").innerHTML = "Please enter the correct pattern";
  }
  else {
    document.getElementById("cgpa-error-text").innerHTML = "";
  }
}