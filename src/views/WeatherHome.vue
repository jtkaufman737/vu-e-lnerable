<template>
  <div id="weatherHome">
    <h1>Welcome to vu(e)lnerable</h1>
    <p> This site was created to demonstrate the <a href="https://cwe.mitre.org/top25/archive/2019/2019_cwe_top25.html">
      Common Weakness Enumeration Top 25 Software Vulnerabilities</a> vulnerability <em>Inclusion of Functionality from
      Untrusted Control Sphere</em>. You can read more about that <a href="https://cwe.mitre.org/data/definitions/829.html">here.</a>
      The name vu(e)lnerable is a terrible pun, since I built this application using Vue.js framework for Javascript. It also utilizes the Webpack build system and
      HTML/CSS.
    </p>
    <p> To use this application, you can navigate to the secure or insecure side of the site. Once there, they will elaborate on what makes them
      secure or insecure</p>
    <p> An original example of the vulnerability is demonstrated below: </p>
    <pre>
      <code>{{ codeSnippet }}</code>
    </pre>
    <p> What are we looking at here? this is an example of <em>Inclusion of Functionality from Untrusted Control Sphere</em>. You may wonder, how so?</p>
    <p> Take a look at the example below which illustrates the risks that could be posed by inclusion of an insecure weather app widget which could in
      one line divert credentials from a login page to be captured by an external site. This could happen if someone merged a PR into this package
      without anyone realizing it, which is <a href="https://www.bleepingcomputer.com/news/security/npm-pulls-malicious-package-that-stole-login-passwords/">exactly what happened</a> with to a package registered with NPM (the node package registry) called bb-builder.</p>
      <pre>
        <code>{{ maliciousCodeSnippet }}</code>
      </pre>
  </div>
</template>
<script>
// const Prism = require('prismjs')
import code from '@/assets/codeSnippet'

export default {
  name: 'Home',
  data() {
    return {
      codeSnippet: code.loginCode,
      maliciousCodeSnippet:code.jsCode
    }
  }
}

</script>
<style>
div#weatherHome {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}

p {
  margin:1rem !important;
}
</style>
