<template>
  <div id="app">
    <div id="nav">
      <router-link class="links" to="/login">Login Secure</router-link> |
      <router-link class="links" to="/weather">Weather Secure</router-link>|
      <router-link class="links" to="/logini">Login Insecure</router-link>
      <br/><br/>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h1,h2,h3,h4,h5,h6, label {
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

p, div, span {
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

div#nav {
  width:100%;
  float:right;
}

div#nav::after {
  margin:5rem;
}

div#app {
  margin:10%;
  height:90vh;
  width:70vw;
  margin:auto;
}

h1 {
  font-size:3rem !important;
}
</style>
