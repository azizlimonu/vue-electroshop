<template>
  <div class="products-swiper">
    <div class="slide-heading">
      <h4>{{ text }}</h4>
      <div class="nav-buttons">
        <button class="products-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="products-next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <Swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="windowWidth > 991 ? 4 : 2"
      :space-between="15"
      :navigation="{ nextEl: '.products-next', prevEl: '.products-prev' }"
    >
      <SwiperSlide v-for="product in products" :key="product.id">
        <div class="card">
          <div class="img-holder flex-center">
            <div class="imgs" style="cursor: pointer">
              <img
                :src="getImageUrl(product.firstImg)"
                class="card-img-top first"
                alt="Product Image"
              />
              <img
                :src="getImageUrl(product.secondImg)"
                class="card-img-top second"
                alt="Product Image"
              />
            </div>
          </div>
          <div class="card-body">
            <span v-if="product.stars === 5" style="color: var(--yellow)">
              <i v-for="e in 5" :key="e" class="fa-solid fa-star"></i>
            </span>
            <span v-else style="color: var(--yellow)">
              <i v-for="e in 4" :key="e" class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star" style="color: grey"></i>
            </span>
            <p class="card-text">
              {{ product.title }}
            </p>
            <div class="price">
              <span style="font-weight: bold">
                {{
                  `$${Math.floor(
                    product.price - (product.price * product.discount) / 100,
                  )}.00 `
                }}</span
              >
              <span class="price-num"> {{ `$${product.price}.00` }}</span>
            </div>
            <div class="buy">
              <button
                @click="addItemToCart(product)"
                type="button"
                class="add-product"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <span class="discount">{{ `-${product.discount}%` }}</span>
          <div class="product-options">
            <div class="fav" @click="toggleFavourite(product)">
              <i v-if="!product.wishlist" class="fa-regular fa-heart"></i>
              <i v-if="product.wishlist" class="fa-solid fa-heart second"></i>
            </div>
            <div class="compare" @click="toggleCompare(product)">
              <i v-if="!product.compare" class="fa-solid fa-arrows-rotate"></i>
              <i v-if="product.compare" class="fa-solid fa-check"></i>
            </div>
            <div class="view">
              <i
                @click="
                  router.push({
                    name: 'product',
                    params: {
                      id: product.id,
                      description: product.description,
                    },
                  })
                "
                class="fa-regular fa-eye"
              >
              </i>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <h2>
                Product Added Successfully to the Cart
                <i class="fa-regular fa-circle-check"></i>
              </h2>
            </div>
            <div class="modal-buttons">
              <router-link class="view-cart" to="/my-cart">
                <button @click="() => closeModalAndNavigate('/my-cart')">
                  VIEW MY CART ({{ store.state.cartTotal }})
                </button>
              </router-link>
              <router-link class="checkout" to="/profile-page">
                <button @click="() => closeModalAndNavigate('/profile-page')">
                  CHECKOUT
                </button>
              </router-link>
            </div>
            <div class="continue">
              <button @click="() => closeModal()">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useStore } from 'vuex'

const modules = [Navigation]
const props = defineProps(['products', 'text'])
// const production = ref(props.products)
// console.log('PRODUCTION', production)

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const store = useStore()

const addItemToCart = (product) => {
  let exists = false
  let index = 0
  for (let i = 0; i < store.state.cart.length; i++) {
    if (store.state.cart[i].id === product.id) {
      exists = true
      index = i
    }
  }
  if (exists) {
    store.state.cart[index].count++
  } else {
    store.state.cart.push(product)
    setCartToLS()
    store.commit('totalCart')
  }
}

const toggleFavourite = (product) => {
  if (product.wishlist) {
    deleteFav(product)
  } else {
    addToFav(product)
  }
  product.wishlist = !product.wishlist
  localStorage.setItem(
    `${product.name}Wishlist_${product.id}`,
    product.wishlist,
  )
}

const setFavToLS = () => {
  localStorage.setItem('fav', JSON.stringify(store.state.fav))
}

const checkFavToLS = () => {
  localStorage.getItem('fav')
    ? (store.state.fav = JSON.parse(localStorage.getItem('fav')))
    : (store.state.fav = [])
}

const addToFav = (product) => {
  if (!store.state.fav.includes(product)) {
    store.state.fav.push(product)
    setFavToLS()
    store.commit('totalFav')
  }
}

const deleteFav = (product) => {
  store.state.fav.splice(store.state.fav.indexOf(product), 1)
  setFavToLS()
  store.commit('totalFav')
}

