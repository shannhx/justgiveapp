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
var donated = database.ref("Delivered");
var donations = database.ref("Donations");
//get child key on push
const id = appeals.push().getKey();

//firebase.auth().createUserWithEmailAndPassword("admin@justgive.com", "password").catch(function(error) {
//  // Handle Errors here.
//  var errorCode = error.code;
//  var errorMessage = error.message;
//  console.log("Error: " + errorMessage);
//});

//logout method
function logout(){
    firebase.auth().signOut().then(function() {
        console.log("Sign out successful");
        }).catch(function(error) {
          console.log(error);
        });
}

//clothing appeals form
$('#form1').on('submit', event => {
    //get input value
    const category = "Clothing";
    const gender = $('#cInputGender').val();
    const numReq = $('#cInputNumber').val();
    const item = $('#cInputItem').val();
    const size = $('#inputSize').val();
    const age = $('#cInputAge').val();
    const dropOffLocation = $('#cInputCity').val();
    const maxNum = $('#cInputMaxNum').val();
    
    //push user input to firebase
    alert("Appeal for " + item + " added successfully.");
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

//food appeals form
$('#form2').on('submit', event => {
      //get input values
      const category = "Food";
      const numReq = $('#fInputNumber').val();
      const item = $('#fInputItem').val();
      const foodType = $('#inputFoodType').val();
      const dropOffLocation = $('#fInputCity').val();
      const maxNum = $('#fInputMaxNum').val();
      alert("Appeal for " + item + " added successfully.");
      
      //push user input to firebase
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
    
//Household appeals form
$('#form3').on('submit', event => {
      //get input values
      const category = "Household";
      const type = $('#hInputType').val();
      const numReq = $('#hInputNumber').val();
      const item = $('#hInputItem').val();
      const condition = $('#hInputCondition').val();
      const dropOffLocation = $('#hInputCity').val();
      const maxNum = $('#hInputMaxNum').val();
      alert("Appeal for " + item + " added successfully.");
        
      //push user input to firebase
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
        
//Hygiene appeals form
$('#form4').on('submit', event => {
      //get input values
      const category = "Hygiene";
      const gender = $('#hyInputGender').val();
      const numReq = $('#hyInputNumber').val();
      const item = $('#hyInputItem').val();
      const age = $('#hyInputAge').val();
      const dropOffLocation = $('#hyInputCity').val();
      const maxNum = $('#hyInputMaxNum').val();
      alert("Appeal for " + item + " added successfully.");
      
      //push user input to firebase
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
        
//Kids appeals form
$('#form5').on('submit', event => {
        //get input values
        const category = "Kids";
        const gender = $('#kInputGender').val();
        const numReq = $('#kInputNumber').val();
        const item = $('#kInputItem').val();
        const age = $('#inputAge').val();
        const dropOffLocation = $('#kInputCity').val();
        const maxNum = $('#kInputMaxNum').val();
        alert("Appeal for " + item + " added successfully.");
    
        //push user input to firebase
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

//Misc appeals form
$('#form6').on('submit', event => {
    //get input values
    const category = "Miscellaneous";
    const item = $('#mInputItem').val();
    const numReq = $('#mInputNumber').val();
    const description = $('#inputDescription').val();
    const dropOffLocation = $('#mInputCity').val();
    const maxNum = $('#mInputMaxNum').val();
    alert("Appeal for " + item + " added successfully.");
    
    //push user input to firebase
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


//store reference to donations/clothing
var donRefC = firebase.database().ref("Donations/Clothing/");
//snapshot 'clothing' upon updates
donRefC.on("child_added", function(snapshot) {
//get values from each JSON object in branch
var newDonation = snapshot.val();
var key = snapshot.key;
        //table content
        var content = "";
            //add new table row with snapshot vals
            content += "<tr>";
            content += "<td id>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.age + "</td>";
            content += "<td>" + newDonation.gender + "</td>";
            content += "<td>" + newDonation.size + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRow(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
            $("#clothTable").append(content);
});

//get snapshot of food donations and add to table
var donRefF = firebase.database().ref("Donations/Food/");
donRefF.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var key = snapshot.key;
        var content = "";
            content += "<tr>";
            content += "<td>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.expiryDate + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRowF(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
            $("#FoodTable").append(content);
    
});
    
//get snapshot of household donations and add to table
var donRefH = firebase.database().ref("Donations/Household/");
donRefH.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var key = snapshot.key;
        var content = "";
            content += "<tr>";
            content += "<td>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.type + "</td>";
            content += "<td>" + newDonation.condition + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRowH(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
        $("#homeTable").append(content);
});

//get snapshot of hygiene donations and add to table
var donRefHy = firebase.database().ref("Donations/Hygiene/");
donRefHy.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var key = snapshot.key;
        var content = "";
            content += "<tr>";
            content += "<td>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.gender + "</td>";
            content += "<td>" + newDonation.age + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRowHy(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
        $("#hygTable").append(content);
});

//get snapshot of kids donations and add to table
var donRefKi = firebase.database().ref("Donations/Kids/");
donRefKi.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var key = snapshot.key;
        var content = "";
            content += "<tr>";
            content += "<td>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.age + "</td>";
            content += "<td>" + newDonation.gender + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRowK(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
        $("#kidsTable").append(content);
});

//get snapshot of misc donations and add to table
var donRefM = firebase.database().ref("Donations/Miscellaneous/");
donRefM.on("child_added", function(snapshot) {
var newDonation = snapshot.val();
var key = snapshot.key;
        var content = "";
            content += "<tr>";
            content += "<td>" + newDonation.donationId + "</td>";
            content += "<td>" + newDonation.item + "</td>";
            content += "<td>" + newDonation.amount + "</td>";
            content += "<td>" + newDonation.location + "</td>";
            content += "<td>" + newDonation.date + "</td>";
            content += "<td>" + newDonation.userName + "</td>";
            content += "<td>" + newDonation.userEmail + "</td>";
            content += "<td>" + newDonation.userNumber + "</td>";
            content += "<td><button id='btnId' onClick='deleteRowM(this)'>" + "Donated" + "<button></td>";
            content += "</tr>";
        $("#miscTable").append(content);
});


//remove donation from incoming table when delivered
function deleteRow(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("clothTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("clothTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("clothTable").rows[i].cells[5].innerHTML;
    var donLoc = document.getElementById("clothTable").rows[i].cells[6].innerHTML;
    var donDate = document.getElementById("clothTable").rows[i].cells[7].innerHTML;
    var donator = document.getElementById("clothTable").rows[i].cells[8].innerHTML;
    var donContact = document.getElementById("clothTable").rows[i].cells[10].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Clothing").child(donKey).remove(); 
    document.getElementById("clothTable").deleteRow(i);
}

function deleteRowF(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("FoodTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("FoodTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("FoodTable").rows[i].cells[2].innerHTML;
    var donLoc = document.getElementById("FoodTable").rows[i].cells[5].innerHTML;
    var donDate = document.getElementById("FoodTable").rows[i].cells[4].innerHTML;
    var donator = document.getElementById("FoodTable").rows[i].cells[6].innerHTML;
    var donContact = document.getElementById("FoodTable").rows[i].cells[8].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Food").child(donKey).remove(); 
    document.getElementById("FoodTable").deleteRow(i);
}

function deleteRowH(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("homeTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("homeTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("homeTable").rows[i].cells[4].innerHTML;
    var donLoc = document.getElementById("homeTable").rows[i].cells[5].innerHTML;
    var donDate = document.getElementById("homeTable").rows[i].cells[6].innerHTML;
    var donator = document.getElementById("homeTable").rows[i].cells[7].innerHTML;
    var donContact = document.getElementById("homeTable").rows[i].cells[9].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Household").child(donKey).remove(); 
    document.getElementById("homeTable").deleteRow(i);
}

function deleteRowHy(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("hygTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("hygTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("hygTable").rows[i].cells[4].innerHTML;
    var donLoc = document.getElementById("hygTable").rows[i].cells[5].innerHTML;
    var donDate = document.getElementById("hygTable").rows[i].cells[6].innerHTML;
    var donator = document.getElementById("hygTable").rows[i].cells[7].innerHTML;
    var donContact = document.getElementById("hygTable").rows[i].cells[9].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Hygiene").child(donKey).remove(); 
    document.getElementById("hygTable").deleteRow(i);
}

function deleteRowK(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("kidsTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("kidsTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("kidsTable").rows[i].cells[4].innerHTML;
    var donLoc = document.getElementById("kidsTable").rows[i].cells[5].innerHTML;
    var donDate = document.getElementById("kidsTable").rows[i].cells[6].innerHTML;
    var donator = document.getElementById("kidsTable").rows[i].cells[7].innerHTML;
    var donContact = document.getElementById("kidsTable").rows[i].cells[9].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Kids").child(donKey).remove(); 
    document.getElementById("kidsTable").deleteRow(i);
}


function deleteRowM(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    //get info to be passed to delvered table
    var donKey = document.getElementById("miscTable").rows[i].cells[0].innerHTML;
    var donItem = document.getElementById("miscTable").rows[i].cells[1].innerHTML;
    var donAm = document.getElementById("miscTable").rows[i].cells[2].innerHTML;
    var donLoc = document.getElementById("miscTable").rows[i].cells[3].innerHTML;
    var donDate = document.getElementById("miscTable").rows[i].cells[4].innerHTML;
    var donator = document.getElementById("miscTable").rows[i].cells[5].innerHTML;
    var donContact = document.getElementById("miscTable").rows[i].cells[7].innerHTML;
    alert("Item Donated Successfully!");
    //add to delievered branch in db
    donated.child(donKey).set({
        "appealid": donKey,
        "item": donItem,
        "amount": donAm,
        "location": donLoc,
        "date": donDate,
        "name": donator,
        "contact": donContact
    });
    //remove from database and clothing table without refreshing page
    firebase.database().ref("Donations/Miscellaneous").child(donKey).remove(); 
    document.getElementById("miscTable").deleteRow(i);
}

//delivered db branch reference
var delRef = firebase.database().ref("Delivered/");
//get snapshot upon updates
delRef.on("child_added", function(snapshot) {
//JSON object values
var deliveries = snapshot.val();
    //add to donated table
    var donatedTab = "";
    donatedTab += "<tr>";
    donatedTab += "<td>" + deliveries.appealid + "</td>";
    donatedTab += "<td>" + deliveries.item + "</td>";
    donatedTab += "<td>" + deliveries.amount + "</td>";
    donatedTab += "<td>" + deliveries.location + "</td>";
    donatedTab += "<td>" + deliveries.date + "</td>";
    donatedTab += "<td>" + deliveries.name + "</td>";
    donatedTab += "<td>" + deliveries.contact + "</td>";
    donatedTab += "<td><button id='btnId' onClick='itemUsed(this)'>" + "Distributed" + "<button></td>";
    donatedTab += "</tr>";
    $("#donatedTable").append(donatedTab);
});


function itemUsed(r) {
    //get reference to table row when donated
    var i = r.parentNode.parentNode.rowIndex;
    var donKey = document.getElementById("donatedTable").rows[i].cells[0].innerHTML;
    var donAm = document.getElementById("donatedTable").rows[i].cells[2].innerHTML;
    var amount = prompt("How many items were distributed?");
    parseInt(amount, 10);
    if(amount < donAm){
        var newAm = donAm - amount;
        firebase.database().ref("Delivered").child(donKey).update({
        amount: newAm
      });
    } else if(amount > donAm){
        alert("Value entered is more than amount in storage. " + amount + " of these are available for distribution." );
    } else {
        //remove from database and donated table without refreshing page
        firebase.database().ref("Delivered").child(donKey).remove(); 
        document.getElementById("donatedTable").deleteRow(i);
    }
    
    location.reload();
}


document.getElementById("clothingT").click();


//display content from tabs on click
function openCat(evt, catName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    // Get all tabcontent elements and hide them
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //remove active class from all tabs
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // tab on click() display the tabcontant and add class active
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}

//search clothing
function myFunction1() {
  var input, filter, table, tr, td, td2, td3, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("clothTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[6];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//search food
function myFunction2() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("FoodTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//search household
function myFunction3() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput3");
  filter = input.value.toUpperCase();
  table = document.getElementById("homeTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//search hygiene
function myFunction4() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput4");
  filter = input.value.toUpperCase();
  table = document.getElementById("hygTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//search kids
function myFunction5() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput5");
  filter = input.value.toUpperCase();
  table = document.getElementById("kidsTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//search misc
function myFunction6() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput6");
  filter = input.value.toUpperCase();
  table = document.getElementById("miscTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//search donated items
var content = "";
function myFunction7() {
  var input, filter, table, tr, td,td2, am, total, i, items;
  input = document.getElementById("searchInput7");
  filter = input.value.toUpperCase();
  table = document.getElementById("donatedTable");
  tr = table.getElementsByTagName("tr");
  total = 0;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
            am = document.getElementById("donatedTable").rows[i].cells[2].innerHTML;
            var am2 = parseInt(am, 10);
            total = total + am2;
            document.getElementById("numInStorage").innerHTML = total;
            document.getElementById("totalBox").style.visibility = "visible";
      } else {
        tr[i].style.display = "none";
      }  
  } 
}
}