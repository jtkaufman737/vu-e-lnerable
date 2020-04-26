<template>
  <div id="app">
    <div id="nav">
      <router-link class="links" to="/home">Home</router-link>|
      <!-- <router-link class="links" to="/weatherhome">Weather Home</router-link>|
      <router-link class="links" to="/weather">Weather Secure</router-link>|
      <router-link class="links" to="/login">Login Secure</router-link> |
      <router-link class="links" to="/logini">Login Insecure</router-link>|
      <router-link class="links" to="/fileDownloadHome">Code Download Home</router-link>|
      <router-link class="links" to="/fileDownload">Code Download Secure</router-link>|
      <router-link class="links" to="/fileDownloadi">Code Download Insecure</router-link> -->
      <router-link class="links" to="/hardcode">Hardcoded Creds Home</router-link>|
      <router-link class="links" to="/hardcodei">Hardcoded Creds Weakness</router-link>|
      <router-link class="links" to="/hardcodes">Hardcoded Creds Mitigation</router-link>|
      <router-link class="links" to="/encrypt">Missing Encryption Home</router-link>|
      <router-link class="links" to="/encrypti">Missing Encryption Weakness</router-link>|
      <router-link class="links" to="/encrypts">Missing Encryption Mitigation</router-link>

      <br/><br/>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h1,h2,h3,h4,h5,h6  {
  font-family: 'Lobster', cursive;
  color:#047bbf;
}

button {
  color:white;
  background-color:#047bbf !important;
  padding: .5rem 1rem .5rem 1rem !important;
  text-transform:uppercase;
  font-size:1rem;
}

p, li, a {
  font-family: 'Baloo Thambi 2', cursive;
}

p, span {
  margin:2rem;
}

p::after {
  margin:10px !important;
}

.links {
  text-transform:uppercase;
  color:black;
  padding:10px;
}

body {
  margin: 0px !important;
}

div#nav {
  width:100%;
  float:right;
  padding-left:3rem;
}

div#nav::after {
  margin:5rem;
}

div#app {
  height:100vh;
  width:100vw;
  margin:0px !important;
}

h1 {
  font-size:3rem !important;
}

h6 {
  font-size:2rem !important;
}
</style>
