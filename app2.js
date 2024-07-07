let arr = [
  {
    name: "silver Diamond",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/13/53/diamond-161739_640.png",
    price: 60000,
  },
  {
    name: "Diamond Red Ruby",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtICOQyqHqAHj1PGzsIsOEnkh8t-Tyrj7KCHn-L7lnadIKH-VdRXy9uLDDlVDt2c46qg&usqp=CAU",
    price: 180000,
  },
  {
    name: "Gold Earings",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOYt1HJf8L9ut0hAs5bqTKjcRanvY2ORXo86qravQIPKGGh0CtlS9tHADsNMhKB8qA3w&usqp=CAU",
    price: 250000,
  },
  {
    name: "Diamond Gems",
    image:
      "https://cdn.pixabay.com/photo/2018/02/27/13/31/diamond-3185447_640.jpg",
    price: 39000,
  },
  {
    name: "Deep Cube Crystal",
    image:
      "https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_640.jpg",
    price: 55000,
  },
  {
    name: "Octane Diamond",
    image: "https://i.ytimg.com/vi/CXxjrrAcr1A/maxresdefault.jpg",
    price: 120000,
  },
  {
    name: "Ranbow Aura Curtz Crystals",
    image:
      "https://www.crystalage.com/img/products/rainbow-aura-quartz-healing-crystal-55mm_8.jpg",
    price: 455000,
  },
  {
    name: "5 Diamension Ruby",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2T6IWE66efYxjnvtJNgzLmxwPNckbAsaQamn4J_44_6GBfxgF1rbg1MiBHJvK09Tjyg&usqp=CAU",
    price: 450000,
  },
  {
    name: "Luxury Diamond Ring",
    image:
      "https://cdn.pixabay.com/photo/2017/06/15/11/42/ring-2405145_640.jpg",
    price: 200000,
  },
  {
    name: "Rose Ultra Healing Crystals",
    image:
      "https://www.crystalage.com/img/products/rose-ultra-aura-quartz-healing-crystal-53mm_5.jpg",
    price: 25000,
  },
  {
    name: "aqua aura curtz crystals",
    image:
      "https://www.crystalage.com/img/products/aqua-aura-quartz-healing-crystal-60mm_23.jpg",
    price: 35600,
  },
  {
    name: " flame aura curtz crystals",
    image:
      "https://www.crystalage.com/img/products/flame-aura-quartz-healing-crystal-44mm_11.jpg",
    price: 45000,
  },
];
function displayCards() {
  let str = "";
  arr.forEach(function (data, index) {
    str =
      str +
      `
        <div class="box">
          <img
            src="${data.image}"
            alt="${data.name}"
          />
          <h1>${data.name}</h1>
          <p>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
          </p>
          <p class="text-info">price ${data.price}</p>
          
          <button onclick='addToCart(${JSON.stringify(data.name)}, ${
        data.price
      }, 1)'
            class="btn btn-light"
            data-bs-toggle="modal"
          >
            Buy Now
          </button>
        </div>`;
  });
  document.querySelector(".card").innerHTML = str;
}
displayCards();

// add to cart

let cart = [];
let total = 0;

function addToCart(name, price, qty) {
  cart = JSON.parse(localStorage.getItem("cart"));
  total = JSON.parse(localStorage.getItem("total"));
  if (cart === null || total === null) {
    cart = [];
    total = 0;
  }

  let existingItems = cart.find((data) => data.name == name);
  if (existingItems) {
    existingItems.qty++;
    total += existingItems.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
  } else {
    cart.push({ name: name, price: price, qty: qty });
    total = total + price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
  }

  updateCart();
  // alert('hello word')
}

function updateCart() {
  cart = JSON.parse(localStorage.getItem("cart"));
  total = JSON.parse(localStorage.getItem("total"));
  if (cart === null || total === null) {
    cart = [];
    total = 0;
  }
  if (cart.length > 0) {
    document.querySelector("#clearcart").style.display = "inline";
    document.querySelector("#bn").style.display = "inline";
  } else {
    document.querySelector("#clearcart").style.display = "none";
    document.querySelector("#bn").style.display = "none";
  }
  document.getElementById("cartlength").innerHTML = cart.length;
  document.getElementById("cartlengths").innerHTML = cart.length;

  let str1 = "";
  cart.forEach(function (data, index) {
    str1 =
      str1 +
      `
              <li class="d-flex justify-content-between mb-3">${data.name} | ${data.price}<div> <button onclick='increment(${index}, ${data.qty}, ${data.price})' class="btn btn-secondary">+</button> ${data.qty} <button onclick='decrement(${index}, ${data.qty}, ${data.price})' class="btn btn-secondary">-</button></div></li>
              `;
  });
  document.querySelector("#listitems").innerHTML = str1;
  document.querySelector("#total_listitems").innerHTML = total;
}

updateCart();

function increment(index, qty, price) {
  cart = JSON.parse(localStorage.getItem("cart"));
  total = JSON.parse(localStorage.getItem("total"));
  cart[index].qty++;
  total += price;
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
  updateCart();
}

function decrement(index, qty, price) {
  cart = JSON.parse(localStorage.getItem("cart"));
  total = JSON.parse(localStorage.getItem("total"));
  if (cart[index].qty == 1) {
    cart.splice(index, 1);
    total -= price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
    updateCart();
  } else {
    cart[index].qty--;
    total -= price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
    updateCart();
  }
}

function clearCart() {
  localStorage.removeItem("cart");
  localStorage.removeItem("total");
  updateCart();
}
