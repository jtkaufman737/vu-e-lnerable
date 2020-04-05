<template>
  <div id="codeDownloadHome">
    <h1>Welcome to vu(e)lnerable - Code Download Without Integrity Check</h1>
    <p> In this section, we are going to discuss the Mitre Common Weakness Enumeration
      <a href="https://cwe.mitre.org/data/definitions/494.html">Weakness 494</a>, or
      <em>Download of Code Without Integrity Check.</em></p>
    <p>If you are thinking, <strong>hey wait a minute, this sounds just like the other
      vulnerability you covered! Isn't downloading a dependency with an undiscovered
      malicious line an insecure download of code? </strong> YES! It absolutely is.
      You may be interested to note that this weakness is defined as a child of
      the other weakness demonstrated earlier.
    </p>
    <p> To keep our examples interesting though, we are going to demonstrate this one
      differently from our other example, by recreating a version of the example posited
      in the weakness details page of the CWE (linked above). Examine the code below:</p>
    <pre>
      {{ phpDbCode }}
    </pre>
    <p>As explained on the CWE site, there's no verification of what domain this code is
      going to. Once uploaded from http://external.example.com/dbInfo.php we're assuming
      that the database domain is correct, that the configuration information about
      destination tables is correct, and that any future destinations of the user supplied
      login information would be trustworthy. But without verifying any of those things,
      its easy to imagine that might not be the case.
    </p>
    <p>To see this weakness in action, next navigate to either the Code Download Secure
      or Code Download Insecure links up top to see what happens next.
    </p>
  </div>
</template>
<script>
// const Prism = require('prismjs')
import code from '@/assets/codeSnippet'

export default {
  name: 'FileDownloadHome',
  data() {
    return {
      phpDbCode: code.phpDatabaseCredUploadCode
    }
  }
}

</script>
<style>
div#codeDownloadHome {
  height:90vh;
  width:70vw;
  margin:auto;
  padding-top:7rem;
}

p {
  margin:1rem !important;
}
</style>
