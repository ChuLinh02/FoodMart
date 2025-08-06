function disableBtn(button) {
    button.disabled = true;
    button.classList.add("btn-disabled");
}

function enableBtn(button) {
    button.disabled = false;
    button.classList.remove("btn-disabled");
}

export {disableBtn, enableBtn};