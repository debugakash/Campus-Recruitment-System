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

var compdb = firebase.database().ref().child('company_details');  
compdb.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

         snapshot.forEach(function(data){
            var companyname = data.val().compname;
            var jobcat = data.val().jobcategory;
            var role = data.val().role;
            var descrip = data.val().jobdescrip;
            var minq = data.val().minqual;
            var skill = data.val().skillsreq;
            var expsal = data.val().expectedsalary;
            var jobloc = data.val().joblocation;
            var workhr = data.val().workinghour;
            var lastapld = data.val().lastapplydate;
            var entd = data.val().entrydate;
            content += '<tr>';
            content += '<td>' + companyname + '</td>'; //column1
            content += '<td>' + jobcat + '</td>';//column2
            content += '<td>' + role + '</td>'; //column3
            // content += '<td>' + descrip + '</td>'; //column3
            // content += '<td>' + minq + '</td>'; //column3
            // content += '<td>' + skill + '</td>'; //column3
            // content += '<td>' + expsal + '</td>'; //column3
            // content += '<td>' + jobloc + '</td>'; //column3
            // content += '<td>' + workhr + '</td>'; //column3
            content += '<td>' + lastapld + '</td>'; //column3
            // content += '<td>' + entd + '</td>'; //column3
            content += '<td id="action">'+'<a href='+  +' class="uk-button uk-button-primary uk-border-rounded" type="button">'+ "<span uk-icon='info'>" +"</span>"+ "</a>"+"</td>";
            content += '</tr>';

        });

        $('#comp-table').append(content);
    }
});
