// MOBILE MENU TOGGLE

const mobileMenuBtn = document.querySelector(".burger");
const mobileMenuList = document.querySelector(".mobile-list");
const mobileMenuLinks = document.querySelectorAll(".mobile-link");
let flag = false;

mobileMenuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    if (flag) {
      mobileMenuList.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
      flag = false;
    }
  })
);

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

window.addEventListener("scroll", () => {
  const products = document.querySelectorAll(".product-box");
  const contact = document.querySelector(".contact-form");
  for (let i = 0; i < products.length; i++) {
    let windowHeight = window.innerHeight;
    let boxTop = products[i].getBoundingClientRect().top;
    const boxPoint = 50;
    if (boxTop < windowHeight - boxPoint) {
      products[i].classList.add("slide");
    } else {
      products[i].classList.remove("slide");
    }
  }
});

// const headerBackground = document.querySelector(".header-content");
// let value = 0;
// window.addEventListener("scroll", () => {
//   headerBackground.style.backgroudColor = `rgba(0,0,0,0.${window.innerHeight})`;
// });

// SMOOTH SCROLL
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
});

// CALCULATOR

const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
let bmi = weight / (((height / 100) * height) / 100);
let bmiOutput = bmi.toFixed(2);

const calcButton = document.getElementById("bmiBtn");

calcButton.addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let bmi = weight / (((height / 100) * height) / 100);
  let bmiOutput = bmi.toFixed(2);
  if (height && weight) {
    document.getElementById("result").innerHTML = `Your BMI is ${bmiOutput}`;
    setTimeout(() => {
      document.getElementById("result").innerHTML = "result";
    }, 5000);
  } else {
    document.getElementById("result").innerHTML = "Enter both values";
    setTimeout(() => {
      document.getElementById("result").innerHTML = "result";
    }, 5000);
  }
});

document.querySelector(".mobile-link.bmi").addEventListener("click", () => {
  document.querySelector(".calculator").classList.add("active");
});

document.querySelector(".toggle-calc").addEventListener("click", () => {
  document.querySelector(".calculator").classList.remove("active");
});
