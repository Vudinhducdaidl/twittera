const firebaseConfig = {
  apiKey: "AIzaSyBbu6w2rsYHo03RfCOI1Mf75ULSkHUyJz4",
  authDomain: "data-919ca.firebaseapp.com",
  databaseURL: "https://data-919ca-default-rtdb.firebaseio.com",
  projectId: "data-919ca",
  storageBucket: "data-919ca.appspot.com",
  messagingSenderId: "606847202912",
  appId: "1:606847202912:web:3d25b4f2a9213e5d7b7505",
  measurementId: "G-Q5805SCPX2"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  // var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, );

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, ) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    username: name,
    password: emailid,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
