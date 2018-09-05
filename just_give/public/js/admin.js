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
      var appeals = database.ref("appealssss");
       
      $('#form1').on('submit', event => {
          event.preventDefault();
          const category = $('#category').val();
          const numReq = $('#inputNumber').val();
          alert("Category: " + category + " InputNum: " + numReq);
          appeals.push({
              "Category": category,
              "Number Required": numReq
          });
      });
  });


/*var appeals = firebase.database().ref("appeals");

 /*$(function(){
         //Initialize Firebase
          var config = {
            apiKey: "AIzaSyD8XsXsfGwh4QgJl5JCihd8zaq8dipOMlQ",
            authDomain: "justgive-cb9de.firebaseapp.com",
            databaseURL: "https://justgive-cb9de.firebaseio.com",
            projectId: "justgive-cb9de",
            storageBucket: "justgive-cb9de.appspot.com",
            messagingSenderId: "1011043800246"
          };
          firebase.initializeApp(config);
    
        $('#form1').on('submit', event => {
            event.preventDefault();
            const category = $('#category').val();
            const numReq = $('#inputNumber').val();
            alert("Category: " + category + " InputNum: " + numReq);
            appeals.push({
                "Category": category,
                "Number Required": numReq
            });
        });
});*/
