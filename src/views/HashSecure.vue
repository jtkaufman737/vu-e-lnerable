<template>
  <div id="hashSecure">
    <h1>Hash Secure</h1>
    <p>This time we are going to make a couple of changes to avoid the security risk posed in our Insecure example. We are again going to use
      the crypto-js library found<a href="https://www.npmjs.com/package/crypto-js">here</a>.</p>
    <p>
      In addition to this time using hash salt, as noted towards the end of the MITRE CWE explanation of this vulnerability:
    </p>
    <pre>
      "Note that regardless of the usage of a salt, the md5 hash is no longer considered secure"
    </pre>
    <p>So in addition to adding salt, we will be moving from md5 to SHA, a more secure hashing algorithm described
      <a href="https://www.giac.org/paper/gsec/2853/guide-hash-algorithms/104822">here</a>. To select my secret, I used
      a <a href="https://randomkeygen.com/">random keygen site</a> to generate a 504-bit key.
      .</p>
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
        Password hashed WITH secret: {{ password }}<br/><br/>
        Even though the previous example might have masked your password to the human eye, without hash salt it was more vulnerable to
        brute force attacks that might break the encryption. In this example, we used a salt ({{ salt }}) and a more secure standard
        than MD5, SHA.
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
      salt: "s]=}B)>_a9E'AAu~V7~VtYx~;oEIX!~2Y:iMRpO*K8k{99d*[c2SXP{R'6\"l[a:",
      username: '',
      password: ''
    }
  },
  methods: {
    processCredentials() {
      document.getElementById('hashModal').classList.add('is-active')
      this.password = CryptoJS.SHA1(this.password, this.salt)
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

div#hashSecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
