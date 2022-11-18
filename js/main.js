
// Mostrar Menu

const mostrarMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) 
    {
        toggle.addEventListener('click', () =>{

            nav.classList.toggle('show-menu');
        });
    }

};

mostrarMenu('nav-toggle', 'nav-menu');

/*
 *
 */

const navLink = document.querySelectorAll('.nav__link');


function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach( n => n.addEventListener('click', linkAction) );

/*
  Ativa scroll das seções
*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; 
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId  + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId  + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*
  Mudar fundo do cabeçalho
*/

function scrollHeader() {
    
    const nav = document.getElementById('header');
    /* quando a rolagem for maior que 200 de altura da janela de visualização, 
       adicione a classe scroll-header à tag de cabeçalho 
    */
    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

// Scroll Revelação

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img, .sobre__data, .sobre__img, .servicos__content, 
.parceiro__content, .app__data, .app__img, .contato__data, .contato__button, .footer__content`,{ 
interval: 200});

