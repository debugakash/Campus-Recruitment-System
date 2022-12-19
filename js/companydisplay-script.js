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
var compdb = firebase.database().ref().child('company_details');  
compdb.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        var jobModal = '';

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
            content += '<td id="action">'+'<a href="#job_info_modal'+ id +'   "class="uk-button uk-button-primary uk-border-rounded" type="button" uk-toggle >'+ "<span uk-icon='info'>" +"</span>"+ "</a>"+"</td>";
            
             content += '</tr>';

            jobModal +=
// 

'<div id="job_info_modal'+id+'" uk-modal>'+
    '<div class="uk-modal-dialog">'+

        '<button class="uk-modal-close-default" type="button" uk-close>'+'</button>'+

        '<div class="uk-modal-header">'+
            '<h2 class="uk-modal-title">'+"Job Details"+'</h2>'+
        '</div>'+

        '<div id="job_data">'+
           
           '<div class="uk-modal-body" uk-overflow-auto>'+

            '<h3>'+"Company Name"+'</h3>'
            +'<p >'+companyname+'</p>'
            +'<h3>'+"Role"+'</h3>'
            +'<p >'+role+'</p>'
            +'<h3>'+"Job description"+'</h3>'
            +'<p >'+descrip+'</p>'
            +'<h3>'+"Minimum Qualification"+'</h3>'
            +'<p>'+minq+'</p>'
            +'<h3>'+"Skills Required"+'</h3>'
            +'<p >'+skill+'</p>'
            +'<h3>'+"Expected Salary"+'</h3>'
            +'<p>'+expsal+'</p>'
            +'<h3>'+"Job Location"+'</h3>'
            +'<p>'+jobloc+'</p>'
            +'<h3>'+"Working hour"+'</h3>'
            +'<p>'+workhr+'</p>'
            +'<h3>'+"Entry Date"+'</h3>'
            +'<p>'+entd+'</p>'+

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

        $('#comp-table').append(content);
        $('#xyz').append(jobModal);
    }
});
