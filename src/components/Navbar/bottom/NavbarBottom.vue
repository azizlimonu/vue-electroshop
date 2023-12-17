<template>
  <div class="navbar-bottom">
    <div class="container">
      <div class="pages-links">
        <div class="menu">
          <button class="open-menu flex-center" @click="toggleMenu()">
            <i class="fa-sharp fa-solid fa-bars"></i>
          </button>
        </div>

        <div class="links">
          <ul class="home-ul">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/catalog">CATALOG</router-link></li>
            <li><router-link to="/contact">CONTACT</router-link></li>
            <li><router-link to="/blog">BLOG</router-link></li>
            <li><router-link to="/my-cart">CART</router-link></li>
            <li>
              <router-link to="/compare" class="hide-link">
                COMPARE
              </router-link>
            </li>
            <li>
              <router-link to="/wishlist" class="hide-link">
                WISHLIST
              </router-link>
            </li>
          </ul>

          <!-- responsive menu -->
          <div class="menu-links">
            <!-- Bind class overlay with add show -->
            <div
              :class="['overlay', isMenuOpen ? 'show' : '']"
              @click="toggleMenu()"
            ></div>

            <div
              :class="[
                'home-links',
                'd-flex',
                'flex-column',
                isMenuOpen ? 'show' : '',
              ]"
            >
              <ul style="flex: 1">
                <div class="header">
                  <div class="img">
                    <img src="../../../assets/logo.webp" alt="Logo!" />
                  </div>
                  <span class="close-menu" @click="toggleMenu()">
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </div>
                <li>
                  <router-link @click="toggleMenu()" to="/"> HOME </router-link>
                </li>
                <li>
                  <router-link @click="toggleMenu()" to="/catalog">
                    CATALOG
                  </router-link>
                </li>
                <li>
                  <router-link @click="toggleMenu()" to="/contact">
                    CONTACT
                  </router-link>
                </li>
                <li>
                  <router-link @click="toggleMenu()" to="/blog">
                    BLOG
                  </router-link>
                </li>
                <li>
                  <router-link @click="toggleMenu()" to="/my-cart">
                    CART ({{ store.state.cartTotal }})
                  </router-link>
                </li>
                <li>
                  <router-link
                    @click="toggleMenu()"
                    to="/compare"
                    class="hide-link"
                  >
                    COMPARE ({{ store.state.compareTotal }})
                  </router-link>
                </li>
                <li>
                  <router-link
                    @click="toggleMenu()"
                    to="/wishlist"
                    class="hide-link"
                  >
                    WISHLIST ({{ store.state.favTotal }})
                  </router-link>
                </li>
              </ul>
              <div
                class="contact-me"
                style="background-color: #223040; color: white"
              >
                <a href="https://www.facebook.com" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://github.com" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="/" target="_blank">
                  <i class="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/contact" class="need-help">
          Need Help? (+62) 812-3456-7890
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const location = useRoute()
const store = useStore()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
.navbar-bottom {
  background-color: var(--bg-color);

  .container {
    @media (max-width: 768px) {
      max-width: 100%;
      padding: 0;
    }

    @media (max-width: 420px) {
      max-width: 100%;
    }

    .pages-links {
      display: flex;
      justify-content: flex-end;
      padding: 10px 16px;
      width: 100%;
      margin-left: auto;

      @media (max-width: 1199px) {
        width: 100%;
        padding: 10px 0;
      }

      @media (max-width: 767px) {
        width: 100%;
        padding: 10px 14px;
      }

      .menu {
        font-size: 19px;
        color: white;

        @media (min-width: 991px) {
          display: none;
        }

        @media (max-width: 991px) {
          flex: 1;
          justify-content: start;
        }
      }

      .links {
        a {
          font-weight: 500;
        }

        @media (min-width: 991px) {
          flex: 1;

          ul {
            display: flex;
            color: white;

            img {
              display: none;
            }

            span {
              display: none;
            }

            @media (max-width: 1199px) {
              & li:nth-child(2) {
                margin-left: 0;
              }
            }

            & li:first-child {
              margin-left: 2px;
            }

            li {
              padding: 10px 0;
              margin: 0 20px;

              a {
                font-weight: 500;

                &:hover {
                  color: var(--yellow);
                  cursor: pointer;
                }
              }
            }

            .hide-link {
              display: none;
            }
          }
        }

        @media (max-width: 991px) {
          .home-ul {
            display: none;
          }
        }

        .menu-links {
          .overlay {
            position: relative;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.603);
            z-index: -1;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: 0.3s;

            &.show {
              position: fixed;
              opacity: 1;
              z-index: 999999999999;
            }
          }

          .home-links {
            position: fixed;
            background-color: white;
            height: 100%;
            z-index: 99999999999;
            left: 0;
            top: 0;
            transition: 0.3s ease-in-out;
            transform: translateX(-100%);
            width: 40%;

            &.show {
              transform: translateX(0);
            }

            ul {
              .header {
                background-color: var(--bg-color);
                margin-bottom: 25px;
                width: 100%;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .img {
                  width: 150px;

                  img {
                    max-width: 100%;
                  }
                }

                span {
                  font-size: 15px;
                }
              }

              li {
                margin: 15px 10px;

                a {
                  color: var(--bg-color);
                  font-weight: 500;
                }
              }
            }

            @media (max-width: 576px) {
              width: 70%;
            }

            .close-menu {
              cursor: pointer;
              color: white;
              display: flex;

              i {
                font-size: 18px;
                pointer-events: none;
              }
            }
          }

          @media (min-width: 991px) {
            display: none;
          }
        }
      }

      .need-help,
      .open-menu {
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        display: flex;
        justify-content: end;
        align-items: center;
        transition: 0.3s;
        padding: 0;

        &:hover {
          color: var(--yellow);
        }
      }

      @media (max-width: 420px) {
        .need-help {
          font-size: 13.5px;
        }
      }
    }

    .contact-me {
      padding: 5px 10px;

      a {
        font-size: 20px;
        margin-right: 15px;

        &:hover {
          color: #fdda06;
        }
      }
    }
  }
}
</style>
