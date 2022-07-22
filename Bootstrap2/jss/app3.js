let previousTab;
let previousList;
function changeTab(index){
    let tab=document.getElementsByClassName("tab-pane");
    let list=document.getElementsByClassName("navs-link");
    if(previousTab && previousList)
    {
        previousTab.style.display="none";
        previousList.classList.remove("active");
    }
    previousTab=tab[index];
    previousList=list[index];
    tab[index].style.display="block";
    list[index].classList.add("active");
    console.log( tab[index]);
}