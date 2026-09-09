const api_checkboxes = document.querySelectorAll('.api-checkbox');
let checked_api = document.querySelector('.api-checkbox#sudoku'); 

function OnApiCheckboxClick(sender) {
    if (checked_api === sender) {
        sender.checked = true;
        return;
    }

    checked_api = sender;
    api_checkboxes.forEach((checkbox) => {
        if (checkbox !== sender) {
            checkbox.checked = false;
        }
    });
}

api_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => OnApiCheckboxClick(checkbox));
});
