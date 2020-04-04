<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login Secure</router-link> |
      <router-link to="/weather">Weather Secure</router-link>|
      <router-link to="/logini">Login Insecure</router-link> |
      <router-link to="/weatheri">Weather Insecure</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h1,h2,h3,h4,h5,h6, label {
  font-family: 'Righteous', cursive;
  color:#047bbf;
}

p, li {
  font-family: 'Gotu', sans-serif;
}
</style>
