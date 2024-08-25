const saveInputBtn = document.getElementById('input-btn');
const saveTabBtn = document.getElementById('saveTab-btn');
const deleteAllBtn = document.getElementById('deleteAll-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const gatheredLeads = document.getElementById('gatheredLeads');
const listLeads = document.createElement('ul');
listLeads.setAttribute('id', 'listLeads');

saveInputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('lead', JSON.stringify(myLeads));
    myLeads = JSON.parse(localStorage.getItem('lead'));
    
   
    renderLeads();
    console.log(myLeads);

})

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem('lead', JSON.stringify(myLeads));
        renderLeads();

    })
})

deleteAllBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    renderLeads();
})

function renderLeads() {
    if (localStorage.getItem('lead') === null) {
        myLeads = [];

    } else {
        myLeads = JSON.parse(localStorage.getItem('lead'));

    }

    listLeads.innerHTML = '';

    for (i=0; i < myLeads.length; i++) {
        listLeads.innerHTML += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    
    
    }
    
    gatheredLeads.appendChild(listLeads);

}

if (localStorage.getItem('lead') === null) {

} else {
    renderLeads();
}






