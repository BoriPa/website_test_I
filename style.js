const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

const goToBtn=document.getElementById("go-top");
console.log(goToBtn);

window.onscroll= ()=>{
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop> 1000 || document.documentElement.scrollTop > 1000){
        goToBtn.style.display="block"
    }
    else{
        goToBtn.style.display="none"
    }
}
goToBtn.onclick = () => {
    goToBtn.style.display= "none";
    window.scroll({
        top:0,
        behavior: "smooth"
    })
};