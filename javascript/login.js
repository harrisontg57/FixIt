var id = 0;

function submitUserInfo(){
    var user = {
        Username: $("#login-username").val(),
        Password: $("#login-password").val()
    };
    var result;
    loginService.getUser(function(data, status){
        result = data;
        for(var i = 0; i < result.length; i++){
            if(result[i].Username == user.Username && result[i].Password == user.Password){
                console.log(result[i].id + " " + result[i].Username + " " + result[i].Password);
                return;
            }
        }
        console.log("Username or Password is incorrect");
    });
}