const toggleCompare = (product) => {
  if (product.compare) {
    store.state.compare.splice(store.state.compare.indexOf(product), 1)
  } else {
    store.state.compare.push(product)
  }
  setCompareToLS()
  store.commit('totalCompare')
  product.compare = !product.compare
  localStorage.setItem(`${product.name}Compare_${product.id}`, product.compare)
}

const setCompareToLS = () => {
  localStorage.setItem('compare', JSON.stringify(store.state.compare))
}

const checkCompareToLS = () => {
  localStorage.getItem('compare')
    ? (store.state.compare = JSON.parse(localStorage.getItem('compare')))
    : (store.state.compare = [])
}

const setCartToLS = () => {
  localStorage.setItem('cart', JSON.stringify(store.state.cart))
}

const checkCartLS = () => {
  localStorage.getItem('cart')
    ? (store.state.cart = JSON.parse(localStorage.getItem('cart')))
    : (store.state.cart = [])
}

const closeModal = () => {
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'))
  modal.hide()
}

const closeModalAndNavigate = (route) => {
  closeModal()
  router.push(route)
}

const getImageUrl = (name) => {
  return new URL(`../../assets/Products/${name}`, import.meta.url).href
}

const productIcons = () => {
  store.state.allProducts.forEach((product) => {
    const wishlist = localStorage.getItem(
      `${product.name}Wishlist_${product.id}`,
    )
    const compare = localStorage.getItem(`${product.name}Compare_${product.id}`)

    if (wishlist !== null) {
      product.wishlist = wishlist === 'true'
    }

    if (compare !== null) {
      product.compare = compare === 'true'
    }
  })
}

// Initialize on component mount
onMounted(() => {
  // Check and Set Cart
  checkCartLS()
  setCartToLS()

  // Check and Set Favourite
  checkFavToLS()
  setFavToLS()

  // Check and Set Compare
  checkCompareToLS()
  setCompareToLS()

  // Check if the Product Icons Checked and set
  productIcons()
  store.commit('getProductStatus')
})
</script>

<style lang="scss" scoped>
.products-swiper {
  margin-top: 80px;
  margin-bottom: 60px;
  color: var(--bg-color);
  > h2 {
    font-size: 22px;
  }
  .slide-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .nav-buttons {
      button {
        font-size: 20px;
        border: none;
        color: #4e4e4e;
        background-color: transparent;
        transition: 0.3s;
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
  .card {
    border: none;
    position: relative;
    .img-holder {
      .first {
        position: absolute;
        transition: 0.5s;
      }
    }
    .card-body {
      .card-text {
        margin: 5px 0;
        font-size: 15px;
      }
      .price {
        margin-bottom: 5px;
        font-size: 18px;
        .price-num {
          text-decoration: line-through;
          color: grey;
          font-size: 15px;
        }
      }
      .buy {
        .add-product {
          color: var(--bg-color);
          border: none;
          font-weight: 500;
          background-color: #e3e3e3;
          padding: 10px;
          border-radius: 6px;
          transition: 0.3s;
          width: 100%;
        }
      }
    }
    .product-options {
      position: absolute;
      right: 0;
      top: 5%;
      opacity: 0;
      transition: 0.3s;
      > div {
        margin-bottom: 12px;
        font-size: 17px;
        color: #2230409e;
        i {
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            color: var(--bg-color);
          }
        }
      }
      .fav {
        cursor: pointer;
        i {
          pointer-events: none;
        }
      }
      .compare {
        cursor: pointer;
        i {
          pointer-events: none;
        }
      }
    }
    .discount {
      position: absolute;
      top: 10px;
      left: 15px;
      color: red;
    }
    &:hover {
      .buy {
        .add-product {
          background-color: var(--yellow);
        }
      }
      .product-options {
        opacity: 1;
        right: 5%;
      }
      .img-holder {
        .first {
          opacity: 0;
        }
      }
    }
  }
  .modal-content {
    .modal-header {
      border-bottom: none;
      padding: 16px;
    }
    .modal-body {
      padding: 0 16px 16px;
      .modal-info {
        h2 {
          margin-bottom: 20px;
          font-size: 18px;
          text-align: center;
          color: green;
        }
      }
      .modal-buttons {
        display: flex;
        justify-content: center;
        a {
          button {
            width: 100%;
            border: none;
            border-radius: 6px;
            padding: 12px 0;
            font-weight: 500;
            letter-spacing: 0.5px;
          }
          &.view-cart {
            flex: 1;
            margin-right: 20px;
            button {
              background-color: #e3e3e3;
            }
          }
          &.checkout {
            flex: 1;
            button {
              background-color: var(--yellow);
            }
          }
        }
      }
      .continue {
        margin-top: 15px;
        button {
          display: block;
          margin: auto;
          border: none;
          background-color: transparent;
          text-decoration: underline;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
