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
  if (!firebase.apps.length) {
   firebase.initializeApp({});
}     

var stud_reg_db = firebase.database().ref('stud_reg_details');  

// document.getElementById('update-reg-details').addEventListener('submit', submitData);

function submitData () {
  // body... 
  // console.log('click');

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;
  var enrollid = document.getElementById('enrollmentid').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  var phoneno = document.getElementById('phoneno').value;
  var address = document.getElementById('address').value;


  var state = storeData(username, email, password, confirmpassword, enrollid, dob, gender, phoneno, address);
  if (state) {
    console.log("im gonna close the modal");
    document.getElementById('#modal-student').classList.add('uk-close');
  }
}

function storeData (username, email, password, confirmpassword, enrollid, dob, gender, phoneno, address) {
  // body... 
  var newstud_reg_db = stud_reg_db.push();
  newstud_reg_db.set({
    username: username,
    email: email,
    password: password,
    confirmpassword: confirmpassword,
    enrollid: enrollid,
    dob: dob,
    gender: gender,
    phoneno: phoneno,
    address: address,
  }).then(function(){
    console.log("Status Saved!");
  }).catch(function (error){
    console.log("Got an error:", error);
  });

  return true;
}

var comp_reg_db = firebase.database().ref('comp_reg_details');  

// document.getElementById('update-comp-post-job').addEventListener('submit', submitcompData);

function submitcompData () {
  // body... 
  // console.log('click');
  var compid = document.getElementById('compid').value;
  var compname = document.getElementById('compname').value;
  var contactperson = document.getElementById('contactperson').value;
  var compemail = document.getElementById('compemail').value;
  var comppassword = document.getElementById('comppassword').value;
  var compconfirmpassword = document.getElementById('compconfirmpassword').value;
  var city = document.getElementById('city').value;
  var compaddress = document.getElementById('compaddress').value;
  var website = document.getElementById('website').value;

  console.log(compid);
  console.log(compname);
  console.log(contactperson);
  console.log(compemail);
  console.log(comppassword);
  console.log(compconfirmpassword);
  console.log(city);
  console.log(compaddress);
  console.log(website);

  storecompData(compid, compname, contactperson, compemail, comppassword, compconfirmpassword, city, compaddress, website);
}

function storecompData (compid, compname, contactperson, compemail, comppassword, compconfirmpassword, city, compaddress, website) {
  // body... 
  var newcomp_reg_db = comp_reg_db.push();
  console.log(comp_reg_db);
  newcomp_reg_db.set({

    compid: compid,
    compname: compname,
    contactperson: contactperson,
    compemail: compemail,
    comppassword: comppassword,
    compconfirmpassword: compconfirmpassword,
    city: city,
    compaddress: compaddress,
    website: website,
  }).then(function(){
    console.log("Status Saved!");
  }).catch(function (error){
    console.log("Got an error:", error);
  });
}