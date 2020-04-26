<template>
  <div id="missingEncryptionSecure">
    <h1>Missing Encryption (Secure Alternative)</h1>
    <p>On a previous page, you will have seen how easy it would be for someone to grab a non encrypted set of credentials
      stored in a cookie or in sessionStorage or localStorage.</p>
    <p>To demonstrate an easy and more secure alternative to what you saw in the vulnerable implementation, we are going
      to build one something we used in mitigating another weakness this week: the .env file.
    </p>
    <p> In the .env file, we are going to use a key to encrypt our information. Then we are going to use that key to
      encrypt the values stored in sessionStorage. In .env we do this like so:
      <pre>
        VUE_APP_KEY= ...
      </pre>
     In our example today we are going to use a javascript library called <a href="https://www.npmjs.com/package/crypto-js">Crypto JS</a>
     which is going to allow us to create a user defined key with which to encrypt our credentials. We are also not hardcoding the key,
     and are instead grabbing that from a .env file (see mitigation of previous vulnerability!). The key came from a random key generation
     website, found <a href="https://randomkeygen.com/">here</a>.
   </p>
  <p>
     When setting the sessionStorage values, a javascript implementation with encryption would look like:
     <pre>
       sessionStorage.setItem('username', CryptoJS.AES.encrypt(username, process.env.VUE_APP_KEY))
       sessionStorage.setItem('password', CryptoJS.AES.encrypt(password, process.env.VUE_APP_KEY))
     </pre>
     This works on the assumption that the server that would receive this cached credentials would ALSO have a .env
     file from which it could pull the key. The server could then decode the values from sessionStorage like so (example is a JS implementation):
     <pre>
       const password = CryptoJS.AES.decrypt(username, process.env.APP_KEY)
       const username = CryptoJS.AES.decrypt(password, process.env.APP_KEY)
    </pre>
  </p>
  <p>Now lets take a look at the sessionStorage of our more secure implementation.
    <br/><br/>
    <center>
      <img src="../assets/encryptedCachedInfo.png"/>
    </center>
  </p><br/><br/>
  These changes were really applied using the library discussed above, so you can type sessionStorage into the console to
  see the same credentials from the insecure implementation in sessionStorage, in their encrypted form. 
  </div>
</template>

<script>
var CryptoJS = require('crypto-js');

export default {
  name: 'missingEncryptionSecure',
  mounted() {
    sessionStorage.clear()
    let username= 'jtkaufman12345353', password = 'abc123'
    sessionStorage.setItem('username', CryptoJS.AES.encrypt(username, process.env.VUE_APP_KEY).toString())
    sessionStorage.setItem('password', CryptoJS.AES.encrypt(password, process.env.VUE_APP_KEY).toString())
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

div#missingEncryptionSecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
