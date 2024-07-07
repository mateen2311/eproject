$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".openmenu").toggle();
  });
  $("#srch").on("keyup", function () {
    let inp = $("#srch").val().toUpperCase();
    $(".card .box").filter(function () {
      $(this).toggle($(this).text().toUpperCase().indexOf(inp) > -1);
    });
  });
});
$(".fullName").validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    adress: {
      required: true,
      minlength: 25,
    },
    quantity: {
      required: true,
      number: true,
      quantity: true,
    },
  },
  messages: {
    name: {
      required: "the name must be required ",
      name: " the name must be three chracters",
    },
    email: {
      required: "The Email must be required ",
      email: "enter a valid email adress",
    },
    adress: {
      required: "adress to btaoo",
      adress: "adress must 25 words or more",
    },
    quantity: {
      required: "quantity to btaoo",
      quantity: "quantity to btaoo",
    },
  },
});
function notification() {
  if (
    document.getElementById("name").value.length >= 3 &&
    document.getElementById("email").value.includes("@") &&
    document.getElementById("adress").value.length >= 25
  ) {
    alert("your order is in process");
  } else {
    $(".fullName").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        email: {
          required: true,
          email: true,
        },
        adress: {
          required: true,
          minlength: 25,
        },
        quantity: {
          required: true,
          number: true,
          min_number: 2,
        },
      },
      messages: {
        name: {
          required: "the name must be required ",
          name: " the name must be three chracters",
        },
        email: {
          required: "The Email must be required ",
          email: "enter a valid email adress",
        },
        adress: {
          required: "adress to btaoo",
          adress: "adress must 25 words or more",
        },
        quantity: {
          required: "quantity to btaoo",
        },
      },
    });
  }
}
