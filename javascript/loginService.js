var loginService = {};

loginService.getUser = function(callback){
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/data.json",
        success: callback,
        dataType: "json"
    })
}

loginService.addUser = function(acc, callback){
    //var copy = Object.assign({}, acc);
    
    $.ajax({
        type: "POST",
        url: "data.json",
        data: acc,
        success: callback,
        dataType: "json",
        contentType: "json"
    })
}