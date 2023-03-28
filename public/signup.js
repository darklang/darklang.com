function clearErrors() {
    document.querySelector('#error-list').innerHTML = '';
    document.querySelector('#errors').style.display = "none";
}

function showErrors(errors) {
    clearErrors();

    document.querySelector('#errors').style.display = "block";

    const errorList = document.querySelector('#error-list')

    for (var i = 0; i < errors.length; i++) {
        let newLI = document.createElement("li");
        newLI.appendChild(document.createTextNode(errors[i]))

        errorList.appendChild(newLI);
    }
}

function showSuccess() {
    const form = document.querySelector("#sign-up-form");

    // remove all but first thing (which is the title)
    const firstElementChild = form.firstElementChild;
    form.innerHTML = '';
    form.append(firstElementChild);
    form.classList.add("flex", "flex-col", "items-center", "text-center", "justify-center");

    let successDiv = document.createElement("div");

    // create the success icon element
    let successIcon = document.createElement("i");
    successIcon.classList.add("fas", "fa-check-circle", "text-pink", "mt-11", "text-6xl");

    successDiv.appendChild(successIcon);

    // create a div element to wrap the success text and login link
    let successContent = document.createElement("div");

    // add the success text and login link to the successContent div
    let successText = document.createElement("p");
    successText.classList.add("text-pink", "font-medium", "text-2xl", "mt-9");
    successText.appendChild(document.createTextNode("Success! "));

    let successText2 = document.createElement("p");
    successText2.classList.add("text-white", "font-medium", "text-xl", "mt-2");
    successText2.appendChild(document.createTextNode("Congratulations! Your sign up was successful"));

    let logInLink = document.createElement("a");
    logInLink.classList.add("px-16", "py-2", "text-lg", "rounded", "bg-pink", "text-white", "hover:bg-background", "hover:border", "hover:border-pink", "transition", "duration-200", "ease-in-out", "mt-12");
    logInLink.href = "https://login.darklang.com";
    logInLink.appendChild(document.createTextNode("Log in"));

    successContent.appendChild(successText);
    successContent.appendChild(successText2);
    successContent.appendChild(logInLink);

    // apply Flexbox properties to the successContent div
    successContent.classList.add("flex", "flex-col", "items-center", "text-center", "justify-center");

    successDiv.appendChild(successContent);
    successDiv.classList.add("flex", "flex-col", "items-center", "text-center", "justify-center", "px-12");

    form.appendChild(successDiv);
}

async function submitForm(event) {
    event.preventDefault();

    const codeOfConductInput = document.querySelector('#code-of-conduct');

    if (!codeOfConductInput.checked) {
        showErrors(["Please agree to our code of conduct"]);
        return;
    }

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const usernameInput = document.querySelector('#username');

    const form = document.querySelector('form');

    const data = {
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        username: usernameInput.value
    };

    const response = await fetch("https://ops-adduser.builtwithdark.com/v3/create-account", {
        method: "POST",
        dataType: "json",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.status === 200) {
        form.reset()
        showSuccess()
    } else {
        const errorText = await response.text();
        showErrors([errorText]);
    }
}

document.querySelector('#sign-up-form').addEventListener('submit', submitForm);