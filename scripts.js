
// Sidebar 
const btns = document.querySelectorAll(".mobile-menu-button");
const sidebar = document.querySelector(".side-bar");
const el_parent = document.getElementById('parent');

// add our event listener for the click
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full");
    sidebar.classList.contains("bg-black") ? sidebar.classList.remove("bg-black") : setTimeout(() => {
      sidebar.classList.add("bg-black");
      sidebar.classList.add("bg-opacity-80");
    }, 110)

    
  }) 
});


// To click just the black background and ignore the white child //
el_parent.addEventListener('click', () => {
  sidebar.classList.toggle("translate-x-full");
  sidebar.classList.contains("bg-black") ? sidebar.classList.remove("bg-black") : setTimeout(() => {
    sidebar.classList.add("bg-black");
    sidebar.classList.add("bg-opacity-80");
  }, 110)
  document.getElementById('child').addEventListener('click', e => e.stopPropagation());
});



////Link to sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


////////  Fixed Header  /////////

(function () {

  var headerScroll = getId('header-main'),
    scrollHeight = 52,
    menuIcon = getId('menu-icon'),
    menuMain = getId('menu-main'),
    classMenu = 'menu-active',
    classHeader = 'active';

  //SCROLL
  window.addEventListener("scroll", scrollOn);

  function scrollOn() {
    animatedScroll(headerScroll, classHeader, scrollHeight);
  }

  //MENU RESPONSIVE 
  menuIcon.onclick = function () {
    toggle(menuMain, classMenu);
  }

  function animatedScroll(element, classN, height) {
    y = pageYOffset; 
    if (y > height) {
      element.classList.remove("opacity-0");
    } else if (y == 0) {
      element.classList.add("opacity-0");
    }
  }

  // Função toggle adiciona ou tira a class do elemento
  function toggle(element, classe) {
    element.className = element.className ? '' : classe;
  }

  //Função que retorna o id do elemento
  function getId(id) {
    return document.getElementById(id);
  }
})();


