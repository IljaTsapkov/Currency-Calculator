document.addEventListener('DOMContentLoaded', ()=>{
    let url = "currency-rates.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        buildCubesList(xml, 'curTo');
    });
})

function buildCubesList(x, currency){
    let list = document.getElementById(currency);
    let cubes = x.getElementsByTagName('Cube');
    for(let i=2; i<cubes.length; i++){
        let option = document.createElement('option');
        let cubeName = cubes[i].getAttribute('currency');
        let cubeRate = cubes[i].getAttribute('rate');
        option.textContent = `${cubeName}`;
        option.setAttribute('value',`${cubeRate}`)
        list.appendChild(option);
    }
}

$( function() {
    $( "#datepicker" ).datepicker();
  } 
);

function myFunction() {
    var x = document.getElementById("curTo").value;
    console.log(x)
    if (document.getElementById("amount")) {
        var c = document.getElementById("amount").value;
        var xc = x * c;
        document.getElementById("curResult").textContent = +xc;
    }
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}