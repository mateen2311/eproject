let arr = [
  {
    name: "Diamond Red Ruby",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtICOQyqHqAHj1PGzsIsOEnkh8t-Tyrj7KCHn-L7lnadIKH-VdRXy9uLDDlVDt2c46qg&usqp=CAU",
    price: 4550,
  },
  {
    name: "Diamond gem jewel",
    image:
      "https://cdn.pixabay.com/photo/2016/02/08/07/42/diamond-1186139_640.jpg",
    price: 6000,
  },
  {
    name: "Gold Earing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOYt1HJf8L9ut0hAs5bqTKjcRanvY2ORXo86qravQIPKGGh0CtlS9tHADsNMhKB8qA3w&usqp=CAU",
    price: 7000,
  },
  {
    name: "Diamond Ring",
    image:
      "https://cdn.pixabay.com/photo/2019/11/24/14/15/diamond-4649510_640.png",
    price: 9000,
  },
  {
    name: "Gold Box",
    image:
      "https://cdn.pixabay.com/photo/2014/04/03/09/58/treasure-309480_640.png",
    price: 16000,
  },
  {
    name: "Luxury Diamond Ring",
    image:
      "https://cdn.pixabay.com/photo/2017/06/15/11/42/ring-2405145_640.jpg",
    price: 23000,
  },
  {
    name: "Luxury Diamond Gem",
    image:
      "https://cdn.pixabay.com/photo/2014/04/02/10/54/diamond-304884_640.png",
    price: 30000,
  },
  {
    name: "Luxury Diamond Sets",
    image:
      "https://cdn.pixabay.com/photo/2016/11/11/07/47/jewellery-1815974_640.jpg",
    price: 2000,
  },
  {
    name: "Pink Gemstone",
    image:
      "https://cdn.pixabay.com/photo/2016/04/01/11/32/diamond-1300411_640.png",
    price: 1000,
  },
  {
    name: "Deep Cube Crystal",
    image:
      "https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_640.jpg",
    price: 4000,
  },
  {
    name: "Dimaond Gems",
    image:
      "https://cdn.pixabay.com/photo/2018/02/27/13/31/diamond-3185447_640.jpg",
    price: 5000,
  },
  {
    name: "Silver Dimaond",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/13/53/diamond-161739_640.png",
    price: 5400,
  },
];
function displayCards() {
  let str = "";
  arr.forEach(function (data, index) {
    str += `
        <div class="box">
          <img
            src="${data.image}"
            alt="${data.name}"
          />
          <h1>${data.name}</h1>
          <p>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Voluptatum, voluptates?
          </p>
          <p>RS : ${data.price} </p>

           <button onclick='addToCart(${JSON.stringify(data.name)}, ${
      data.price
    }, 1)' 
           class="btn btn-light">Buy Now</button>
           </div>
           `;
  });
  document.querySelector(".rest").innerHTML = str;
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
