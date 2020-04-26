<template>
  <div class="hardcode">
    <h1>Hardcoded Credentials (Home)</h1>
    <p> Hardcoded credentials refer to sensitive information such as usernames, logins, passwords, or API secrets or other keys
      that instead of being dynamically supplied or stored securely, are written as plain text into your application.</p>
    <p> This is the Mitre <a href="https://cwe.mitre.org/top25/archive/2019/2019_cwe_top25.html">Common Weakness Enumeration</a> (CWE) <a href="https://cwe.mitre.org/data/definitions/798.html">vulnerability #798</a>, in the category <strong>Porous Defenses</strong></p>
    <p> The issue presented by having plain text passwords floating around the internet probably seems pretty obvious, but the straightforward
      vulnerability exposable to humans may be compounded by the fact that webcrawlers are now easy to mass produce and could enable a person to
      almost effortlessly troll the web collection hardcoded credentials and using them maliciously.
    </p>
    <p>
      Check out the insecure hardcoded credentials in the menu and after that take a look at a more secure option.</p>
  </div>
</template>
<script>
export default {

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

div.hardcode {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
