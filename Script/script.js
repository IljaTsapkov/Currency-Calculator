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

function myFunction() {
    var x = document.getElementById("curTo").value;
    if (document.getElementById("amount")) {
        var c = document.getElementById("amount").value;
        var xc = x * c;
        document.getElementById("curResult").textContent = +xc;
    }
}