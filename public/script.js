const links = document.querySelectorAll('li a');
const menus = document.querySelectorAll('.menu svg');

const htmlEnglish = document.querySelectorAll('.us-en')
const htmlPortugues = document.querySelectorAll('.pt-br')

const leftNav = document.querySelectorAll('.left-nav .menu-item');
const rightNav = document.querySelectorAll('.right-nav .menu-item');

function toggleLinkNav(listLink) {
  listLink.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(e.target);
      removeActiveNavbar(listLink)
      e.target.parentElement.classList.add('active');
    });
  });
}

function removeActiveNavbar(listLink) {
  listLink.forEach(link => {
    link.classList.remove('active')
  })
}

toggleLinkNav(leftNav)
toggleLinkNav(rightNav)

EventRightNavbar()

function EventRightNavbar() {
  const rightNav = document.querySelectorAll('.right-nav li a');
  rightNav.forEach(link => {
    link.addEventListener('click', () => {
      if (link.attributes.title.value  == 'english'){
        switchLanguage(htmlEnglish, 'block')
        switchLanguage(htmlPortugues, 'none')
      }
      
      if (link.attributes.title.value  == 'portugues'){
        switchLanguage(htmlEnglish, 'none')
        switchLanguage(htmlPortugues, 'block')
      }
    })
  })
}

function switchLanguage(language, style) {
  language.forEach(text => {
    text.style.display = style
  })
}

// MENU HAMBURGUER
menus.forEach(menu => {
  menu.addEventListener('click', (e) => {
    const header = document.querySelector('header')
    header.classList.toggle('slide-navbar')

    menu.classList.toggle('opened-svg')
    const nav = document.querySelector('nav')
    nav.setAttribute('aria-expanded', nav.classList.contains('opened-nav'));
  });
})
