window.addEventListener("load", () => {
  document.querySelector("main").classList.add("loaded");
});

// MOBILE MENU TOGGLE

const mobileMenuBtn = document.querySelector(".burger");
const mobileMenuList = document.querySelector(".mobile-list");
let flag = false;

const toggleMobileMenu = () => {
  if (!flag) {
    mobileMenuList.classList.add("active");
    mobileMenuBtn.classList.add("active");
    flag = true;
  } else {
    mobileMenuList.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    flag = false;
  }
};
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

// const header = document.querySelector(".header");

// header.addEventListener('scroll',()=>{
//   header.getBoundingClientRect.
// })
