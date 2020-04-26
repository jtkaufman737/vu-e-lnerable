<template>
  <div id="codeSecure">
    <h1>File Download Without Integrity Check (Secure)</h1>
    <p> Please upload your db configuration</p>
    <label>Config upload:</label><br/>
    <textarea v-model="config"></textarea>
    <br/><br/>
    <button @click="submit">SUBMIT</button>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        {{ this.message }}
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FileDownloadInsecure',
  data() {
    return {
      config: null,
      message: 'Success! Config uploaded. You may now use the app with its new database configuration.',
    }
  },
  methods: {
    async submit() {
      // ban list of SQL commands
      const banned = ['drop','delete','grant','select *']
      // allow list of database hosting domains
      const allowedDbHosts = 'https://vu-e-lnerable.netlify.com/'
      // allow list of tables
      const allowedTables = 'users'

      for(let ban of banned) {
        if(this.config.toLowerCase().includes(ban)) {
          this.message = 'ERROR - Banned SQL operation. \n\n'
        }
      }

      // validation logic for pass/fail criteria
      if(!this.config.includes(allowedTables) || !this.config.includes(allowedDbHosts)) {
        if(this.message.toLowerCase().includes('success')) {
          this.message = 'ERROR - This config is missing an approved host or destination table.\n\n'
        } else {
          this.message = this.message + 'ERROR - This config is missing an approved host or destination table.\n\n'
        }
      }

      if(!this.message.toLowerCase().includes('success')) {
        this.message += ' Be warned that after three flagged attempts to upload database configurations that violate policy, this account will be suspended and reported.'
      }

      document.getElementsByClassName('modal')[0].classList.add('is-active')
    },
    closeModal() {
      document.getElementsByClassName('modal')[0].classList.remove('is-active')
    }
  }
}
</script>
<style>
div#codeSecure {
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

div#loginInsecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
