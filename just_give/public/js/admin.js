// Initialize Firebase
const config = {
apiKey: "AIzaSyAGZ3bx1nYXtx2zmIN3n5f4A-Q794hfRT8",
authDomain: "justgive-95931.firebaseapp.com",
databaseURL: "https://justgive-95931.firebaseio.com",
projectId: "justgive-95931",
storageBucket: "justgive-95931.appspot.com",
messagingSenderId: "790221386512"
};
firebase.initializeApp(config);

//set gobal variables
var database = firebase.database();
var appeals = database.ref("Appeals");
var donations = database.ref("Donations");
const id = appeals.push().getKey();
    

        
    //when user login state changes
firebase.auth().onAuthStateChanged(function(user) {
    //get current user
    var user = firebase.auth().currentUser;
        //if user exists/doesnt exist
        if (user) {
            console.log("Logged In Motha Fuckas");
        } else {
            console.log("Not logged in mucker, try again");
        } 
        //get users email to test if i can grab values
        if(user != null){
            var email_id = user.email;
            alert(email_id);
        } else {
            console.log("No email");
        }
            
});    
        
//login method
function login(){
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;

        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("Error: " + errorMessage);
        });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
}
    
//clothing appeals from form
$('#form1').on('submit', event => {
    //event.preventDefault();
    const category = "Clothing";
    const gender = $('#cInputGender').val();
    const numReq = $('#cInputNumber').val();
    const item = $('#cInputItem').val();
    const size = $('#inputSize').val();
    const age = $('#cInputAge').val();
    const dropOffLocation = $('#cInputCity').val();
    const maxNum = $('#cInputMaxNum').val();
    alert(category + " " + gender + " " + numReq + " " + item + " " + size + " " + age + " " + dropOffLocation + " " + maxNum);
    appeals.child(category).child(id).set({
      "appealid": id,
      "category": category,
      "gender": gender,
      "numRequired": numReq,
      "item": item,
      "size": size,
      "age": age,
      "location": dropOffLocation,
      "maxNum": maxNum
    });
});
    
//food appeals from form
$('#form2').on('submit', event => {
      //event.preventDefault();
      const category = "Food";
      const numReq = $('#fInputNumber').val();
      const item = $('#fInputItem').val();
      const foodType = $('#inputFoodType').val();
      const dropOffLocation = $('#fInputCity').val();
      const maxNum = $('#fInputMaxNum').val();
      alert(category + " " + numReq + " " + item + " " + foodType + " " + dropOffLocation + " " + maxNum);
      appeals.child(category).child(id).set({
          "appealid": id,
          "category": category,
          "numRequired": numReq,
          "item": item,
          "foodType": inputFoodType,
          "location": dropOffLocation,
          "maxNum": maxNum
      });
});
    
//Household appeals from form
$('#form3').on('submit', event => {
      //event.preventDefault();
      const category = "Household";
      const type = $('#hInputType').val();
      const numReq = $('#hInputNumber').val();
      const item = $('#hInputItem').val();
      const condition = $('#hInputCondition').val();
      const dropOffLocation = $('#hInputCity').val();
      const maxNum = $('#hInputMaxNum').val();
      alert(category + " " + type + " " + numReq + " " + item + " " + condition + " " + dropOffLocation + " " + maxNum);
      appeals.child(category).child(id).set({
          "appealid": id,
          "category": category,
          "type": type,
          "numRequired": numReq,
          "item": item,
          "condition": condition,
          "location": dropOffLocation,
          "maxNum": maxNum
      });
});
        
//Hygiene appeals from form
$('#form4').on('submit', event => {
      //event.preventDefault();
      const category = "Hygiene";
      const gender = $('#hyInputGender').val();
      const numReq = $('#hyInputNumber').val();
      const item = $('#hyInputItem').val();
      const age = $('#hyInputAge').val();
      const dropOffLocation = $('#hyInputCity').val();
      const maxNum = $('#hyInputMaxNum').val();
      alert(category + " " + gender + " " + numReq + " " + item + " " + age + " " + dropOffLocation + " " + maxNum);
      appeals.child(category).child(id).set({
          "appealid": id,
          "category": category,
          "gender": gender,
          "numRequired": numReq,
          "item": item,
          "age": age,
          "location": dropOffLocation,
          "maxNum": maxNum
      });
});
        
