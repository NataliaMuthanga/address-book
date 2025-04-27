let people = JSON.parse(localStorage.getItem("people")) || [];
let addressFm = document.getElementById("address-fm");
let yourContacts = document.getElementById("yourContacts");

addressFm.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullname").value.trim();
    const phoneNumber = document.getElementById("munber").value.trim();
    const email = document.getElementById("email").value.trim();
    const profession = document.getElementById("profession").value.trim();
})