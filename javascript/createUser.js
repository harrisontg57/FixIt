var ID = loginService.getID(function(data, status){
    var list = data;
    ID = list[list.length-1].id;
});

function submitNewUser(){
    ID++;
    var newAcc = {
        id: ID,
        Username: $("#create-username").val(),
        Password: $("#create-password").val()
    };

    loginService.getUser(function(data, status){
        var result = data;
        for(var i = 0; i < result.length; i++){
            if(result[i].Username == newAcc.Username){
                alert("Username is taken, please choose another Username");
                ID--;
                return;
            }
        }    
        loginService.addUser(newAcc, function(data, status){
            alert("User has been added");
        });
    });
}