//Kids appeals from form
$('#form5').on('submit', event => {
        //event.preventDefault();
        const category = "Kids";
        const gender = $('#kInputGender').val();
        const numReq = $('#kInputNumber').val();
        const item = $('#kInputItem').val();
        const age = $('#inputAge').val();
        const dropOffLocation = $('#kInputCity').val();
        const maxNum = $('#kInputMaxNum').val();
        alert(category + " " + gender + " " + numReq + " " + item + " " + age + " " + dropOffLocation + " " + maxNum);
        appeals.child(category).child(id).set({
            "appealid": id,
            "category": category,
            "gender": gender,
            "numRequired": numReq,
            "item": item,
            "age": age,
            "location": dropOffLocation,
            "maxNum": maxNum
        });
});

//Misc appeals from form
$('#form6').on('submit', event => {
    //event.preventDefault();
    const category = "Miscellaneous";
    const item = $('#mInputItem').val();
    const numReq = $('#mInputNumber').val();
    const description = $('#inputDescription').val();
    const dropOffLocation = $('#mInputCity').val();
    const maxNum = $('#mInputMaxNum').val();
    alert(category + " " + item + " " + numReq + " " + description + " " + dropOffLocation + " " + maxNum);
    appeals.child(category).child(id).set({
        "appealid": id,
        "category": category,
        "item": item,
        "numRequired": numReq,
        "description": description,
        "location": dropOffLocation,
        "maxNum": maxNum
    });
});

//get donations from db
var donRefC = firebase.database().ref("Donations/Clothing/");
//get all data and grab data upon updates on child nodes
donRefC.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var returnArr = [];
//console.log(newDonation);
    
returnArr.push(newDonation);

for(var i = 0; i < returnArr.length; i++){
    for(var value in returnArr[i]){
        var newObj = returnArr[i];
        var x = document.createElement("TD");
        var t = document.createTextNode(newObj[value]);
        x.appendChild(t);
        document.getElementById("clothTable").appendChild(x);
    }
 document.getElementById("clothTable").appendChild(x)
 var r = document.createElement("TR");
 document.getElementById("clothTable").appendChild(r);
}
});

//get donations from db
var donRefF = firebase.database().ref("Donations/Food/");
//get all data and grab data upon updates on child nodes
donRefF.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var returnArr = [];
//console.log(newDonation);
    
returnArr.push(newDonation);

for(var i = 0; i < returnArr.length; i++){
    for(var value in returnArr[i]){
        var newObj = returnArr[i];
        var x = document.createElement("TD");
        var t = document.createTextNode(newObj[value]);
        x.appendChild(t);
        document.getElementById("FoodTable").appendChild(x);
    }
 var r = document.createElement("TR");
 document.getElementById("FoodTable").appendChild(r);
    
}
});
    

//get donations from db
var donRefHome = firebase.database().ref("Donations/Household/");
//get all data and grab data upon updates on child nodes
donRefHome.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var returnArr = [];
//console.log(newDonation);
    
returnArr.push(newDonation);

for(var i = 0; i < returnArr.length; i++){
    for(var value in returnArr[i]){
        var newObj = returnArr[i];
        var x = document.createElement("TD");
        var t = document.createTextNode(newObj[value]);
        x.appendChild(t);
        document.getElementById("homeTable").appendChild(x);
    }
 var r = document.createElement("TR");
 document.getElementById("homeTable").appendChild(r);
    
}
});

//get donations from db
var donRefHyg = firebase.database().ref("Donations/Hygiene/");
//get all data and grab data upon updates on child nodes
donRefHyg.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var returnArr = [];
//console.log(newDonation);
    
returnArr.push(newDonation);

for(var i = 0; i < returnArr.length; i++){
    for(var value in returnArr[i]){
        var newObj = returnArr[i];
        var x = document.createElement("TD");
        var t = document.createTextNode(newObj[value]);
        x.appendChild(t);
        document.getElementById("hygTable").appendChild(x);
    }
 var r = document.createElement("TR");
 document.getElementById("hygTable").appendChild(r);
    
}
});
   
document.getElementById("defaultOpen").click();

//show tab content
function openCat(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Sign in an existing user
        /*firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
              // Handle Errors
              var errorCode = error.code;
              var errorMessage = error.message;
             alert(errorMessage);
            });
            alert(userEmail + userPass);*/
            