//Selectors

const input = document.querySelector('input');
const matchList = document.querySelector('#match-list');

//Event Listeners
input.addEventListener('input', searchStates);

//Functions

function searchStates() {
    const value = input.value;
    fetch('data/cities.json')
        .then((res) => res.json())
        .then((data) => {
            let matches = data.filter(state => {
                const regex = new RegExp(`^${value}`, 'gi');
                return state.name.match(regex) || state.state.match(regex)
            })
            if (value.length === 0) {
                matches = [];
            }
            outputHTML(matches);
        })

}


function outputHTML(matches) {
    console.log(matches);
    let showHTML = matches.map((match) =>
        `<div class="card card-body mb-1">
        <h4 class="text-dark">${match.name}</h4>
        <h5 class="text-primary">${match.state}</h5>
        </div>`
    ).join('')
    matchList.innerHTML = showHTML;
}