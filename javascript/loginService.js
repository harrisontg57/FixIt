var loginService = {};

loginService.getUser = function(callback){
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/login.html",
        success: callback,
        dataType: "json"
    })
}

loginService.addUser = function(acc, callback){
    var copy = Object.assign({}, acc);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/createUser.html",
        data: JSON.stringify(copy),
        success: callback,
        dataType: "json",
        contentType: "application/json"
    })
}