document.addEventListener('DOMContentLoaded', ()=>{
    let url = "currencyRates.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        buildCubesList(xml, 'curFrom');
        buildCubesList(xml, 'curTo');
    });
})

function buildCubesList(x, currency){
    let list = document.getElementById(currency);
    let cubes = x.getElementsByTagName('Cube');
    for(let i=0; i<cubes.length; i++){
        let option = document.createElement('option');
        let cubeName = cubes[i].getAttribute('currency');
        option.textContent = `${cubeName}`;
        list.appendChild(option);
    }
}