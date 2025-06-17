// console.log("Hello Hallie!");

import banners from "./mock/mock-data-banner.js";
import categories from "./mock/mock-data-categories.js";

function renderBanners(banners) {
  const bannerContainer = document.querySelector(".banner-slides");
  let bannerHTML = "";
  for (const item of banners) {
    bannerHTML += `            
            <div class="banner-content-item">
              <div class="banner-left-content">
                <span>100% Natural</span>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <button>${item.buttonText}</button>
              </div>
              <img
                class="banner-left-image"
                src=${item.image}
                alt="bottle_image"
              />
            </div>
        `;
  }
  bannerContainer.innerHTML = bannerHTML;

  const dots = document.querySelectorAll(".dot");
  dots[0].classList.add("dot-active");
}

renderBanners(banners);

function handleSlideBanners() {
  const dots = document.querySelectorAll(".dot");
  const bannerItems = document.querySelectorAll(".banner-content-item");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      dots.forEach((dot) => {
        dot.classList.remove("dot-active");
      });
      dots[i].classList.add("dot-active");
      for (let j = 0; j < bannerItems.length; j++) {
        bannerItems[j].style.transform = `translateX(-${i * 100}%)`;
        bannerItems[j].style.transition = "transform 0.5s ease-in-out";
      }
    });
  }
}

handleSlideBanners();

// Categories
function renderCategories(categories) {
  const categoriesList = document.querySelector(".categories__list");
  let categoriesHTML = "";
  for (const item of categories) {
    categoriesHTML += `
    <li class="categories__item">
      <img 
        src="${item.image}" 
        alt="${item.name}" />
      <span>${item.name}</span>
    </li>
    `;
  }
  categoriesList.innerHTML = categoriesHTML;
}

renderCategories(categories);

// Handle slider categories
function handleSlideCategories() {
  
}