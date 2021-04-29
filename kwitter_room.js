

      var firebaseConfig = {
            apiKey: "AIzaSyA-MCX1u-42u0Fgj8TpfwGsF5N-5PJJyqA",
            authDomain: "kwitter-91a37.firebaseapp.com",
            databaseURL: "https://kwitter-91a37-default-rtdb.firebaseio.com",
            projectId: "kwitter-91a37",
            storageBucket: "kwitter-91a37.appspot.com",
            messagingSenderId: "979775262191",
            appId: "1:979775262191:web:3830472a4861d4f9d7ba1a"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("username");

    document.getElementById("userName").innerHTML = "Welcome, " + username;

    function addRoom() 
    { 
          var roomName = document.getElementById("roomNames").value;

          firebase.database().ref("/").child(roomName).update({
                  purpose: "ROOMNAME"
          });

          localStorage.setItem("roomName", roomName);

          window.location = "kwitterPage.html"
    }

    function redirectToRoomName(name) 
    { 
      
          localStorage.setItem("roomName", name);
          window.location = "kwitterPage.html"
    }

    function logout() 
    { 
            localStorage.removeItem("username");
            localStorage.removeItem("roomName");

            window.location = "index.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       roomName = childKey;
      //Start code
            row = "<div class='room_name' id=" + roomName + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            
      //End code
      });});}
getData();
