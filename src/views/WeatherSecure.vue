<template>
  <div id="weatherSecure">
    <h1>Seven day forecast (Secure)</h1>
    <p>This is a good example of how data should be localized so that even if you do have a malicious package, damage can be minimized by not giving it
      access to more than it needs to. In this secure example, the weather page and login page are decoupled. This library could have accidentally been given
      a line that was designed to steal login info, but because it is isolated to a single component, it doesn't have access to that data.
    </p>
    <center>
      <div class="imgGrid">
        <div class="pane">
          Sunday <br/>
          <img src="../assets/lightning.png"/>
        </div>
        <div class="pane">
          Monday <br/>
          <img src="../assets/lightning.png"/></div>
        <div class="pane">
          Tuesday<br/>
          <img src="../assets/rain.png"/>
        </div>
        <div class="pane">
          Wednesday<br/>
          <img src="../assets/sunshine.png"/>
        </div>
        <div class="pane">
          Thursday<br/>
          <img src="../assets/snow.png"/>
        </div>
        <div class="pane">
          Friday<br/>
          <img src="../assets/sunshine.png"/>
        </div>
        <div class="pane">
          Saturday<br/>
          <img src="../assets/rain.png"/>
        </div>
      </div>
    </center>
  </div>
</template>
<script>
export default {
  name:'WeatherSecure'
}

</script>
<style scoped>
 div.imgGrid {
   height:70vh;
   width:70vw;
   display:grid;
   grid-template-columns:20% 20% 20%;
   grid-template-rows:30% 30% 30%;
   grid-gap:25px;
 }

 div.pane {
   display:block;
   margin:25px;
   padding:35px;
 }

 img {
   height:7rem;
   width:7rem;
   border:5px black solid;
   border-radius:7px;
 }

 p {
   margin:1.5rem;
 }

 div#weatherSecure {
   width:70vw;
   height:90vh;
   margin:auto;
   padding-top:7rem;
 }
</style>
