let arr = [
  {
    image:
      "https://www.crystalage.com/img/products/amethyst-geode-sphere-77mm_2.jpg",
    name: "Amethyst Geode",
    price: 350,
  },
  {
    image:
      "https://www.crystalage.com/img/products/rainbow-aura-quartz-healing-crystal-45mm_16.jpg",
    name: "rainbow aura quartz",
    price: 600,
  },
  {
    image:
      "https://www.crystalage.com/img/products/lovely-amethyst-geode-sphere-105mm_2.jpg",
    name: "Amethyst Geode lovely",
    price: 250,
  },
  {
    image:
      "https://www.crystalage.com/img/products/aqua-aura-quartz-healing-crystal-50mm_71.jpg",
    name: "  amazing aqua aura quartz",
    price: 400,
  },
  {
    image:
      "https://www.crystalage.com/img/products/blue-kyanite-paraiba-healing-crystal-70mm_16.jpg",
    name: "Amazing blue kianite",
    price: 300,
  },
  {
    image:
      "https://www.crystalage.com/img/products/phantom-citrine-point-38-x-28mm_2.jpg",
    name: "AMAZING Phantom Citrine Point",
    price: 550,
  },
  {
    image:
      "https://www.crystalage.com/img/products/amethyst-polished-flame-119mm_2.jpg",
    name: "attaractive flame",
    price: 450,
  },
  {
    image:
      "https://www.crystalage.com/img/products/rhodochrosite-and-silver-pendant-freeform-25mm_4.jpg",
    name: "attractive Pendant",
    price: 350,
  },
  {
    image:
      "https://www.crystalage.com/img/products/ametrine-polished-point-7-9cm_2.jpg",
    name: "  BEAUTIFUL Ametrine Polished Point",
    price: 280,
  },
  {
    image:
      "https://www.crystalage.com/img/products/beautiful-apophyllite-crystal-cluster-150x140mm_2.jpg",
    name: "BEAUTIFUL Apophyllite Crystal Cluster",
    price: 260,
  },
  {
    image:
      "https://www.crystalage.com/img/products/beautiful-quartz-faceted-polished-heart-60mm_3.jpg",
    name: "   BEAUTIFUL Quartz Faceted Polished Heart ",
    price: 210,
  },
  {
    image:
      "https://www.crystalage.com/img/products/beautiful-quartz-polished-heart-60mm_2.jpg",
    name: "BEAUTIFUL Quartz Polished Heart",
    price: 330,
  },
  {
    image:
      "https://www.crystalage.com/img/products/amethyst-natural-crystal-point-77mm_2.jpg",
    name: "extra large amethyst natural",
    price: 380,
  },
  {
    image:
      "https://www.crystalage.com/img/products/fantastic-malachite-freeform-108x102mm_2.jpg",
    name: "FANTASTIC Malachite Freeform",
    price: 380,
  },
  {
    image:
      "https://www.crystalage.com/img/products/golden-iron-pyrite-complex-healing-mineral-collector-grade-87mm_2.jpg",
    name: "GOLDEN Iron Pyrite Complex Healing Mineral (Collector Grade)",
    price: 440,
  },
  {
    image: "https://www.crystalage.com/img/products/citrine-cluster-85mm_2.jpg",
    name: "GORGEOUS Citrine Cluster",
    price: 370,
  },
  {
    image:
      "https://www.crystalage.com/img/products/rhodonite-snowflake-crystal-sphere-5-6cm_5.jpg",
    name: "GORGEOUS Rhodonite Snowflake Crystal Sphere",
    price: 650,
  },
  {
    image:
      "https://www.crystalage.com/img/products/herkimer-diamond-healing-crystal-46mm_5.jpg",
    name: "HEAVENLY Herkimer Diamond Healing Crystal ~46mm",
    price: 80,
  },
  {
    image:
      "https://www.crystalage.com/img/products/phantom-quartz-polished-point-80-x-37-mm_2.jpg",
    name: "LOVELY Phantom Quartz Polished Point",
    price: 75,
  },
  {
    image:
      "https://www.crystalage.com/img/products/moldavite-healing-crystal-collector-grade-25mm_56.jpg",
    name: "MASTER HEALER Smoky Elestial Quartz Crystal ",
    price: 550,
  },
];

function display() {
  let str = "";
  arr.forEach(function (data, index) {
    str += `
    <div class="box">
        <img
          src=${data.image}
          alt="${data.name}"
        />
        <h1 class="text-light">
           ${data.name}
        </h1>
        <p class="text-info"><i class="fa-solid fa-euro-sign text-info"></i>${data.price}</p>
        
        <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Now</button>
      </div>`;
  });
  document.querySelector(".card").innerHTML = str;
}
display();
