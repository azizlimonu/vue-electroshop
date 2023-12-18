<template>
  <div class="contact">
    <h2>Share your thoughts with us.</h2>
    <div class="contact-form row">
      <div class="form col-md-6">
        <h4>Contact Us</h4>
        <form>
          <div class="form-floating">
            <input
              v-model="name"
              class="form-control"
              type="text"
              placeholder=" "
              required
            />
            <label>Name</label>
          </div>
          <div class="form-floating">
            <input
              v-model="email"
              class="form-control"
              type="email"
              placeholder=" "
              required
            />
            <label>Email</label>
          </div>
          <div class="form-floating">
            <input
              v-model="phoneNumber"
              class="form-control"
              type="number"
              placeholder=" "
              required
            />
            <label>Phone Number</label>
          </div>
          <div class="form-floating">
            <textarea
              v-model="comment"
              class="form-control"
              type="number"
              placeholder=" "
              required
            ></textarea>
            <label>Comment</label>
          </div>
          <button @click.prevent="submitForm">SEND</button>
        </form>
      </div>
      <div class="location col-md-6">
        <h4>Get in touch with us</h4>
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>33 New Montgomery St. Ste 750 San
            Francisco, CA, USA 94105
          </li>
          <li><i class="fa-solid fa-phone"></i>(+62) 812-3456-7890</li>
          <li><i class="fa-solid fa-envelope"></i>Azizlimonu@gmail.com</li>
          <li><i class="fa-solid fa-clock"></i>24 / 7 Active</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phoneNumber = ref('')
const comment = ref('')

const submitForm = () => {
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    comment: comment.value,
  })
}
</script>

<style lang="scss" scoped>
.contact {
  flex: 1;
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    & {
      width: 100%;
      padding: 30px 0;
    }
  }
  h2 {
    font-size: 20px;
  }
  .contact-form {
    padding-top: 40px;
    h4 {
      margin-bottom: 25px;
    }
    .form {
      .form-floating {
        .form-control {
          height: 44px;
          margin-bottom: 25px;
          &:focus {
            border-color: #ced4da;
            box-shadow: none;
          }
        }
        label {
          color: grey;
          padding: 10px;
        }
      }
      button {
        border: none;
        background-color: var(--yellow);
        padding: 10px 25px;
        border-radius: 6px;
        font-weight: 500;
      }
    }
    .location {
      padding-left: 60px;
      ul {
        li {
          margin-bottom: 25px;
          i {
            margin-right: 15px;
          }
        }
      }
      @media (max-width: 767px) {
        padding-top: 40px;
        padding-left: 12px;
      }
    }
  }
  @media (max-width: 767px) {
    & .container {
      max-width: 100%;
    }
  }
  @media (max-width: 1199px) {
    & {
      .container {
        flex-direction: column-reverse;
        padding: 0 12px;
      }
    }
  }
}
</style>
