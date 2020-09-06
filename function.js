var i =0;
var date = 1; 
var todoSave9 = "9am";
var todoSave10 = "10am";
var todoSave11 = "11am";
var todoSave12 = "12pm";
var todoSave1 = "1pm";
var todoSave2 = "2pm";
var todoSave3 = "3pm";
var todoSave4 = "4pm";
var todoSave5 = "5pm";

//var listArray = [reminder[time]];

$(window).ready(function(){
  $("#9oclock").val(localStorage.getItem("9am"))  

  $("#10oclock").val(localStorage.getItem("10am"))
  
  $("#11oclock").val(localStorage.getItem("11am"))  

  $("#12oclock").val(localStorage.getItem("12pm"))  

  $("#1oclock").val(localStorage.getItem("1pm"))  

  $("#2oclock").val(localStorage.getItem("2pm"))  

  $("#3oclock").val(localStorage.getItem("3pm"))  

  $("#4oclock").val(localStorage.getItem("4pm")) 

  $("#5oclock").val(localStorage.getItem("5pm"))  

});


$("#basic-addon2").on("click",function(){
    var newToDoSave9 = $("#9oclock").val();

    localStorage.setItem(todoSave9, newToDoSave9);

    var todoStri9 = JSON.stringify(newToDoSave9);

    var todoMem9 = JSON.parse(todoStri9);
    console.log(todoMem9);

    var label = $("<p>");
      console.log(todoMem9);
      label.text(localStorage.getItem(todoSave9));
      console.log(label);
      $("#nine").append(label);
});

$("#basic-addon3").on("click",function(){
    var newToDoSave10 = $("#10oclock").val();

    localStorage.setItem(todoSave10, newToDoSave10);

    var todoStri10 = JSON.stringify(newToDoSave10);

    var todoMem10 = JSON.parse(todoStri10);
    console.log(todoMem10);
    
    var label = $("<p>");
      console.log(todoMem10);
      label.text(localStorage.getItem(todoSave10));
      console.log(label);
      $("#TEN").append(label);
      

    
});

$("#basic-addon4").on("click",function(){
    var newToDoSave11 = $("#11oclock").val();

    localStorage.setItem(todoSave11, newToDoSave11);

    var todoStri11 = JSON.stringify(newToDoSave11);

    var todoMem11 = JSON.parse(todoStri11);
    console.log(todoMem11);
    
    var label = $("<p>");
      console.log(todoMem11);
      label.text(localStorage.getItem(todoSave11));
      console.log(label);
      $("#TEN").append(label);
      

    
});
  
$("#basic-addon5").on("click",function(){
    console.log("12 o'clock");
    var newToDoSave12 = $("#12oclock").val();

    localStorage.setItem(todoSave12, newToDoSave12);

    var todoStri12 = JSON.stringify(newToDoSave12);

    var todoMem12 = JSON.parse(todoStri12);
    console.log(todoMem12);
    
    var label = $("<p>");
      console.log(todoMem12);
      label.text(localStorage.getItem(todoSave12));
      console.log(label);
      $("#TEN").append(label);
      

    
});  

$("#basic-addon6").on("click",function(){
    var newToDoSave1 = $("#1oclock").val();

    localStorage.setItem(todoSave1, newToDoSave1);

    var todoStri1 = JSON.stringify(newToDoSave1);

    var todoMem1 = JSON.parse(todoStri1);
    console.log(todoMem1);
    
    var label = $("<p>");
      console.log(todoMem1);
      label.text(localStorage.getItem(todoSave1));
      console.log(label);
      $("#TEN").append(label);
      

    
});

$("#basic-addon7").on("click",function(){
    var newToDoSave2 = $("#2oclock").val();

    localStorage.setItem(todoSave2, newToDoSave2);

    var todoStri2 = JSON.stringify(newToDoSave2);

    var todoMem2 = JSON.parse(todoStri2);
    console.log(todoMem2);
    
    var label = $("<p>");
      console.log(todoMem2);
      label.text(localStorage.getItem(todoSave2));
      console.log(label);
      $("#TEN").append(label);
      

    
});

$("#basic-addon8").on("click",function(){
    var newToDoSave3 = $("#3oclock").val();

    localStorage.setItem(todoSave3, newToDoSave3);

    var todoStri3 = JSON.stringify(newToDoSave3);

    var todoMem3 = JSON.parse(todoStri3);
    console.log(todoMem3);
    
    var label = $("<p>");
      console.log(todoMem3);
      label.text(localStorage.getItem(todoSave3));
      console.log(label);
      $("#TEN").append(label);
      

    
});

$("#basic-addon9").on("click",function(){
    var newToDoSave4 = $("#4oclock").val();

    localStorage.setItem(todoSave4, newToDoSave4);

    var todoStri4 = JSON.stringify(newToDoSave4);

    var todoMem4 = JSON.parse(todoStri4);
    console.log(todoMem4);
    
    var label = $("<p>");
      console.log(todoMem4);
      label.text(localStorage.getItem(todoSave4));
      console.log(label);
      $("#TEN").append(label);
      

    
});

$("#basic-addon10").on("click",function(){
    var newToDoSave5 = $("#5oclock").val();

    localStorage.setItem(todoSave5, newToDoSave5);

    var todoStri5 = JSON.stringify(newToDoSave5);

    var todoMem5 = JSON.parse(todoStri5);
    console.log(todoMem5);
    
    var label = $("<p>");
      console.log(todoMem5);
      label.text(localStorage.getItem(todoSave5));
      console.log(label);
      $("#TEN").append(label);
      

    
});
