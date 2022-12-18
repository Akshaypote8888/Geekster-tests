const country = document.getElementById('country')
const stateInput = document.getElementById('state')
const containerFull = document.getElementById('container')
const universityName = document.getElementById('university_name')
const siteUrl = document.getElementById('site')
const searchButton = document.getElementById('search_button')

init()

function init(){
    searchButton.addEventListener('click', fetchUniversity)
    fetchUniversity()
}


async function fetchUniversity(){
    const countryName = country.value;
    
    const streamResponse = await fetch(`http://universities.hipolabs.com/search?country=india`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    console.log(jsonData);
    renderUI(jsonData);
}
function renderUI(jsonData){
    const stateName = stateInput.value;
    console.log(stateName)
    for(let i=0;i<jsonData.length;i++){
        if(jsonData[i]['state-province']== 'stateName'){
            containerFull.innerHTML = `<div id="cards">
            <h4>State Name : - <span id="state_name">${jsonData[i]['state-province']}</span></h4>
            <br>
            <h4>University Name : - <span id="university_name">Pune University</span></h4>
            <br>
            <h4>University site URL : - <a id="site" href="www.google.com">www.google.com</a> </span></h4>
            <br>
        </div>`;
        }
        break;
    }
    console.log(containerFull)
}
