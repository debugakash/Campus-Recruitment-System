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
var id=1;
var studdb = firebase.database().ref().child('student_details');  
studdb.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        var studModal = '';

         snapshot.forEach(function(data){
            var studname = data.val().studname;
            var branch = data.val().branch;
            var gradyear = data.val().gradyear;
            var appliedjobs = data.val().appliedjobs;
            var mobno = data.val().mobno;
            var email = data.val().email;
            var streetaddress = data.val().streetaddress;
            content += '<tr>';
            content += '<td>' + studname + '</td>'; //column1
            content += '<td>' + branch + '</td>';//column2
            content += '<td>' + gradyear + '</td>'; //column3
            content += '<td>' + appliedjobs + '</td>'; //column4
            content += '<td id="studcontact">'+'<a href="#stud_info_modal'+ id +'" class="uk-button uk-button-primary uk-border-rounded" type="button" uk-toggle>'+"Contact"+"</a>"+"</td>";
            content += '<td id="studdelete">'+'<button class="uk-button uk-button-danger uk-border-rounded" type="button" onclick="deleteRow(this)">'+"Delete"+"</button>"+"</td>";
            content += '</tr>';

            studModal += '<div id="stud_info_modal'+id+'" uk-modal>'+
    '<div class="uk-modal-dialog">'+

        '<button class="uk-modal-close-default" type="button" uk-close>'+'</button>'+

        '<div class="uk-modal-header">'+
            '<h2 class="uk-modal-title">'+"Contact Details"+'</h2>'+
        '</div>'+

        '<div id="stud_data">'+
           
           '<div class="uk-modal-body" uk-overflow-auto>'+

            '<h3>'+"Mobile No."+'</h3>'
            +'<p >'+mobno+'</p>'
            +'<h3>'+"Email Address"+'</h3>'
            +'<p >'+email+'</p>'
            +'<h3>'+"Address"+'</h3>'
            +'<p >'+streetaddress+'</p>'+

            '</div>';

        '</div>'+

        '<div class="uk-modal-footer uk-text-right">'+
            
        '</div>'+

    '</div>'+
'</div>'
// 
             

           
            // job_description += '<p>'            
            id++;
        });

        $('#stud-table').append(content);
        $('#abc').append(studModal);
    }
});
