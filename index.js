const saveInputBtn = document.getElementById('input-btn');
const saveTabBtn = document.getElementById('saveTab-btn');
const deleteAllBtn = document.getElementById('deleteAll-btn');
let myLeads = [];
let leadsLocalStorage = JSON.parse(localStorage.getItem('lead'));
const inputEl = document.getElementById('input-el');
const gatheredLeads = document.getElementById('gatheredLeads');
const listLeads = document.createElement('ul');
listLeads.setAttribute('id', 'listLeads');

saveInputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('lead', JSON.stringify(myLeads));
    leadsLocalStorage = JSON.parse(localStorage.getItem('lead'));
    renderLeads(myLeads);
})

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem('lead', JSON.stringify(myLeads));
        leadsLocalStorage = JSON.parse(localStorage.getItem('lead'));
        renderLeads(myLeads);
    })
})

deleteAllBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})

function renderLeads(array) {
    listLeads.innerHTML = '';

    for (i=0; i < array.length; i++) {
        listLeads.innerHTML += `<li><a href="${array[i]}" target="_blank">${array[i]}</a></li>`;
    }
    
    gatheredLeads.appendChild(listLeads);
}

if (localStorage.getItem('lead') !== null) {
    myLeads = leadsLocalStorage;
    renderLeads(leadsLocalStorage);
} else {
    myLeads = [];
}
