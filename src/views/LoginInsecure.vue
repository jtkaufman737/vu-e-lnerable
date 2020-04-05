<template>
  <div id="loginInsecure">
    <h1> Login (Insecure)</h1>
    <p> On this page we are going to demonstrate two aspects of code design that can put us at risk for <strong>Inclusion of Functionality From An Untrusted
      Control Sphere</strong>, a Mitre Common Weakness Enumeration (CWE) Top 25 software weaknesses.</p>
    <p>For starters, this page represents bad design in that I am using a foreign library (weather widget) on a page that doesn't use any of that
      functionality! Many modern web applications are component based and can have local component data. There is no reason to have a widget defined
      in such a way that it is registered application wide, unless it will be used throughout many components. Part of the example from mitre (recounted
      on the home page) could be avoided in an app like this one by keeping the login page separate from the external widget. User information and
      weather aren't related, so there really is no reason for that data to be comingled anyway.
    </p>
    <br/>
      <div class="block">
        <center><h6> Login</h6></center><br/>
        <label>Username:</label>
        <input v-model="username"/><br/>
        <label>Password: </label>
        <input type="password" v-model="password"/><br/><br/>
        <button @click="processCredentials">Login</button>
      </div>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          Oh no! Your credentials were grabbed on login by this malicious package.
          Check out the api call results below:
          <pre>
            {{ this.apiCallResult }}
          </pre>
          This could have been prevented by auditing our packages and using local data to limit the
          surface area that external dependencies have access to. Another good life lesson as a developer
          is to never get complacent about external dependencies. Do you really need them? Can they be contained or
          should they be application wide?<br/><br/>
          One fun note about this: Under assets/weatherWidget.js it is left commented out, but I did mock up a valid
          API call using the Axios package that could have posted these credentials to an external site! They were
          commented out because apparently that site name, picked at random, IS real and we received CORS errors because
          my site is not whitelisted to POST data to them.
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
      </div>
  </div>
</template>

<script>
import weatherWidget from '@/assets/weatherWidget'

export default {
  name: 'Logini',
  data() {
    return {
      auditRun: false,
      username:null,
      password:null,
      apiCallResult: null
    }
  },
  methods: {
    processCredentials() {
      let result = weatherWidget({ username: this.username, password: this.password })
      this.apiCallResult = result
      document.getElementsByClassName('modal')[0].classList.add('is-active')
    },
    closeModal() {
      document.getElementsByClassName('modal')[0].classList.remove('is-active')
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

div#loginInsecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
