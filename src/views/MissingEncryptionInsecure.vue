<template>
  <div id="missingEncryptionInsecure">
    <h1>Missing Encryption (Insecure)</h1>
    <p>The CWE site uses an example of storing a session cookie of a users username and password to enable them to remain logged in
      if they had previously been logged in and return to the site.</p>
    <p>In websites like this, the two options I generally use for persisting data are sessionStorage and localStorage, which are
      data stores provided natively to the browser. This type of credentials could also be stored in a cookie, which you can read
      more about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie">here</a>.
    </p>
    <p>
      I'm going to stick with sessionStorage and localStorage because of ease of use. If you are curious what the difference is,
      sessionStorage is cleared when a browser tab is closed, and localStorage is not cleared until the entire browser cache is
      cleared. Because this is a password for a secure website, if this were real life I'd probably be using sessionStorage because
      of its more temporary nature.
    </p>
    <p>
      The application logic in JavaScript for setting sessionStorage is pretty simple. Upon login, it could be done with
      the code below:
      <pre>
        sessionStorage.setItem('password','abc123')
        sessionStorage.setItem('username', 'jtkaufman12345353')
      </pre>
    You can test it by opening the console in your browser and entering those commands.
    </p>
    <center>
        <img src='../assets/sessionStorageOne.png'/>
    </center>
    <p>Unfortunately if this is a shared computer and someone else comes along, even if the page is reloaded or they navigate away
      from a login page or area where these values were created, they could easily access them by simply typing `sessionStorage` into
      the browser console.
    </p>
    <center>
        <img src='../assets/sessionStorageTwo.png'/>
    </center>
    <p>
      You can see how simple it would be for someone with bad intentions to grab this information. To see a better alternative, navigate
      to the "secure" nav option for encryption of sensitive information.
    </p>
  </div>
</template>

<script>
export default {
  name: 'missingEncryptionInsecure',
  data() {
    return {
    }
  },
  methods: {
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

div#missingEncryptionInsecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
