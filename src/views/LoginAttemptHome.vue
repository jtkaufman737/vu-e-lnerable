<template>
  <div id="loginAttemptHome">
    <h1>Login Attempts Home</h1>
    <p> The MITRE Common Weakness Enumeration Top 25 Software Vulnerabilities weakness 307 is
      <a href="https://cwe.mitre.org/data/definitions/307.html">Impproper Restriction of Excessive Authentication Attempts</a>.
      This refers to a loophole where repeated failed logins or authentication gates are failed, but no action is taken to prevent
      them from continuing. <a href="https://www.zdnet.com/article/bad-bots-focus-on-financial-targets-make-up-20-percent-of-web-traffic/"
      >Much of web traffic nowadays is bots</a>, so failing to control for this weakness would allow a bot or
      automated brute force attack to cycle through endless passwords until a lucky break might give them improper access through
      guesswork.
    </p>
    <p>Check out the Secure/Insecure versions of login implementations - one will protect against this eventuality and the other
      will not.
    </p>
  </div>
</template>
<script>
export default {

}
</script>
<style>

div#loginAttemptHome {
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
