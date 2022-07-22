let previousTab;
let previousLink;
function openTab(index){
    let tab=document.getElementsByClassName("tab-pane");
    let link=document.getElementsByClassName("nav-link");
    if(previousTab && previousLink)
    {
        previousLink.style.backgroundColor="#fff";
        previousLink.style.color="#0d6efd";
        previousTab.style.display="none";
    }
    if( tab[0].style.display=="block" ){
        tab[0].style.display="none";
        link[0].classList.remove("active");
    }
    previousLink=link[index];
    previousTab=tab[index];
    link[index].style.backgroundColor="#0d6efd";
    link[index].style.color="white";
    link[index].classList.remove("active");
    tab[index].style.display="block";
}