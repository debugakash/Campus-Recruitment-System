   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqgr4QqRFcjNbHeNI5C2rIIFo-0IYbrtM",
    authDomain: "campus-recruitment-sys-10c5d.firebaseapp.com",
    databaseURL: "https://campus-recruitment-sys-10c5d.firebaseio.com",
    projectId: "campus-recruitment-sys-10c5d",
    storageBucket: "campus-recruitment-sys-10c5d.appspot.com",
    messagingSenderId: "814092566036"
  };
  firebase.initializeApp(config);

var database = firebase.database().ref().child('stud_reg_details');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

         snapshot.forEach(function(data){
            var studname = data.val().username;
            var email = data.val().email;
            var password = data.val().password;
            var phoneno = data.val().phoneno;
            var address = data.val().address;
            
            content += '<tr>';
            content += '<td>' + studname + '</td>'; //column1
            content += '<td>' + email + '</td>';//column2
            content += '<td>' + password + '</td>';//column2
            content += '<td>' + phoneno + '</td>'; //column6
            content += '<td>' + address + '</td>'; //column3
            

        });

        $('#stud-account-table').append(content);
    }
});
