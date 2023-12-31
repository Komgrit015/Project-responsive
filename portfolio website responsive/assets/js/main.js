// show menu 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// active and remove menu 

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active link 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// home 

sr.reveal('.home__title',{})
sr.reveal('.home__data',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval:200})

// about 
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:200})


// skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__img',{delay:400})

// work 
sr.reveal('.work__img',{interval:200})

// contact 
sr.reveal('.contact__input',{interval:200})
sr.reveal('.contact__data',{delay:200})







// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 