const wrapper = document.querySelector(".slider_wrapper");
const menuitems = document.querySelectorAll(".menu-item");



const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/pngwing.com.png",
      },
      {
        code: "blue",
        img: "img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "gray",
        img: "img/jordan.png",
      },
      {
        code: "red",
        img: "img/pngwing.com.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "white",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Creator",
    price: 129,
    colors: [
      {
        code: "green",
        img: "img/blazer2.png",
      },
      {
        code: "white",
        img: "img/blazer.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/jordan.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDecs = document.querySelector(".productdesc");
const currentproductColor = document.querySelectorAll(".color");
const currentproductSize = document.querySelectorAll(".size");


menuitems.forEach((item, index) => {
  item.addEventListener("click", () => {

    //change the current  slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change  the  choosen product
    choosenProduct = products[index];

    //change the  choosen product text
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentproductColor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

  });
})

//change  the img according to  color 
currentproductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

 //change  the size according to  color 

currentproductSize.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentproductSize.forEach((size)=>{
      size.style.backgroundColor= "white";
      size.style.color  = "black";
    });
    size.style.backgroundColor= "black";
      size.style.color  = "white";
  });
});

//payment
const productButton = document.querySelector(".productBuy");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display = "flex";
})

close.addEventListener("click",()=>{
  payment.style.display="none";
})





