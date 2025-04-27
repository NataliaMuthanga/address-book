let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let addressFm = document.getElementById("address-fm");
let tableBody = document.querySelector("#myTable tbody");

document.addEventListener("DOMContentLoaded",loadContacts);

addressFm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullname").value.trim();
    const phoneNumber = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const profession = document.getElementById("profession").value.trim();

    const contact = {
        fullName,
        phoneNumber,
        email,
        profession
    };

    addContactToTable(contact);

    saveContact(contact);

    addressFm.reset();
});

function addContactToTable(contact) {
    const row = document.createElement("tr");

    row.innerHTML=`
    <td>${contact.fullName}</td>
    <td>${contact.phoneNumber}</td>
    <td>${contact.email}</td>
    <td>${contact.profession}</td>
    `;

    tableBody.appendChild(row);
}

function saveContact(contact) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.forEach(contact => {
        addContactToTable(contact)
    });
}

displayContacts(contacts);

document.getElementById('place-fm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const place = document.getElementById('place').value;
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    
    
    const listItem = document.createElement('li');
    listItem.textContent = `Place: ${place}, Country: ${country}, Date: ${date}`;
    
    
    document.getElementById('places-list').appendChild(listItem);
    
    
    document.getElementById('place').value = '';
    document.getElementById('country').value = '';
    document.getElementById('date').value = '';
});
