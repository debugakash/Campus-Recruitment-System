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
var database = firebase.database().ref().child('student_details');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        var studinfoModal ='';

         snapshot.forEach(function(data){
            var studname = data.val().studname;
            var email = data.val().email;
            var address = data.val().streetaddress;
            var degree = data.val().degree;
            var collegename = data.val().college;
            var phoneno = data.val().mobno;
            content += '<tr>';
            content += '<td>' + studname + '</td>'; //column1
            content += '<td>' + email + '</td>';//column2
            content += '<td>' + address + '</td>'; //column3
            content += '<td>' + degree + '</td>'; //column4
            content += '<td>' + collegename + '</td>'; //column5
            // content += '<td>' + phoneno + '</td>'; //column6
            content += '<td id="phoneno">'+'<a href="#stud_info_modal'+ id +'" class="uk-button uk-button-primary uk-border-rounded" type="button" uk-toggle>'+"Contact"+"</a>"+"</td>";
            content += '<td id="profile">'+'<button class="uk-button uk-button-primary uk-border-rounded" type="button">'+'Open'+'</button>'+'</td>';
            content += '</tr>';

            studinfoModal += '<div id="stud_info_modal'+id+'" uk-modal>'+
    '<div class="uk-modal-dialog">'+

        '<button class="uk-modal-close-default" type="button" uk-close>'+'</button>'+

        '<div class="uk-modal-header">'+
            '<h2 class="uk-modal-title">'+"Contact Details"+'</h2>'+
        '</div>'+

        '<div id="stud_data">'+
           
           '<div class="uk-modal-body" uk-overflow-auto>'+

            '<h3>'+"Phone no."+'</h3>'
            +'<p >'+phoneno+'</p>'+

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

        $('#ex-table').append(content);
        $('#abc').append(studinfoModal);
    }
});
