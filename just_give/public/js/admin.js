$(function(){
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
    
          var database = firebase.database();
          var appeals = database.ref("Appeals");
          var donations = database.ref("Donations");
          const id = appeals.push().getKey();
    
    
    
     $('#LoginForm').on('submit', event => {
          const userEmail = $('#inputEmail').val();
          const userPass = $('#inputPassword').val();
         
         firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
             alert(errorMessage);
            });
         
            var user = firebase.auth().currentUser;
            alert(user);
            firebase.auth().onAuthStateChanged(user => {
              if(user) {
                location = '/admin.html'
              } else {
                  alert("No User");
              }
        });
    });
    
        $( "#log-out" ).click(function() {
                firebase.auth().signOut().then(function() {
                  alert( "Out ye get!" );
                }).catch(function(error) {
                  //console.log(error);
                });
        });
    
      //clothing
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
    
        //food
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
    
       //Household
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
        
        //Hygiene
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
        
        //Kids
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
    
       //Misc
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
    
        var donRef = firebase.database().ref("Donations/Clothing/");
        donRef.on("child_added", function(data, prevChildKey) {
            var newDonation = data.val();

            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.donationId);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.item);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.category);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.gender);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.size);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.age);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.location);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.amount);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.date);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.userName);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.userEmail);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);
            var x = document.createElement("TD");
            var t = document.createTextNode(newDonation.userNumber);
            x.appendChild(t);
            document.getElementById("clothTable").appendChild(x);

            var r = document.createElement("TR");
            document.getElementById("clothTable").appendChild(r);
        });
    
    
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
