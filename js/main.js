document.addEventListener("DOMContentLoaded", function () {
  // open\close popup
  const overlay = document.querySelector(".overlay")
  const popUp = document.querySelector(".overflow")

  const openPopUp = () => {
    overlay.classList.remove("overlay--hide")
    popUp.classList.remove("popup--hide")
    overlay.classList.add("overlay--show")
    popUp.classList.add("popup--show")
  };

  const closePopUp = () => {
    overlay.classList.remove("overlay--show")
    popUp.classList.remove("popup--show")
    overlay.classList.add("overlay--hide")
    popUp.classList.add("popup--hide")

    setTimeout(() => {
      overlay.classList.remove("overlay--hide")
      popUp.classList.remove("popup--hide")
    }, 300)
  };

  document.querySelector(".main__btn").addEventListener("click", openPopUp)
  document.querySelector(".popup__close").addEventListener("click", closePopUp)
  document.querySelector(".overlay").addEventListener("click", closePopUp)

  // pagination
  const listItems = [
    "Россия, Москва <br>ул. Коштоянца, 11",
    "Россия, Москва <br>ул. Коштоянца, 12",
    "Россия, Москва <br>ул. Коштоянца, 13",
    "Россия, Москва <br>ул. Коштоянца, 14",
    "Россия, Москва <br>ул. Коштоянца, 15",
    "Россия, Москва <br>ул. Коштоянца, 16",
    "Россия, Москва <br>ул. Коштоянца, 17",
    "Россия, Москва <br>ул. Коштоянца, 18",
    "Россия, Москва <br>ул. Коштоянца, 19",
    "Россия, Москва <br>ул. Коштоянца, 21",
    "Россия, Москва <br>ул. Коштоянца, 22",
    "Россия, Москва <br>ул. Коштоянца, 23",
    "Россия, Москва <br>ул. Коштоянца, 24",
    "Россия, Москва <br>ул. Коштоянца, 25",
    "Россия, Москва <br>ул. Коштоянца, 26",
    "Россия, Москва <br>ул. Коштоянца, 27",
    "Россия, Москва <br>ул. Коштоянца, 28",
    "Россия, Москва <br>ул. Коштоянца, 29",
    "Россия, Москва <br>ул. Коштоянца, 31",
    "Россия, Москва <br>ул. Коштоянца, 32",
    "Россия, Москва <br>ул. Коштоянца, 33",
    "Россия, Москва <br>ул. Коштоянца, 34",
    "Россия, Москва <br>ул. Коштоянца, 35",
    "Россия, Москва <br>ул. Коштоянца, 36",
    "Россия, Москва <br>ул. Коштоянца, 37",
    "Россия, Москва <br>ул. Коштоянца, 38",
    "Россия, Москва <br>ул. Коштоянца, 39",
    "Россия, Москва <br>ул. Коштоянца, 41",
    "Россия, Москва <br>ул. Коштоянца, 42",
    "Россия, Москва <br>ул. Коштоянца, 43",
    "Россия, Москва <br>ул. Коштоянца, 44",
    "Россия, Москва <br>ул. Коштоянца, 45",
    "Россия, Москва <br>ул. Коштоянца, 46",
    "Россия, Москва <br>ул. Коштоянца, 47",
    "Россия, Москва <br>ул. Коштоянца, 48",
    "Россия, Москва <br>ул. Коштоянца, 49",
    "Россия, Москва <br>ул. Коштоянца, 51",
    "Россия, Москва <br>ул. Коштоянца, 52",
    "Россия, Москва <br>ул. Коштоянца, 53",
    "Россия, Москва <br>ул. Коштоянца, 54",
    "Россия, Москва <br>ул. Коштоянца, 55",
    "Россия, Москва <br>ул. Коштоянца, 56",
    "Россия, Москва <br>ул. Коштоянца, 57",
  ];

  const listElement = document.getElementById("list")
  const paginationElement = document.getElementById("pagination")

  let currentPage = 3
  let rows = 9

  function displaylist(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = ""
    page--

    let start = rowsPerPage * page
    let end = start + rowsPerPage
    let paginatedItems = items.slice(start, end)

    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      let itemElement = document.createElement("div")
      itemElement.classList.add("addresses-block__item")
      itemElement.innerHTML = `<div class="addresses-block__title">${item}</div>
        <div class="addresses-block__add">+ Добавить</div>`;

      wrapper.appendChild(itemElement);
    }
  }

  function setupPagination(items, wrapper, rowsPerPage) {

    wrapper.innerHTML = ""

    let pageCount = Math.ceil(items.length / rowsPerPage)

    for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i, items)

      wrapper.appendChild(btn)
    }
  }

  function paginationButton(page, items) {
    let btn = document.createElement("div")
    btn.classList.add("pagination-block__item")

    btn.innerText = page

    if (currentPage == page) btn.classList.add('pagination-block__item--active')

    btn.addEventListener('click', () => {
        currentPage = page
        displaylist(items, listElement, rows, currentPage)

        let currentBtn = document.querySelector('.pagination-block__item--active')
        currentBtn.classList.remove('pagination-block__item--active')

        btn.classList.add('pagination-block__item--active')
    })

    return btn
  }

  displaylist(listItems, listElement, rows, currentPage)
  setupPagination(listItems, paginationElement, rows)
});
