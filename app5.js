
  let arr = [
  {
    name : "amethyst stone",
    image : "https://liveplatforms-production.b-cdn.net/tenants/gr/uploads/images/2330000-2334999/2333911/4778e8c5-1fed-468e-9913-c27f2aba1405.jpg?auto_optimize=medium",
    price : 25000
  },
  {
    name : "agate stone",
    image : "https://5.imimg.com/data5/JJ/YD/QR/SELLER-2221637/img-0478-500x500.JPG",
    price : 3300
  },
  {
    name : "amethyst stone",
    image : "https://liveplatforms-production.b-cdn.net/tenants/gr/uploads/images/2330000-2334999/2333911/4778e8c5-1fed-468e-9913-c27f2aba1405.jpg?auto_optimize=medium",
    price : 33500
  },
  {
    name : "Andalusite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHnozA5Hyiq_FFNNx2l539flU0SlWcjcFquxO4JZzpV6_VuzSUJDw0jlVUrHn8iwOOdg&usqp=CAU",
    price : 90000
  },
  {
    name : "Apatite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzopYdUP0gw7YZESOgFydov3sZTzC3B54tDsYJ0oupdi_Q1Z1N_LKDHuBYo4pP0pPQow&usqp=CAU",
    price : 41000
  },
  {
    name : "Carnelian stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc62ywpfs_56zmR84xPMOaDpReMv1RDUX_w3h6rIVviF1vvTmWqbzzUrSvdsNsjA5IbGs&usqp=CAU", 
    price : 33000
  },
  {
    name : "Celestite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM71OSt3PmOU4f0xDzXq3uBEM-cpWOLqKr58F40RgsIeOKgS4IkCKQztpocsPhPwafmjc&usqp=CAU",
    price : 4400
  },
  {
    name : "Emerald stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM71OSt3PmOU4f0xDzXq3uBEM-cpWOLqKr58F40RgsIeOKgS4IkCKQztpocsPhPwafmjc&usqp=CAU",
    price : 3200
  },
  {
    name : "malachite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXUrBZrk98p9eGbdSSjVDcrbJlVXi_k6LvIy34POfNMEbYbPCm9BTXstKFS7YFgQZ-is&usqp=CAU",
    price : 2400
  },
  {
    name : "garnet stone",
    image : "https://rashiratanjaipur.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/g/6/g643325339_-4.00ctf.jpg",
    price : 2300
  },
  {
    name : "adamite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYUmHTGg90QG2Ap5ZxAvqWPqhTSDc4rlGvGyO0CCyHNOvEjPT4kDPN-e8UOFNZzvNBU8&usqp=CAU",
    price : 90000

  },
  {
    name : "alexandire stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Bsiif129xw-XiJ1RiaF4bI-GAxAV7lTqRSMj7cezAeNwGvMOoYNxZv77MIDLbl-7PPY&usqp=CAU",
    price : 120000
  },
  {
    name : "amazonite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9NDxVhXmLHrMi37qR2V4zEtUaq9pAeki8ha6hpQjk_EIg9uIv9u9VxPKxQ4nF1B4Ogc&usqp=CAU",
    price : 200000
  },
  {
    name : "florite stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8zwEjHbK71w-MRIJZAj3VXPxbZUmthqoqkd6q_ZOVeFsv9XW-gI9Ho9YmhG7Ge_ZocM&usqp=CAU",
    price : 44000
  },
  {
    name : "jade stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sSGwADyVSyNHuQxj7SHzEJuUr19AMYfY48bisVRQmARzUEDOLr90WYB3gYdmM0UJ4Vs&usqp=CAU",
    price : 30000
  },
  {
    name : "amber stone",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_MKoH8ZTME8b5m6Hh2vCnnBJiE7kkla9C6Aapaq07P6680WT7mBGCDlKHMftgPLt7oU&usqp=CAU",
    price : 600000
  },
]

function display(){
  let str = '';
  arr.forEach(function(data, index){
    str += `
    <div class="box mb-3">
        <img
          src="${data.image}"
          alt="${data.name}"
        />
        <h1>
          ${data.name}
        </h1>
        <p>
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit. <br />
          Voluptatum, voluptates?
        </p>
        <p>price ${data.price}</p>
        
        <!-- <input class="form-control" type="number" name="number" id="price"> -->
          <button  onclick='addToCart(${JSON.stringify(data.name)}, ${
            data.price
          }, 1)' class="btn btn-light">Buy Now</button>
      </div>
      `
  })
  document.querySelector('.card').innerHTML = str
}
display();

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
        if(cart.length > 0){
          document.querySelector('#clearcart').style.display = "inline"
          document.querySelector('#bn').style.display = "inline"
        }
        else{
            document.querySelector('#clearcart').style.display = "none"
            document.querySelector('#bn').style.display = "none"
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
      
      function clearCart(){
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
        updateCart()
      }