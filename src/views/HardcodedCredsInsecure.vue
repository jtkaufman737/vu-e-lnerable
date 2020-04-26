<template>
  <div id="hardcodedCredsInsecure">
    <h1>Hardcoded Credentials (Insecure)</h1>
    <p>For the insecure version of this demonstration, we are going to see what happens when a user makes an API call with the credentials hardcoded.
      This is a pretty realistic scenario, plenty of times a user submission action might call an API somewhere, either to post data or load data.
    </p>
    <p> To simulate what might happen with hardcoded credentials, click below to begin.</p>
    <br/><br/>
    <center><button @click="callApi()">TALK TO API</button></center><br/><br/><br/>
    <div class="modal" id="noEnvModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        This is an example of an API call whereby credentials are hardcoded into the call.
        <pre>
          axios({
            method: 'post',
            url: 'https://supersecureapi.com',
            data: {
              username: 'admin',
              password: 's3cur3p@55w0rd'
            }
          })
        </pre>
        Not only would this be visible if this code made it into source control, it could also be visible to a bot crawling the web searching the DOM for keywords like
        password, or a human who could use the inspect option of their browser to directly look at the source code.
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
    <p v-if="imagesRevealed">
      The DOM, or document object model, refers to content rendered into the browser. In this case, you can see that using the browsers "inspect" option, I was able
      to manually look up password information.
    </p>
    <center v-if="imagesRevealed">
      <img src='../assets/devtools.png'/>
    </center>
    <p v-if="imagesRevealed">
      But actually, there are also bots that could easily recursively iterate down the DOM and look for keywords like username or password and harvest them from
      multiple websites, without requiring human work past building the program. I've built DOM-scraping appliations in python that could easily have done this,
      I've used tools called Scrapy and Beautiful Soup. So there are both manual and automated ways of taking advantage of hardcoded credential information that
      is left unguarded on the web.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagesRevealed: false
    }
  },
  methods: {
    callApi() {
      document.getElementById('noEnvModal').classList.add('is-active')
    },
    closeModal() {
      document.getElementById('noEnvModal').classList.remove('is-active')
      this.imagesRevealed = true
    }
  },
}
</script>
<style>

div#hardcodedCredsInsecure {
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
  height:460px;
  width:600px;
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
