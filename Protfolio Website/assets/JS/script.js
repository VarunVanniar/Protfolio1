/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav_menu"){
    menuBtn.className += "responsive";
  }
  else{
    menuBtn.className = "nav_menu";
  }
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    
window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px"
    }
}

/* ----- TYPING EFFECT ----- */
   

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */
  