function Login(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(username == 'Atharv' && password == '123'){
        alert("Login Successful");
    }
    else if(username == ''||' '&& password == ''){
        alert("Please fill all fields");
    }
    else{
        alert("Invalid Username or Password");
    }
}
