/*-----Vanilla JavaScript-----*/
/*- NOTE: Set a listener for  the form's submission; and then call for the form's validation-*/
document.querySelector("#signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    /*- NOTE: Set variables for input fields & error text-*/
    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const errorFNAME = document.querySelector("p.errorFNAME");
    const errorLNAME = document.querySelector("p.errorLNAME");
    const errorEMAIL = document.querySelector("p.errorEMAIL");
    const errorPASSWORD = document.querySelector("p.errorPASSWORD");

    /*- NOTE: Create validation functions for each of the fields-*/
    const FNAME = (data) => {
        if (data == "") {
            errorFNAME.innerText = "First Name cannot be empty";
            fname.classList.add("errorIcon", "borderRed");
            return false;
        } else {
            errorFNAME.innerText = "";
            return true;
        }
    };
    const LNAME = (data) => {
        if (data == "") {
            errorLNAME.innerText = "Last Name cannot be empty";
            lname.classList.add("errorIcon", "borderRed");
            return false;
        } else {
            errorLNAME.innerText = "";
            return true;
        }
    };
    const EMAIL = (data) => {
        if (data === "") {
            errorEMAIL.innerText = "Email cannot be empty";
            email.classList.add("errorIcon", "borderRed");
            return false;
        } else if (!isEmail(data)) {
            errorEMAIL.innerText = "Looks like this is not an email";
            email.classList.add("errorIcon", "borderRed");
            return false;
        } else {
            errorEMAIL.innerText = "";
            return true;
        }
    };
    const PASSWORD = (data) => {
        if (data == "") {
            errorPASSWORD.innerText = "Password cannot be empty";
            password.classList.add("errorIcon", "borderRed");
            return false;
        } else {
            errorPASSWORD.innerText = "";
            return true;
        }
    };
    /*- NOTE: Create the test for the email address - to be hoisted as necessary-*/
    function isEmail(data) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
    };
    /*- NOTE: Call the function on each of the fields-*/
    FNAME(fname.value);
    LNAME(lname.value);
    EMAIL(email.value);
    PASSWORD(password.value);

    /*-NOTE: Test to see if form is completely validated and move on to the welcome screen-*/

    if (FNAME(fname.value) && LNAME(lname.value) && EMAIL(email.value) && PASSWORD(password.value)) {
        window.open("./confirmation.html", "_self");
    };

};