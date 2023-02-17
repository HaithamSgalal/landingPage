

// Globel variables 

let sections = document.querySelectorAll(`section`); 
let navbar  = document.getElementById(`navbar__list`); 
let pageheader = document.querySelector(`.page__header`);
let scrollTotop = document.querySelector(`.btn`);

// creating the navigation bar links 

function createMenueItems (){
sections.forEach((section)=>{
//creating Li and the links 
  let list = document.createElement(`li`); 
  list.innerHTML = `<a class="menu__link" data-nav="${section.dataset.nav}" href="#${section.h2}">${section.id}</a>` ;
  navbar.appendChild(list)

});
}
createMenueItems ()

// adding active class to the menue list 

let menueLinks = document.querySelectorAll(`.menu__link`);

function activateMenuelink(){
  // adding the active class to the menue link when clicking it
navbar.addEventListener(`click`,(e)=>{
  e.preventDefault(); 
if(e.target.classList.contains(`menu__link`)){
  //removing the active class from the rest of the links
  for (link of menueLinks){
  link.classList.remove(`active`); 
  };
  // adding the acrive class to the clicked one
  e.target.classList.add(`active`);
  // scrolling to the correct section with a smooth behavior 
  document.querySelector(`section[data-nav="${e.target.dataset.nav}"]`).scrollIntoView({behavior:"smooth"});
  
}
}) ; 
}
activateMenuelink()

function scrollingbehevior(){
 
// adding "your-active-class" on scroll 
window.addEventListener("scroll",(pos)=>{
  
  // the beloe line of code is related to the nav bar display function below 
  pageheader.style.display = "";
// adding the active class to the section when in view 
  sections.forEach((sec)=>{
  if (sec.getBoundingClientRect().top < 95 &&  sec.getBoundingClientRect().bottom > 100){
    console.log()
    sec.classList.add("your-active-class")
    // adding the active calss to the menue link automaticly  when the user is viewing the section 
    document.querySelector(`a[data-nav="${sec.dataset.nav}"]`).classList.add(`active`);
  } else {
    // remove the active class when the user scoll up or down
    sec.classList.remove("your-active-class")
    document.querySelector(`a[data-nav="${sec.dataset.nav}"]`).classList.remove(`active`);
  }
  // the below code is for the "back to top " button
  if(document.body.scrollTop > 600) {
    scrollTotop.style.display="block";
  } else if (document.body.scrollTop < 600){
    scrollTotop.style.display="none";
  }
})
})
}
scrollingbehevior()

// the below code is for hiding the nav bar when the user is not scrolling for 10 seconds
// nav bar will apear again when the user scroll " code line 52 "
function navbarDisplay (){
  setInterval(() => {
    pageheader.style.display = "none";
  },10000);
}

navbarDisplay ()

// clicking on the " top " button will take the user back to the top of the page
scrollTotop.addEventListener("click",()=>{
window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
})



 