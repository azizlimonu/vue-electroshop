import { createStore } from "vuex";

export default createStore({
  state: {
    allProducts: [
      // Start Featured Products
      {
        id: 1,
        firstImg: "products-16.png",
        secondImg: "products-28.png",
        title: "Analog Watch ",
        price: 200,
        discount: 25,
        stars: 5,
        description: "Analog Watch Leather Strap For Men - Black",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 2,
        firstImg: "products-20.png",
        secondImg: "products-21.png",
        title: "Apple MacBook Pro",
        price: 200,
        discount: 12,
        stars: 4,
        description: "Samsung Galaxy Tab Wi-Fi+5G Tablet",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 3,
        firstImg: "products-11.png",
        secondImg: "products-1.png",
        title: "IPhone12 ProMax",
        price: 390,
        discount: 5,
        stars: 5,
        description: "New Apple iPhone 12 Pro Max Gold",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 4,
        firstImg: "products-6.png",
        secondImg: "products-5.png",
        title: "Sony Speaker",
        price: 60,
        discount: 16,
        stars: 5,
        description: "Latest Sony Portable Wireless Speaker",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 5,
        firstImg: "products-14.png",
        secondImg: "products-8.png",
        title: "Beats Headphones ",
        price: 200,
        discount: 15,
        stars: 5,
        description: "Beats Solo3 Wireless Headphones Beats",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 6,
        firstImg: "products-9.png",
        secondImg: "products-4.png",
        title: "XBox Controllers",
        price: 120,
        discount: 20,
        stars: 5,
        description: "Zexrow Xbox 360 Controller, USB Wired Gamepad",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 7,
        firstImg: "products-7.png",
        secondImg: "products-10.png",
        title: "Wireless Mouse ",
        price: 90,
        discount: 15,
        stars: 4,
        description: "Portable Optical Mouse Wireless USB",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      {
        id: 8,
        firstImg: "products-3.png",
        secondImg: "products-2.png",
        title: "Apple MacBook Pro",
        price: 200,
        discount: 12,
        stars: 4,
        description: "Samsung Galaxy Tab Wi-Fi+5G Tablet",
        count: 1,
        wishlist: false,
        compare: false,
        name: "featured",
      },
      // End Featured Products
      // Start Latest Products
      {
        id: 9,
        firstImg: "products-24.png",
        secondImg: "products-25.png",
        title: "Mobile Stick",
        price: 200,
        discount: 12,
        stars: 4,
        description: "Mobile Stick for Videos - top brands",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 10,
        firstImg: "products-30.png",
        secondImg: "products-31.png",
        title: "REDMAGIC 8 Pro",
        price: 390,
        discount: 5,
        stars: 5,
        description: "REDMAGIC 8 Pro Smartphone 5G Matte Black",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 11,
        firstImg: "products-7.png",
        secondImg: "products-10.png",
        title: "Wireless Mouse ",
        price: 90,
        discount: 15,
        stars: 4,
        description: "Portable Optical Mouse Wireless USB",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 12,
        firstImg: "products-8.png",
        secondImg: "products-14.png",
        title: "Beats Headphones ",
        price: 200,
        discount: 15,
        stars: 5,
        description: "Beats Solo3 Wireless Headphones Beats",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 13,
        firstImg: "products-16.png",
        secondImg: "products-28.png",
        title: "Rolex watch ",
        price: 250,
        discount: 30,
        stars: 4,
        description: "French Connection Unisex smartwatch",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 14,
        firstImg: "products-9.png",
        secondImg: "products-4.png",
        title: "XBox Controllers",
        price: 120,
        discount: 20,
        stars: 5,
        description: "Zexrow Xbox 360 Controller, USB Wired Gamepad",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 15,
        firstImg: "products-6.png",
        secondImg: "products-5.png",
        title: "Sony Speaker",
        price: 60,
        discount: 16,
        stars: 5,
        description: "Latest Sony Portable Wireless Speaker",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      {
        id: 16,
        firstImg: "products-22.png",
        secondImg: "products-23.png",
        title: "Mini Speaker ",
        price: 200,
        discount: 25,
        stars: 5,
        description: "Bucket Size chargable speaker",
        count: 1,
        wishlist: false,
        compare: false,
        name: "latest",
      },
      // End Latest Products
      // Start Popular Products
      {
        id: 17,
        firstImg: "products-11.png",
        secondImg: "products-1.png",
        title: "IPhone12 ProMax",
        price: 390,
        discount: 5,
        stars: 5,
        description: "New Apple iPhone 12 Pro Max Gold",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 18,
        firstImg: "products-26.png",
        secondImg: "products-27.png",
        title: "Android Controller",
        price: 200,
        discount: 12,
        stars: 4,
        description: "Mobile Phone Gaming Controller Wireless Android",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 19,
        firstImg: "products-14.png",
        secondImg: "products-8.png",
        title: "Beats Headphones ",
        price: 200,
        discount: 15,
        stars: 5,
        description: "Beats Solo3 Wireless Headphones Beats",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 20,
        firstImg: "products-32.png",
        secondImg: "products-33.png",
        title: "XBox Controllers ",
        price: 90,
        discount: 15,
        stars: 4,
        description: "Zexrow Xbox 360 Controller, USB Wired Gamepad",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 21,
        firstImg: "products-6.png",
        secondImg: "products-5.png",
        title: "Party Speaker",
        price: 60,
        discount: 16,
        stars: 5,
        description: "Loud Party High Volume Speaker",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 22,
        firstImg: "products-28.png",
        secondImg: "products-15.png",
        title: "Rolex watch ",
        price: 250,
        discount: 30,
        stars: 4,
        description: "French Connection Unisex smartwatch",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 23,
        firstImg: "products-20.png",
        secondImg: "products-21.png",
        title: "Apple Macbook ",
        price: 200,
        discount: 25,
        stars: 5,
        description: "Apple Macbook fold keyboard",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      {
        id: 24,
        firstImg: "products-4.png",
        secondImg: "products-9.png",
        thirdImg: "products-5.png",
        fourthImg: "products-11.png",
        fifthImg: "products-10.png",
        sixthImg: "products-13.png",
        title: "SteelSeries Stratus+",
        price: 120,
        discount: 20,
        stars: 5,
        description:
          "SteelSeries Stratus+ Bluetooth Gaming controller for Android & Windows",
        count: 1,
        wishlist: false,
        compare: false,
        name: "popular",
      },
      // End Popular Products
    ],
    popularProducts: [],
    latestProducts: [],
    featuredProducts: [],
    ourBlog: [
      {
        id: 1,
        name: "Security Priority",
        img: "blog-1.png",
        date: "05 MAY, 2023",
        title: "Security Must Be Top Priority in Bringing...",
        description:
          "Sed mauris Pellentesque elit Aliquam at lacus interdum...",
        header:
          "Security Must be top priority in bringing critical insfrastructure online",
      },
      {
        id: 2,
        name: "Remote Collaboration",
        img: "blog-2.png",
        date: "12 NOV, 2023",
        title: "Remote Collaboration, Digital Twins...",
        description: "Turpis at eleifend ps mi elit Aenean porta ac sed...",
        header:
          "There’s another wireless technology choice for IoT long-range applications",
      },
      {
        id: 3,
        name: "Our Kit Closeup",
        img: "blog-3.png",
        date: "10 NOV, 2023",
        title: "Our Kit Close-up video series highlights...",
        description: "Donec tellus Nulla lorem Nullam elit id ut elit...",
        header:
          "Our Kit Close-up video series highlights some of the latest development",
      },
      {
        id: 4,
        name: "Wireless Technologies",
        img: "blog-4.png",
        date: "27 NOV, 2023",
        title: "There’s another wireless technology...",
        description: "long-range applications There's another wireless...",
        header:
          "There’s another wireless technology choice for IoT long-range applications",
      },
      {
        id: 5,
        name: "Complexities of Electronics",
        img: "blog-5.png",
        date: "04 DEC, 2023",
        title: "The Complexities of Electronic Design...",
        description: "Mi vitae magnis Fusce laoreet nibh felis porttitor...",
        header: "The Complexities of Electronic Design and Scheduling",
      },
      {
        id: 6,
        name: "Embedded Forecast",
        img: "blog-6.png",
        date: "18 DEC, 2023",
        title: "Embedded Forecast, Suspect Software...",
        description: "Mi vitae magnis Fusce laoreet nibh felis porttitor...",
        header: "Embedded Forecast Better Hardware, Suspect Software",
      },
    ],

    // Cart , Compare , Favourite Products And Total Count
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    cartTotal: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0,

    fav: localStorage.getItem("fav")
      ? JSON.parse(localStorage.getItem("fav"))
      : [],
    favTotal: localStorage.getItem("fav")
      ? JSON.parse(localStorage.getItem("fav")).length
      : 0,

    compare: localStorage.getItem("compare")
      ? JSON.parse(localStorage.getItem("compare"))
      : [],
    compareTotal: localStorage.getItem("compare")
      ? JSON.parse(localStorage.getItem("compare")).length
      : 0,

    wishlistAndCompare: localStorage.getItem("ProductStatus")
      ? JSON.parse(localStorage.getItem("ProductStatus"))
      : [],
  },

  mutations: {
    totalCart(state) {
      state.cartTotal = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")).length
        : 0;
      state.cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    },
    getProductStatus(state) {
      state.wishlistAndCompare = localStorage.getItem("ProductStatus")
        ? JSON.parse(localStorage.getItem("ProductStatus"))
        : [];
    },
    totalFav(state) {
      state.favTotal = localStorage.getItem("fav")
        ? JSON.parse(localStorage.getItem("fav")).length
        : 0;
      state.fav = localStorage.getItem("fav")
        ? JSON.parse(localStorage.getItem("fav"))
        : [];
    },
    totalCompare(state) {
      state.compareTotal = localStorage.getItem("compare")
        ? JSON.parse(localStorage.getItem("compare")).length
        : 0;
      state.compare = localStorage.getItem("compare")
        ? JSON.parse(localStorage.getItem("compare"))
        : [];
    },
    getPopularProducts(state) {
      state.popularProducts = state.allProducts.filter((e) => {
        return e.name == "popular";
      });
      state.latestProducts = state.allProducts.filter((e) => {
        return e.name == "latest";
      });
      state.featuredProducts = state.allProducts.filter((e) => {
        return e.name == "featured";
      });
    },
  },
});