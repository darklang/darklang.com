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

    const json = await response.json();

    clearErrors()

    if (json === 200) {
        form.reset();
        alert('success! not sure what to do here');
    } else {
        console.log('json', json);
        showErrors(json);
    }
}

document.querySelector('#sign-up-form').addEventListener('submit', submitForm);