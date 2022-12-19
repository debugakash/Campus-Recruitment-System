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

var dbRef = firebase.database().ref('student_details');  

document.getElementById('update_student_profile').addEventListener('submit', submitData);

function submitData () {
  // body... 
  // console.log('click');
  var studname = document.getElementById('studname').value;
  var branch = document.getElementById('branch').value;
  var streetaddress = document.getElementById('streetaddress').value;
  var degree = document.getElementById('degree').value;
  var gradyear = document.getElementById('gradyear').value;
  var mobno = document.getElementById('mobno').value;
  var email = document.getElementById('email').value;
  var college = document.getElementById('college').value;
  var cv = document.getElementById('cv').value;
  var coverletter = document.getElementById('coverletter').value;

  storeData(studname, branch, streetaddress, degree, gradyear, mobno, email, college, cv, coverletter);
}

function storeData (studname, branch, streetaddress, degree, gradyear, mobno, email, college, cv, coverletter) {
  // body... 
  var newDbRef = dbRef.push();
  newDbRef.set({
    studname: studname,
    branch: branch,
    streetaddress: streetaddress,
    degree: degree,
    gradyear: gradyear,
    mobno: mobno,
    email: email,
    college: college,
    cv: cv,
    coverletter: coverletter
    
  }).then(function(){
    console.log("Status Saved!");
  }).catch(function (error){
    console.log("Got an error:", error);
  });
}