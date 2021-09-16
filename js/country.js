const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())  //converting into json
    .then(data => getData(data));
}

const getData = countries =>{
    const list = document.getElementById('list');
    countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add("country"); //class add
    div.innerHTML = `<h3>${country.name}</h3>
    <h4>${country.capital}</h4>
    `;
    list.appendChild(div);
    }); 
    
}
loadData(); //calling the function