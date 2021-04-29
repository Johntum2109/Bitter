//YOUR FIREBASE LINKS

      var firebaseConfig = {
            apiKey: "AIzaSyA-MCX1u-42u0Fgj8TpfwGsF5N-5PJJyqA",
            uthDomain: "kwitter-91a37.firebaseapp.com",
            databaseURL: "https://kwitter-91a37-default-rtdb.firebaseio.com",
            projectId: "kwitter-91a37",
            storageBucket: "kwitter-91a37.appspot.com",
            messagingSenderId: "979775262191",
            appId: "1:979775262191:web:3830472a4861d4f9d7ba1a"
      };

// Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var roomName = localStorage.getItem("roomName");

      var userName = localStorage.getItem("userName");

      function send() 
      { 
            messege = document.getElementById("messege").value;

            firebase.database().ref(roomName).push({
                  name: userName,
                  messege: messege,
                  like: 0
            });
      }

      function logout() 
      { 
            localStorage.removeItem("roomName");
            localStorage.removeItem("userName");
            window.location = index.html;
      }

      function updatelike(messege_id) 
      { 
            buttonId = messege_id;
            likes = document.getElementById(buttonId).value;
            updatedlikes = Number(likes) + 1;

            firebase.database().ref(roomName).child(messege_id).update({
                  like : updatedlikes
            });
      }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      var name = message_data['name'];
      msg = message_data['messege'];
      like = message_data['like'];
      nameWithTag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      messegeWithTag = "<h4 class='messege_h4'>" + msg + "</h4>"
      likeButton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatelike(this.id)'"
      spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button></hr>";

      row = nameWithTag + messegeWithTag + likeButton + spanWithTag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
