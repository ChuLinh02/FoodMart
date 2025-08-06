// console.log("Hello Hallie!");

import banners from "./mock/mock-data-banner.js";
import categories from "./mock/mock-data-categories.js";
import { disableBtn, enableBtn } from "./utils.js";
import trendingProducts from "./mock/mock-data-trending-products.js";

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
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const categoriesItems = document.querySelectorAll(".categories__item");
  const lenCategories = categories.length;
  const minItems = 4;
  const numOfClick = lenCategories - minItems;

  let currentIndex = 0;
  disableBtn(btnPrev);

  function slidePrev() {
    enableBtn(btnNext);
    categoriesItems.forEach((item) => {
      item.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
      item.style.transition = "transform 0.5s ease-in-out";
    });
    currentIndex--;
    if (currentIndex <= 0) {
      currentIndex = 0;
      disableBtn(btnPrev);
      return;
    }
  }

  function slideNext() {
    enableBtn(btnPrev);
    categoriesItems.forEach((item) => {
      item.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
      item.style.transition = "transform 0.5s ease-in-out";
    });
    currentIndex++;
    if (currentIndex >= numOfClick) {
      disableBtn(btnNext);
      return;
    }
  }

  btnPrev.addEventListener("click", slidePrev);
  btnNext.addEventListener("click", slideNext);
}

handleSlideCategories();

function createTrendingProducts(image, name, unit, price = 0, rating) {
  return `
    <li class="trending-products__item">
          <div class="item-image-container">
            <img class="item-image"
              src="${image}"
              alt="Image"
            />
            </div>
            <h4>${name}</h4>
            <div class="item-info">
              <span class="item-unit">${unit}</span>
              <i class="fa-solid fa-star"></i>
              <span class="item-star">${rating}</span>
            </div>

            <p class="item-price">$${price}</p>
            <div class="item-actions">
              <div class="item-quantity">
                <button class="btn-des">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="item-amount">1</span>
                <button class="btn-inc">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <button class="btn-add">Add to Cart</button>
            </div>
          </li>
  `;
}

function renderTrendingProducts(products) {
  const trendingProductList = document.querySelector(
    ".trending-products__list"
  );
  let trendingProductHTML = "";
  for (const product of products) {
    const { img, name, unit, price, rating } = product;
    trendingProductHTML += createTrendingProducts(
      img,
      name,
      unit,
      price,
      rating || 0
    );
  }
  trendingProductList.innerHTML = trendingProductHTML;
}

renderTrendingProducts(trendingProducts);
