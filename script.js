var button = document.querySelector(".btn");
var popup = document.querySelector(".modal");
var closeButton = document.querySelector(".modal-close");
var label = document.querySelector("[name=label]");
var form = popup.querySelector ("form");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-shows");
    label.focus();
});

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-shows");
})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log ("Отправляем форму");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-shows")) {
            evt.preventDefault ();
            popup.classList.remove("modal-shows");
        }

    }
});