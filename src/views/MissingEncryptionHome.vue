<template>
  <div id="missingEncryptionHome">
    <h1>Missing Encryption (Home)</h1>
    <p> This site was created to track the <a href="">MITRE Common Weakness Enumeration Top 25 Software Vulnerabilities list</a>.</p>
    <p> The second vulnerability I am covering today is <a href="https://cwe.mitre.org/data/definitions/311.html">CWE #311</a>, failure to
      encrypt sensitive data.
    </p>
    <p>To see an example of an insecure tranfer of information that would count as vulnerability #311 navigate to the Missing Encryption Weakness option
      in the nav bar</p>
  </div>
</template>
<script>
export default {
  name: 'MissingEncryptionHome',
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

div#missingEncryptionHome {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
