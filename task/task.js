function display() { 
    if(document.getElementById('drink1').checked) {
        var msg = prompt("Enter Eligible Amount ", " ");
          if (msg != null) {   
           var mony= msg-1;
             document.getElementById("disp").innerHTML="Remaining amount=  "+ mony +"  JD"+" ";

             var img = document.createElement("img");
                 img.src = "../task/img/coffeebeans2.jpg";
                 var div = document.getElementById("x");
                     div.appendChild(img);


               }    }

    else if(document.getElementById('drink2').checked) {  var msg = prompt("Enter Eligible Amount ", " ");
          if (msg != null) {   
           var mony= msg-1;
             document.getElementById("disp").innerHTML= "Remaining amount=  "+ mony +"  JD"+" ";

             var img = document.createElement("img");
                 img.src = "../task/img/download.jpg ";
                 var div = document.getElementById("x");
                     div.appendChild(img);
               } 

    }
    else if(document.getElementById('drink3').checked) {  var msg = prompt("Enter Eligible Amount.. ", " ");
          if (msg != null) {   
           var mony= msg-1;
             document.getElementById("disp").innerHTML= "Remaining amount=  "+ mony +"  JD"+ " ";

             var img = document.createElement("img");
                 img.src ="../task/img/coffee black2.jpg" ;
                 var div = document.getElementById("x");
                     div.appendChild(img);
               } 

    }
    else {
        document.getElementById("disp").innerHTML = "No one selected";
    }
}

