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
var companydb = firebase.database().ref().child('company_details');
// var companydb = firebase.database().ref().child('comp_reg_details');
companydb.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        var compModal = '';

         snapshot.forEach(function(data){
            var companyname = data.val().compname;
            var lastapplydate = data.val().lastapplydate;
            var gradyear = data.val().gradyear;
            var appliedjobs = data.val().appliedjobs;
            var jobcategory = data.val().jobcategory;
            var compemail = data.val().compemail;
            var website = data.val().website;
            var city = data.val().city;
            var compaddress = data.val().compaddress;
            content += '<tr>';
            content += '<td>' + companyname + '</td>'; //column1
            content += '<td>' + lastapplydate + '</td>';//column2
            content += '<td>' + gradyear + '</td>'; //column3
            content += '<td>' + appliedjobs + '</td>'; //column4
            content += '<td>' + jobcategory + '</td>'; //column5
            content += '<td id="compcontact">'+'<a href="#comp_info_modal'+id+'" class="uk-button uk-button-primary uk-border-rounded" type="button" uk-toggle>'+"Contact"+"</a>"+"</td>";
            content += '<td id="compdelete">'+'<button class="uk-button uk-button-danger uk-border-rounded" type="button">'+"Delete"+"</button>"+"</td>";
            content += '</tr>';

            compModal += '<div id="comp_info_modal'+id+'" uk-modal>'+
    '<div class="uk-modal-dialog">'+

        '<button class="uk-modal-close-default" type="button" uk-close>'+'</button>'+

        '<div class="uk-modal-header">'+
            '<h2 class="uk-modal-title">'+"Contact Details"+'</h2>'+
        '</div>'+

        '<div id="comp_data">'+
           
           '<div class="uk-modal-body" uk-overflow-auto>'+

            '<h3>'+"Email Address"+'</h3>'
            +'<p >'+compemail+'</p>'
            +'<h3>'+"Website"+'</h3>'
            +'<p >'+website+'</p>'
            +'<h3>'+"City"+'</h3>'
            +'<p >'+city+'</p>'
            +'<h3>'+"Address"+'</h3>'
            +'<p>'+compaddress+'</p>'+

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

        $('#comp-table-admin').append(content);
        $('#xyz').append(compModal);
    }
});
