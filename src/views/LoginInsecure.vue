<template>
  <div class="login">
    <h1>Vu(e)lnerable Login</h1>
    <p> On this page we are going to demonstrate two aspects of code design that can put us at risk for <strong>Inclusion of Functionality From An Untrusted
      Control Sphere</strong>, a Mitre Common Weakness Enumeration (CWE) Top 25 software weaknesses.</p>
    <p>For starters, this page represents bad design in that I am using a foreign library (weather widget) on a page that doesn't use any of that
      functionality! Many modern web applications are component based and can have local component data. There is no reason to have a widget defined
      in such a way that it is registered application wide, unless it will be used throughout many components. Part of the example from mitre (recounted
      on the home page) could be avoided in an app like this one by keeping the login page separate from the external widget. User information and
      weather aren't related, so there really is no reason for that data to be comingled anyway.
    </p>
    <p> Another tool available to us to evaluate the trustworthiness of external code is that in many languages (gems for Ruby, PyPI for Python, NuGET for
      C#, NPM or Yarn for JavaScript) package registries may be able to perform audits or track vulnerabilities that are reported to them
      and even rate them by severity. Lets see what rating our emulated weather library would get using `npm audit`</p>
    <br/>
    <center>
      <button @click="emulateNPMAudit()">Audit Our Packages</button>
    </center>
    <code v-if="auditRun">
      <pre>

      </pre>
    </code>
  </div>
</template>

<script>
import weatherWidget from '@/assets/weatherWidget'

export default {
  name: 'Logini',
  data() {
    return {
      auditRun: false,
    }
  },
  methods: {
    emulateNPMAudit() {
      console.log(weatherWidget)
    }
  }
}
</script>
