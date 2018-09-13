//login method
function login(){
    event.preventDefault();
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;
    
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error: " + errorMessage);
});
}

firebase.auth().onAuthStateChanged(function(user) {
  this.user = firebase.auth().currentUser;
    if(this.user){
        location = "admin.html";
    }
});
