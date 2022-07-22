function openModal()
{
let modalId=document.getElementById("openModal").dataset.target;
document.getElementById(modalId).style.display="block";
document.getElementById(modalId).style.backgroundColor="rgba(0, 0, 0, 0.700)";
}

function dismisModal(id){
    let modalId=document.getElementById(id).dataset.dismiss;
    document.getElementById(modalId).style.display="none";
    document.getElementById(modalId).style.backgroundColor="white";
}