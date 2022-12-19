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

var database = firebase.database().ref().child('Exam_details');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

         snapshot.forEach(function(data){
            var date = data.val().date;
            var examname = data.val().examname;
            var examlink = data.val().examlink;
            var examtype = data.val().examtype;
            var lastdate = data.val().lastdate;
            content += '<tr>';
            content += '<td>' + date + '</td>'; //column1
            content += '<td>' + examname + '</td>';//column2
            content += '<td>' + '<a target="__blank" href="'+ examlink +'">' + examlink +'</a>'+ '</td>'; //column3
            content += '<td>' + examtype + '</td>'; //column4
            content += '<td>' + lastdate + '</td>'; //column5
            content += '</tr>';

        });

        $('#exam-table').append(content);
    }
});
