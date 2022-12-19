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

var database = firebase.database().ref().child('comp_reg_details');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

         snapshot.forEach(function(data){
            var compname = data.val().compname;
            var compid = data.val().compid;
            var compemail = data.val().compemail;
            var comppassword = data.val().comppassword;
            var city = data.val().city;
            var compaddress = data.val().compaddress;
            
            content += '<tr>';
            content += '<td>' + compname + '</td>'; //column1
            content += '<td>' + compid + '</td>'; //column1
            content += '<td>' + compemail + '</td>';//column2
            content += '<td>' + comppassword + '</td>';//column2
            content += '<td>' + city + '</td>'; //column6
            content += '<td>' + compaddress + '</td>'; //column3
            

        });

        $('#comp-account-table').append(content);
    }
});
