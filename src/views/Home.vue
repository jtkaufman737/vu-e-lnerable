<template>
  <div id="home">
    <h1>Welcome to Vu(e)lnerable</h1>
    <p> This site was created to track the <a href="">MITRE Common Weakness Enumeration Top 25 Software Vulnerabilities list</a>.</p>
    <p> In each of the examples, an insecure example is provided to demonstrate one of the weaknesses from the list, with an explanation. A follow-up
      example is also generated to show a mitigation technique that could turn the weakness from becoming a vulnerability that a bad actor could take
      advantage of.</p>
    <p> The site is written with Vue.js, and hosted on Netlify</p>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
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

div#home {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
