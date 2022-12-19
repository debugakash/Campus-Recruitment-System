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

var dbRef = firebase.database().ref('Exam_details');  

document.getElementById('update_exam_link').addEventListener('submit', submitData);

function submitData () {
  // body... 
  // console.log('click');
  var date = document.getElementById('date').value;
  var examname = document.getElementById('examname').value;
  var examlink = document.getElementById('examlink').value;
  var examtype = document.getElementById('examtype').value;
  var lastdate = document.getElementById('lastdate').value;

  storeData(date, examname, examlink, examtype, lastdate);
}

function storeData (date, examname, examlink, examtype, lastdate) {
  // body... 
  var newDbRef = dbRef.push();
  newDbRef.set({
    date: date,
    examname: examname,
    examlink: examlink,
    examtype: examtype,
    lastdate: lastdate,
  }).then(function(){
    console.log("Status Saved!");
  }).catch(function (error){
    console.log("Got an error:", error);
  });
}