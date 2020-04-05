<template>
  <div id="codeDownloadInsecure">
    <h1>File Download Without Integrity Check: Insecure</h1>
    <p> Please upload your db configuration</p>
    <label>URL upload:</label>
    <input v-model="url" type="Text"/>
    <br/><br/>
    <button @click="submit">SUBMIT</button>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        {{ this.selectedOutcome }}
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
      outcomes: [
        `Oh no! This site had a redirect to an untrusted code base. Now we need to tell anyone who logged in using the site that they are at
        risk of breach, release a PR statement, and look at mitigation techniques. Fixing this will be costly and embarrassing`,
        `Oh no! A hacker uploaded a line in the config that dropped several tables from our databases upon the first user login after their changes`,
        `Oh no...An executable was added that crashed all of our systems, and we have received a Denial of Service ransom request...now we either need
        to pay it or find a fix ourselves to the catastrophic damage caused...`,
        `Oh no...there was a human error in this config change, and because we didn't perform verification the login has been broken all day. This puts
        us in violation of our Service Level Agreements for several paying customers, and there is now a huge mess on our hands`
      ],
      selectedOutcome: null,
      url: null
    }
  },
  methods: {
    submit() {
      this.selectedOutcome = this.outcomes[Math.floor(Math.random() * this.outcomes.length)];
      document.getElementsByClassName('modal')[0].classList.add('is-active')
    },
    closeModal() {
      document.getElementsByClassName('modal')[0].classList.remove('is-active')
    }
  }
}
</script>
<style>
div#codeDownloadInsecure {
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
