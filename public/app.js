const login = {
    container: document.querySelector("#login"),
    link: document.querySelector("#SignUp"),
    notifyUser: document.querySelector("#userErr"),
    notifyPass: document.querySelector("#userPass"),
    username: document.querySelector("#userlogin"),
    password: document.querySelector("#passlogin")
}

const SignUp = {
    container: document.querySelector("#createAccount"),
    link: document.querySelector("#SignIn"),
    email: document.querySelector("#email"),
    password: document.querySelector("#passRegister"),
    confirmPassword: document.querySelector("#confirmRegister"),
    notifyEmail: document.querySelector("#emailSpan"),
    notifyPass: document.querySelector("#passSpan"),
    notifyConfirm: document.querySelector("#confirmSpan")
}

login.link.addEventListener("click", e => {
    e.preventDefault();
    // setTimeout(() => {
    //     login.container.classList.add("section--hidden");
    //     SignUp.container.classList.remove("section--hidden");
    // }, 1000);
    login.container.classList.add("section--hidden");
    SignUp.container.classList.remove("section--hidden");
});

SignUp.link.addEventListener("click", e => {
    e.preventDefault();
    // setTimeout(() => {
    //     login.container.classList.remove("section--hidden");
    //     SignUp.container.classList.add("section--hidden");
    // }, 1000);
    login.container.classList.remove("section--hidden");
    SignUp.container.classList.add("section--hidden");
});

login.username.addEventListener('input', e => {
    e.preventDefault();
    const userValue = login.username.value;
    if (userValue.length < 10) {
        login.notifyUser.innerText = "Invalid Username format!!";
        login.notifyUser.style.color = "rgb(242, 78, 78)";
    }
    else {
        login.notifyUser.innerText = "valid username!!!";
        login.notifyUser.style.color = "rgb(117, 223, 122)";
    }
    login.notifyUser.style.marginBottom = "-0.8em";
    login.notifyUser.style.marginTop = "0.2em";
});

login.password.addEventListener('input', e => {
    const passvalue = login.password.value;
    const values = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passvalue.match(values)) {
        login.notifyPass.innerText = "Strong Password!!";
        login.notifyPass.style.color = "rgb(117, 223, 122)";
    }
    else {
        login.notifyPass.innerText = "Weak Password!!";
        login.notifyPass.style.color = "rgb(242, 78, 78)";
    }
    login.notifyPass.style.marginBottom = "-0.8em";
    login.notifyPass.style.marginTop = "0.2em";
});

SignUp.email.addEventListener('input', e => {
    const emailValue = SignUp.email.value;
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.match(emailFormat)) {
        SignUp.notifyEmail.innerText = "Valid Email Format";
        SignUp.notifyEmail.style.color = "rgb(117, 223, 122)";
    }
    else {
        SignUp.notifyEmail.innerText = "Invalid Email Format";
        SignUp.notifyEmail.style.color = "rgb(242, 78, 78)";
    }
    SignUp.notifyEmail.style.marginBottom = "-0.8em";
    SignUp.notifyEmail.style.marginTop = "0.2em";
});

SignUp.password.addEventListener('input', e => {
    const passvalue = SignUp.password.value;
    const values = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passvalue.match(values)) {
        SignUp.notifyPass.innerText = "Valid Password";
        SignUp.notifyPass.style.color = "rgb(117, 223, 122)";
    }
    else {
        SignUp.notifyPass.innerText = "Please Enter Strong Password!!";
        SignUp.notifyPass.style.color = "rgb(242, 78, 78)";
    }
    SignUp.notifyPass.style.marginBottom = "-0.8em";
    SignUp.notifyPass.style.marginTop = "0.2em";
});

SignUp.confirmPassword.addEventListener('input', e => {
    const passvalue = SignUp.password.value;
    const confirmValue = SignUp.confirmPassword.value;
    if (confirmValue.match(passvalue)) {
        SignUp.notifyConfirm.innerText = "Password matched";
        SignUp.notifyConfirm.style.color = "rgb(117, 223, 122)";
    } else {
        SignUp.notifyConfirm.innerText = "Password does not match";
        SignUp.notifyConfirm.style.color = "rgb(242, 78, 78)";
    }
});
