<template>
  <div id="loginSecure">
    <h1>Login (Secure)</h1>
    <p> On this page we are going to demonstrate two aspects of code design that can put us at risk for <strong>Inclusion of Functionality From An Untrusted
      Control Sphere</strong>, a Mitre Common Weakness Enumeration (CWE) Top 25 software weaknesses.</p>
    <p>For starters, a login page and weather page aren't related! For that reason, each can have local component data and prevent leakage of data to areas
      where it isn't needed and could be grabbed by a malicious package.
    </p>
    <p> Another tool available to us to evaluate the trustworthiness of external code is that in many languages (gems for Ruby, PyPI for Python, NuGET for
      C#, NPM or Yarn for JavaScript) package registries may be able to perform audits or track vulnerabilities that are reported to them
      and even rate them by severity. Lets see what rating our emulated weather library would get using `npm audit`</p>
    <br/>
    <center>
      <button @click="emulateNPMAudit()">Audit Our Packages</button>
    </center><br/><br/>
    <span v-if="auditRun">
      <center>
        <img src='../assets/audit_report.png'/>
      </center>
    </span>
    <p v-if="auditRun"> If our packages contain anything suspect, we can run <pre>npm audit fix</pre> to fix any vulnerabilities. You can also blow away offending packages
      by running <pre> npm -g uninstall</pre> for a global package, or <pre> npm uninstall</pre> for a local one. Security reasons are as good a reason as
      any to pick one library over the other.
    </p>
    <p v-if="auditRun">Now lets take a look at our audit after running npm audit fix...</p>
    <span v-if="auditRun">
      <center>
        <img src='../assets/audit_report_fixed.png'/>
      </center>
    </span>
    <p v-if="auditRun"> Now that that's out of the way, lets have you login. In this secure example, your login information is processed in this component which doesn't
      use ANY weather widget. It will then take you to another component where the weather package import is localized
    </p><br/><br/>
    <div class="block">
      <center><h6> Login</h6></center><br/>
      <label>Username:</label>
      <input v-model="username"/><br/>
      <label>Password: </label>
      <input type="password" v-model="password"/><br/><br/>
      <button @click="processCredentials">Login</button>
    </div>
  </div>
</template>

<script>
// import weatherWidget from '@/assets/weatherWidget'

export default {
  name: 'Logini',
  data() {
    return {
      auditRun: false,
      username:null,
      password:null
    }
  },
  methods: {
    emulateNPMAudit() {
      this.auditRun = true
    },
    processCredentials() {
      this.$router.push('WeatherSecure')
    }
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

button {
  width:250px;
}

input {
  margin:.5rem;
  height:35px;
  width:200px;
}

div.block {
  display:block;
}

div#loginSecure {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}
</style>
