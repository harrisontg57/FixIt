var id = 0;

function submitUserInfo(){
    var user = {
        Username: $("#login-username").val(),
        Password: $("#login-password").val()
    };
    console.log(user.Username);
    console.log(user.Password);
    //var result;
    // loginService.getUser(function(data, status){
    //     result = data;
    //     for(var i = 0; i < result.length; i++){
    //         if(result[i].Username == user.Username && result[i].Password == user.Password){
    //             alert("Successful Login: " + result[i].id + " " + result[i].Username + " " + result[i].Password);
    //             return;
    //         }
    //     }
    //     alert("Username or Password is incorrect");
    // });
}
