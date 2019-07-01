var ID = 3;

function submitNewUser(){
    ID++;
    console.log("Beginning of function");
    console.log($("#create-username").val());
    console.log($("#create-password").val());
    var newAcc = {
        id: ID,
        Username: $("#create-username").val(),
        Password: $("#create-password").val()
    };

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: JSON.stringify(newAcc),
        success: function() {
            console.log("success ID: " + newAcc.id + " Username: " + newAcc.Username + " Password: " + newAcc.Password);
        },
        error: function() {
            console.log("error posting " + newAcc);
        },
        dataType: "json",
        contentType: "application/json"
    });
    console.log("Made it to the end of the functiom");
}