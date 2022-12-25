const country = document.getElementById('country')
const stateInput = document.getElementById('state')
const stateNameblock = document.getElementById('state_name')
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
    for(let i=0;i<jsonData.length;i++){
        if(jsonData[i]['state-province']== 'stateName'){
            stateNameblock.innerHTML = stateName;
        }
        break;
    }
}
