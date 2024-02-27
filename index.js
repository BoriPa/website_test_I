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

//Access the image
let slideImages = document.querySelectorAll('.slide_container img');
//Access the next and prev btn
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
//access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

//Code for next btn
next.addEventListener('click', slideNext);
function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
//Code for prev btn
prev.addEventListener('click', slidePrev);
function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
	indicator();
}

//Auto sliding
function autoSliding(){
	deletInterval = setInterval(timer, 3000);
	function timer(){
		slideNext();
	}
}
autoSliding();

//Add click event to the indicator
function switchImage(currentImage){
	currentImage.classList.add('active');
	var imageID = currentImage.getAttribute('attr');
	if(imageID > counter){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = imageID;
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	}
	else if(imageID == counter){
		return;
	}
	else{
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = imageID;
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	}
	indicator()

}