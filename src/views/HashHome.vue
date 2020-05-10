<template>
  <div id="hashHome">
    <h1>Hash Home</h1>
    <p> In the MITRE Common Weakness Enumeration Top 25 Software Vulnerabilities number 759 is <strong><a href="https://cwe.mitre.org/data/definitions/759.html">Use of One-Way Hash
      Without a Salt</a></strong>. This refers to the process of hashing input, a cryptographic method of disguising it,
      without using a specific secret to "salt" the hash.
    </p>
    <p>Using brute force or <a href="https://www.geeksforgeeks.org/understanding-rainbow-table-attack/">rainbow tables</a> a user with enough compute power can still crack a hash, even if there is a
      salt value supplied, but it makes it more time consuming.
    </p>
    <p>The MITRE website supplied this example:</p>
    <pre><code>{{ code }}</code></pre>
    <p>Today we are going to show an alternate JavaScript implementation of the below vulnerable behavior, along with an example
      of how we would sidestep walking into this security issue. Checkout the <strong>Hash Secure</strong> and <strong>Hash Insecure</strong>
      tabs for more.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code:`
      def storePassword(userName,Password):
        hasher = hashlib.new('md5')
        hasher.update(Password)
        hashedPassword = hasher.digest()

        # UpdateUserLogin returns True on success, False otherwise
        return updateUserLogin(userName,hashedPassword)`
    }
  }
}
</script>
<style>


div#hashHome {
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
