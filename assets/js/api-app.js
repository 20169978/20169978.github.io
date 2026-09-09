/* Checkbox selection logic for API selection */
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

/* Submittion logic for API selection */
const api_form = document.querySelector('form');

async function OnApiFormSubmit() {
    switch (checked_api.value) {
        case 'sudoku':
            await CallSudokuAPI();
            break;
        case 'cocktail':
            await CallCocktailAPI();
            break;
    }
}

api_form.addEventListener('submit', (e) => {
    e.preventDefault();
    OnApiFormSubmit();
});
/* API call logic for selected API */
const api_query_input = document.querySelector('#api-input');
const api_result_div = document.querySelector('#api-result');

async function CallNinjaAPI(url) {
    const response = await fetch(url, { 
        method: 'GET',
        headers: {
            'X-Api-Key': 'Dafq1S3dAnhAyARQhqXbDiQESyvr8m4jpaxcycVr'
        }
    });
    return response.json();
}

async function CallSudokuAPI() {
    let query = api_query_input.value;// Need to format the input to match the API's expected format Or handle input errors
    
    const url = `https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${query}`;

    const data = await CallNinjaAPI(url);// handle errors
    
    const temp = document.querySelector('#sudoku-template');
    const clone = temp.content.cloneNode(true);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = clone.querySelector(`.row[data-row="${i}"]`).querySelector(`.cell[data-col="${j}"]`);
            const number = data['puzzle'][i][j];
            cell.innerText = number?? "?";
        }
    }
    api_result_div.innerHTML = "";
    api_result_div.append(clone);
}

async function CallCocktailAPI() {
    let query = api_query_input.value;// Need to format the input to match the API's expected format Or handle input errors
    
    const url = `https://api.api-ninjas.com/v1/cocktail?name=${query}`;

    const data = await CallNinjaAPI(url);

    const temp = document.querySelector('#cocktail-template');
    api_result_div.innerHTML = "";

    data.forEach((cocktail) => {
        const clone = temp.content.cloneNode(true);
        clone.querySelector(`.cocktail-name`).innerText = cocktail['name'];
        clone.querySelector(`.cocktail-instructions`).innerText = cocktail['instructions'];
        const container = clone.querySelector(`.cocktail-ingredients`);
        cocktail['ingredients'].forEach(ingredient => {
            const p = document.createElement("p");
            p.innerText = ingredient;
            container.append(p);
        });

        api_result_div.append(clone);
    });
}