var id = 0;

function submitUserInfo(userText, passwordText){
    var user = {
        "user": userText,
        "password": passwordText
    };

    loginService.getUser(user, function(data, status){
        var dats = data;
        for(var i = 0; i < dats.length; i++){
            console.log(dats[i]);
        }
    })
    console.log("Username: " + document.getElementById(userText).value);
    console.log("Password: " + document.getElementById(passwordText).value);

}