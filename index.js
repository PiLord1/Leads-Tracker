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
    myLeads.push(window.location.href);
    // window.location.href = '';
    localStorage.setItem('lead', JSON.stringify(myLeads));
    myLeads = JSON.parse(localStorage.getItem('lead'));
    renderLeads();
    console.log(myLeads);
})

deleteAllBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    renderLeads();
})

// function deleteLead() {
//     myLeads.remove(element);
//     renderLeads();
// }

function renderLeads() {
    if (localStorage.getItem('lead') === null) {
        myLeads = [];

    } else {
        myLeads = JSON.parse(localStorage.getItem('lead'));

    }

    listLeads.innerHTML = '';

    for (i=0; i < myLeads.length; i++) {
        // listLeads.innerHTML += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>
        // <button onclick='deleteLead()' id='delete-btn'>DELETE</button>`;
        listLeads.innerHTML += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    
    
    }
    
    
    gatheredLeads.appendChild(listLeads);

}

function uniqueId() {
    return Math.random().toString(16).slice(2);
}

if (localStorage.getItem('lead') === null) {

} else {
    renderLeads();
}


// pano malalaman yung particular element na pinindot (use ID, gamit JSON)



