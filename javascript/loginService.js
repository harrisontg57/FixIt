var loginService = {};

loginService.getUser = function(callback){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        success: callback,
        dataType: "json"
    })
}

loginService.addUser = function(acc, callback){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: JSON.stringify(acc),
        success: callback,
        dataType: "json",
        contentType: "application/json"
    });
}

loginService.getID = function(callback){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        success: callback,
        dataType: "json"
    });
}
