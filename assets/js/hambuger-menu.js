const navigation = document.querySelector("#navigation");
navigation.classList.remove('opened');

function toggle_navigation() {
    console.log("toggle nav");
    navigation.classList.toggle('opened');
}

const buttons = document.querySelectorAll('.toggle-navigation');

buttons.forEach(element => {
    element.addEventListener("click", () => {
        toggle_navigation()
    });
});