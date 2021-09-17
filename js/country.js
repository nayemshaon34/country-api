const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())  //converting into json
    .then(data => getData(data));
}
loadData(); //calling the function
const getData = countries =>{
    const list = document.getElementById('list');
    countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add("country"); //class add
    div.innerHTML = `<h3>${country.name}</h3>
    <h4>${country.capital}</h4>
    <button onclick="loadCountryByName('${country.name}')">Details</button>
    `;
    list.appendChild(div);
    }); 
}

const loadCountryByName = name => {
    console.log(name);
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)//dynamic er jnno ${} eta use korbo
    .then(res => res.json())
    .then(data =>  loadCountryDetails(data[0])); //as it is object in array
    
}
    
const loadCountryDetails = data => {
    // console.log(data.population);
    const div = document.getElementById('country-detail');
    div.innerHTML = ` <h4>${data.name}</h4>
    <p>Population: ${data.population}</p>
    <img width="300px" src="${data.flag}" alt="">`;    
}