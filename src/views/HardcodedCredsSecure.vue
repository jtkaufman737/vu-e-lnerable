<template>
  <div id="hardcodedCredsSecure">
    <h1>Hardcoded Credentials (Secure Alternative)</h1>
    <p>At a certain point, credentials are generally hardcoded <em>somewhere</em>. So what you can do as a developer to ensure that
    wherever they live, they aren't <strong>exploitable</strong> is by using environment files, and gitignoring them.
    Git is a version control tool that can be connected to repository hosting solutions such as Bitbucket, Github, or Gitlab. Although
    each of those hosting options has private repositories, it can be simpler to never have credentials enter a repository at all.</p>
    <p> How do we do that, you may ask? Through <strong>gitignore</strong>. Gitignore is a very simple but powerful concept. It isn't hard
      to set up either. The only required steps are :
      <ul>
        <li>Create a git repo by running <pre>git init</pre></li>
        <li>Add a file labeled <pre>.gitignore</pre></li>
        <li>Add another file labeled <pre>.env</pre></li>
        <li>In .env, you can define credentials following the format <pre>VAR_NAME=var value</pre></li>
        <li>You can use a package such as <strong>dotenv for npm</strong> in python or node server side code. In Vue,
          to import your environment variables for use in your app you just need to name them VUE_VAR_NAME in your .env file,
          and access them with the format <pre>process.env.VUE_VAR_NAME</pre>
        </li>
      </ul>
      Want to see it in action? Click below to see a random variable loaded from our env file.
   </p>
   <button @click="getEnv()">GET AN ENV VALUE</button>
   <p> If you go to the <a href="https://github.com/jtkaufman737/vu-e-lnerable">repository of this code</a>, you'll notice you don't see the .env file or any sensitive password. This
     is because they were gitignored and won't ever make it to source control on a public website for that reason.</p>
   <div class="modal" id="envModal">
     <div class="modal-background"></div>
     <div class="modal-content">
       Oh look! Some env variable values: {{ varOne }},{{ varTwo }}
       {{ process.env }}
     </div>
     <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
   </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      varOne: process.env.VUE_APP_EXAMPLE_VAR_ONE,
      varTwo: process.env.VUE_APP_EXAMPLE_VAR_TWO
    }
  },
  methods: {
    getEnv() {
      document.getElementById('envModal').classList.add('is-active')
    },
    closeModal() {
      document.getElementById('envModal').classList.remove('is-active')
    }
  },
}
</script>
<style>

div#hardcodedCredsSecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}

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
  width:300px;
}

textarea {
  width:90%;
  height:90%;
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
  height:300px;
  width:400px;
  background-color:white;
  padding:2rem;
}

div.block {
  display:block;
}

div.hardcode {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}

</style>
