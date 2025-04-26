// buy block
const targetIds = ["buy-1", "buy-2", "buy-3", "buy-4"];

function createBuyBlock(count, isLast = false) {
  const paddingClass = isLast ? "p-lr-tb-0-20" : "p-20";
  const buttonContent = isLast
    ? `<button class="big_text uppercase pointer p-0" onclick="send()">Купити зараз</button>`
    : `<button class="big_text uppercase btn-link"> <a class="a" href="#buy-4" >Купити зараз</a> </button>`;
  return `
      <div class="btn-block ${paddingClass} p-20 d-flex  flex-d-col align-center sm-p-lr-15">
        ${buttonContent}
        <div class="text m-t-10 normal_text sm-m-b-20">
          Купили <span class="p-lr-6 m-lr-8">${count}</span> штук по акції
        </div>
      </div>
    `;
}

targetIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    const isLast = id === "buy-4";
    el.innerHTML = createBuyBlock(18, isLast);
  }
});

function send() {
  console.log("Виконання функції send()");
}

// description
const blocks = [
  {
    img: "img/rotate.webp",
    description1:
      "Акумуляторна газонокосарка на колесах - багатофункціональне, надійне та зручне рішення для вашого саду!",
    description2:
      "Ніяких безладних заростей, ніяких бур'янів - тільки рівна, акуратна трава.",
  },
  {
    img: "img/corps.webp",
    description1:
      "Вам більше не доведеться тягнути за собою дроти або заправляти бензин - досить зарядити акумулятор та приступити до роботи.",
    description2:
      "Завдяки інтенсивності двигуна 1500 Вт. та високій швидкості обертання, косарка легко впорається навіть з густими заростями або складним рельєфом.",
  },
  {
    img: "img/package.webp",
    description1:
      "Універсальна конструкція дає змогу легко змінювати насадки залежно від типу рослинності.",
    description2:
      "Хочете просто підрівняти газон? Легко! Потрібно позбутися бур'янів? Без проблем! Навіть чагарники більше не стануть перешкодою на шляху до ідеальної ділянки.",
  },
  {
    img: "img/comfort.webp",
    description1:
      "Додатковий комфорт забезпечують телескопічна трубка, регульована косильна головка та зручна ручка з м'яким покриттям.",
    description2:
      "З таким інструментом косіння стає простим, швидким та навіть приємним процесом.",
  },
  {
    img: "img/handle.webp",
    description1:
      "Досить узяти газонокосарку в руки, налаштувати зручне положення - і ваша ділянка перетвориться всього за кілька хвилин!",
    description2:
      "Це не просто інструмент, а ваш надійний помічник у створенні ідеального ландшафту.",
  },
];

const container = document.getElementById("description");

blocks.forEach((block) => {
  container.innerHTML += `
      <div class="product-block p-lr-20 d-flex flex-d-col align-center">
             <p class="m-b-10 t-center normal_text font_normal">${block.description1}</p>
             <p class="m-b-10 t-center normal_text font_normal">${block.description2}</p>
        <img class="m-tb-10 border-radius-8 w-100" src="${block.img}" alt="${block.title}">
      </div>
    `;
});

// characteristics
const parts = [
  {
    img: "img/power.webp",
    title: "Характеристики",
    items: {
      one: "Габарити упаковки - 15 Х 15 Х 59 см.",
      two: "Вага з упаковкою - 2,9 кг.",
      three: "Інтенсивність - 1500 Вт.",
      four: "Швидкість - 12 000 об/хв.",
      five: "Ширина скошування - 7 дюймів",
      six: "Насадки - 3 типи насадок",
      seven: "Телескопічна ручка - 100 - 135 см.",
      eight: "Модель батареї - 388vf",
      nine: "Ємність - 15000мАг.",
    },
  },
  {
    img: "img/complect.webp",
    title: "Комплектацiя",
    items: {
      one: "Газонокосарка - 1 шт.",
      two: "Пластикові насадки - 5 шт.",
      three: "Металеві насадки - 2 шт.",
      four: "6-ти дюймове полотно - 1шт.",
      five: "Гайковий ключ - 1шт.",
      six: "Колеса - 1 шт.",
      seven: "Батареї - 2 шт.",
      eight: "Зарядний пристрій - 1шт.",
      nine: "Пакування",
    },
  },
];

const characteristics = document.getElementById("characteristics");

parts.forEach((part) => {
  // Створюємо список характеристик
  let itemsHTML = "";
  for (let key in part.items) {
    itemsHTML += `
    <li class="d-flex align-center">
      <div class="item p-relative border-radius-2"></div>
      <span class="p-l-30 m-b-7 normal_text">${part.items[key]}</span>
    </li>`;
  }


  characteristics.innerHTML += `
      <div class="part p-20 p-b-0 sm-p-lr-15">
        <img class="w-100" src="${part.img}" alt="${part.title}">
        <div class="title m-tb-20 d-flex justify-center align-center uppercase big_text"><h2>${part.title}</h2></div>
        <ul>
          ${itemsHTML}
        </ul>
      </div>
    `;
});

// for video
function playVideo() {
  document.querySelector(".video-thumbnail").style.display = "none";
  document.querySelector("#video-frame").style.display = "block";
}

// timer
function updateCountdown() {
  const now = new Date();
  const totalSecondsInDay = 24 * 60 * 60;
  const secondsPassed =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const secondsLeft = totalSecondsInDay - secondsPassed;

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;


  const timers = [
    { hours: ".hours", minutes: ".minutes", seconds: ".seconds" },
    { hours: ".hours2", minutes: ".minutes2", seconds: ".seconds2" },
  ];


  timers.forEach((timer) => {
    document.querySelector(timer.hours).textContent = String(hours).padStart(
      2,
      "0"
    );
    document.querySelector(timer.minutes).textContent = String(
      minutes
    ).padStart(2, "0");
    document.querySelector(timer.seconds).textContent = String(
      seconds
    ).padStart(2, "0");
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();


// slider 
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function showPreviousSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
  }

  function showNextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
  }

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  window.addEventListener('resize', updateSlider); // щоб працювало при зміні розміру
});