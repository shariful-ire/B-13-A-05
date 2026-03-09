const verify="adminadmin123"; // verify usernaem and password

document.getElementById("login").addEventListener('click', function(){
    const username=document.getElementById("username").value;
    const passward=document.getElementById("password").value;
    const cheeck = username+passward;
    if(verify===cheeck){
        window.location.href="./issue_tracker.html";
    }
    else{
        alert("Wrong Username or Passward");
    }

});
