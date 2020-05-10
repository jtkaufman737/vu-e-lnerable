<template>
  <div id="hashInsecure">
    <h1>Hash Insecure</h1>
    <p>Below, go ahead and login and we'll show an example of an entry that might be created using a hash function without salt.
      We will be using the md5 hash option of a node package called crypto-js found <a href="https://www.npmjs.com/package/crypto-js">here</a>.</p>
      <div class="block">
      <label>Username:</label>
      <input v-model="username"/><br/>
      <label>Password: </label>
      <input type="password" v-model="password"/><br/><br/>
      <button @click="processCredentials">Login</button>
    </div>
    <div class="modal" id="hashModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        Password hashed without secret: {{ password }}<br/><br/>
        Although to the human eye that still looks a lot different than your password, without using a complex secret
        it is vulnerable to brute force attacks. To follow the CWE example, this encryption also used MD5 in creating this hash.
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
import CryptoJS from 'crypto-js';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    processCredentials() {
      document.getElementById('hashModal').classList.add('is-active')
      this.password = CryptoJS.MD5(this.password, null)
    },
    closeModal() {
      document.getElementById('hashModal').classList.remove('is-active')
    }
  }
}
</script>
<style>

p {
  margin:1.5rem;
}

pre {
  margin:1rem;
}

div.modal-background {
  width:4000px;
  height:100vh !important;
}

button {
  width:200px;
  height:35px;
  color:white;
  border-radius:7px;
}

div.modal-content {
  height:200px;
  width:200px;
  background-color:white;
  padding:2rem;
}

div.block {
  display:block;
}

label {
  margin:.5rem;
}

input {
  margin:.5rem;
  height:35px;
  width:200px;
}

div.modal-background {
  width:4000px;
  height:100vh !important;
}

div.modal-content {
  height:540px;
  width:900px;
  background-color:white;
  padding:2rem;
}

div.block {
  display:block;
}

div#hashInsecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
