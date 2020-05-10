<template>
  <div id="loginInsecure">
    <h1>Login Attempts - Secure</h1>
    <p> When you are ready, hit "begin" to see a slowed down version of how a bot might cycle through common usernames. This example is
      actually drastically slowed just so it is visible to the human eye, but a bot could cycle through these much faster than in the example
      with little to no effort on the part of the creator.
    </p>
    <p v-if="attempts > 10"><strong>What happened in this case? Our emulated bot is still attacking, but the software contains a lock mechanism if too many failed
    login attempts are conducted at the same time.</strong>
    <div class="block">
      <p v-if="attempts > 10">This account has been locked due to suspicious activity. Please try again later.</p>
      <label>Username:</label>
      <input id="currentUsername" v-model="currentUsername"/><br/>
      <label>Password: </label>
      <input id="currentPassword" type="password" v-model="currentPassword"/><br/><br/>
    </div>
    <button @click="simulateBot()">SIMULATE BOT LOGIN</button>
    <div class="modal" id="loginModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <strong>ERROR:</strong> Invalid credentials <br/><br/>
        Account for username {{ currentUsername }} password {{ currentPassword }} does not exist. Please check your credentials and try again.
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      intervalOne: null,
      intervalTwo: null,
      attempts: 0,
      currentPassword:'',
      currentUsername: '',
      usernames:['pos','demo','dbadmin1','techadmin','dbadmin','admin','sql','user1', 'username','administrator', 'pos','testuser1',
      'asmith','a.smith','b.smith','bsmith', 't.smith', 'tsmith','ssmith','ssmith123','amiller','amiller123','bmiller',
      'bmiller123','smiller','smiller123','s.miller','amoore','bmoore','cmoore','dmoore','tmoore','amoore123',
      'awilliams','awilliams123','bwilliams123','bwilliams','dwilliams','cwilliams','swilliams','twilliams','mwilliams',
      'mmoore','agarcia','bgarcia','cgarcia','njones','njones123','ajones','bjones','cjones','sjones','tjones','ajones123','bjones123',
      'tjones123','amartin','amartin123','a.martin','b.martin','bmartin','cmartin','c.martin','c.martin123','s.martin','smartin',
      'ajohnson','bjohnson','cjohnson','mjohnson','cjohnson123','djohnson123','tjohnson','t.johnson',],
      passwords:[
        '23456',
        '123456789',
        'qwerty',
        'password',
        '111111',
        '12345678',
        'abc123',
        '1234567',
        'password1',
        '12345',
        'vAmr4hV3',
        'jhMMUN5m',
        'SWMbc5dt',
        'zqMTQLZw',
        'mMjDRDCd',
        'gTqXasWV',
        'tfUyqyWS',
        'zGLg2Dcr',
        'xEPU7EFy',
        'k98QsBQM',
        '7Fa3bvRv',
        '9Nt4YvDW',
        'xrhV2aCt',
        'CEg6Bv6V',
        'R9WynLM7',
        '2Z264CCk',
        '8KkJ7QDA',
        '7ck6adFk',
        'WWmRxZrp',
        'ydF8RRVd',
        'znuQhdvm',
        'FyLpZvJD',
        'jggqUmNF',
        'KsNXwbW5',
        'CWu4PYVz',
        'P4qWrRVw',
        'GuaRH3yf',
        'xqnYxTWa',
        'gnCMUZKc',
        'gmYPmfC9',
        'GwnVNDze',
        'amDNAx4c',
        'YeQSaxgW',
        'hbBxP6gB',
        '8fQ5wTuH',
        'y4EtdmHG',
        'wAWhwwsh',
        'EX7Tr5Tz',
        'fGhQdhFy',
        'TAtzJw86',
        'UwLV24g2',
        'CuRDNuud',
        'STePhJwU',
        'AN9kFxGR',
        'h7J2zvbn',
        'c25dkXsQ',
        'A9NHSuVk',
        'AF75jDv4',
        'UgrhRnkn',
        '8apS7gCw',
        'wBxcabeh',
        'uQwvH6zj',
        'v2bRTNTj',
        'P53D5Y7g',
        'mngWCfWT',
        'FmkRffk8',
        'CsUXgYb8',
        '6Gm2KSeS',
        'CfXTVHWh',
        'QYSfZhY8',
        'A6pSxnh4',
        'sYGkp9M9',
        '4d55LKQr',
        'RZq8ajBP',
        'tQDA23RG',
        'z64Fx2A6',
        'FfuMBWv2',
        'dUmEz8mN',
        '8GWjNYsk',
        'jTPxQxnX',
        'mxQWYV5Z',
        'm9YJvLrC',
        'EmN3cVAq',
        '6FAN5QAt',
        '9Ry2jRpP',
        'bU5QD6FZ',
        'H5Rq3MaG',
        'zkJgwuEV',
        'y34dYsfA',
        'MUh55KsG',
        'Ft4Ue9Mm',
        'fNQhekvs',
        '5XB2YBWZ',
        'F47m76rB',
        'XYVRpaHY',
        'qhrYbdue',
        'qKmqvkHX',
        'rUsBKAVf',
        'UJdqMqsX',
        '6QfETqEW',
        'BCTyBrPg',
        'n3DYUHuc',
        'jzP7tB9V',
        'vgpDb3Nw',
        'SsS9cuGh',
        '3s7uttaz',
        'kZzGJrJC',
        'NCafvLDy',
        'bFaqVNeT',
        'x3fKRjVt'],
    }
  },
  methods: {
    simulateBot() {
      // flash the content set by "bot"
      this.intervalOne = setInterval(() => {
        this.currentPassword = this.passwords[Math.floor(Math.random() * this.passwords.length)];
        this.currentUsername = this.usernames[Math.floor(Math.random() * this.usernames.length)];

        document.getElementById('loginModal').classList.add('is-active')
      }, 700)

      // close the window from the error modal and breaks the loop
      this.intervalTwo = setInterval(() => {
        this.attempts = this.attempts + 1
        document.getElementById('loginModal').classList.remove('is-active');

        if(this.attempts > 10) {
          clearInterval(this.intervalOne)
          clearInterval(this.intervalTwo)
          document.getElementById('currentPassword').disabled = true;
          document.getElementById('currentUsername').disabled = true;
        }
      }, 800)
    }
  },
  mounted() {
    localStorage.setItem('failedAttempts', 0)
  }
}
</script>

<style>


div#loginSecure {
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
  width:250px;
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
