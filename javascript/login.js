var id = 0;

function submitUserInfo(){
    var user = {
        Username: $("#login-username").val(),
        Password: $("#login-password").val()
    };

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        data: JSON.stringify(user),
        success: function(){
            console.log("Success, User: " + user.Username + " Password: " + user.Password);
        },
        error: function(){
            console.log("Error getting info for " + user);
        },
        dataType: "json",
        contentType: "application/json"
    });

    // loginService.getUser(user, function(data, status){
    //     var dats = data;
    //     for(var i = 0; i < dats.length; i++){
    //         console.log(dats[i]);
    //     }
    // })

}