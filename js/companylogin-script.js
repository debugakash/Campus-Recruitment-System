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

var dbRef = firebase.database().ref('company_details');  

document.getElementById('update-comp-post-job').addEventListener('submit', submitData);

function submitData () {
  // body... 
  // console.log('click');
  var compid = document.getElementById('compid').value;
  var comp_name = document.getElementById('compname').value;
  var jobcategory = document.getElementById('jobcategory').value;
  var role = document.getElementById('role').value;
  var job_descrip = document.getElementById('jobdescrip').value;
  var min_qual = document.getElementById('minqual').value;
  var skills_req = document.getElementById('skillsreq').value;
  var expectedsalary = document.getElementById('expectedsalary').value;
  var joblocation = document.getElementById('joblocation').value;
  var workinghour = document.getElementById('workinghour').value;
  var lastapplydate = document.getElementById('lastapplydate').value;
  var entrydate = document.getElementById('entrydate').value;


  storeData(compid, comp_name, jobcategory, role, job_descrip, min_qual, skills_req, expectedsalary, joblocation, workinghour, lastapplydate
, entrydate);
}

function storeData (compid, comp_name, jobcategory, role, job_descrip, min_qual, skills_req, expectedsalary, joblocation, workinghour, lastapplydate
, entrydate) {
  // body... 
  var newDbRef = dbRef.push();
  newDbRef.set({
    compid: compid,
    compname: comp_name,
    jobcategory: jobcategory,
    role: role,
    jobdescrip: job_descrip,
    minqual: min_qual,
    skillsreq: skills_req,
    expectedsalary: expectedsalary,
    joblocation: joblocation,
    workinghour: workinghour,
    lastapplydate: lastapplydate,
    entrydate: entrydate
  });

}
