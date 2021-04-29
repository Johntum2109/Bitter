// log In
    function logIn() 
    { 
        var userName = document.getElementById("userName").value;

        localStorage.setItem("username", userName);

        window.location = "kwitter_room.html"
    }