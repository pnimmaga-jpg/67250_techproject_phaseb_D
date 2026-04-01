var x = 7;
var y = 5;
var z = x+y;
console.log(z);
var A = "hello";
var B = " World";
var C = A+B;
console.log(C);

console.log(typeof(x));
console.log(C.length);

function mysumnPrint(x1, x2) {
    var x3 = x2 + x1;
    console.log(x3);
}

mysumnPrint(2, 1);
mysumnPrint("2", "1");

console.log("C.length:");
console.log(C.length);
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
        console.log(z);
    }
else {
    console.log("good job!");
}


L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana1(L){
//     for (let i = 0; i < L.length; i++){
//         if(L[i] == "Banana"){
//             alert("Banana found");
//         }
//     }
// }
// findTheBanana1(L1);
// findTheBanana1(L2);
// function findTheBanana2(L) {
//     L.forEach(function(fruit) {
//         if (fruit == "Banana") {
//             alert("Found it!");
//         }
//     }
//     );
// }
// findTheBanana2(L1);
// findTheBanana2(L2);

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

function addYear(){
    var now = new Date();
    console.log(now);
    var year = now.getFullYear();
    document.getElementById("copyYear").innerHTML = "© " +  year + " MonoMuse. All rights reserved ";
}


/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

var now = new Date();
var hour = now.getHour;

function greeting(hour) {
    let message = "";
    if (hour < 5 || hour >= 20) {
        message = "Good night and welcome to MonoMuse!";
    } 
    else if (hour < 12) {
        message = "Good morning and welcome to MonoMuse!";
    } 
    else if (hour < 18) {
        message = "Good afternoon and welcome to MonoMuse!";
    } 
    else {
        message = "Good evening and welcome to MonoMuse!";
    }
    document.getElementById("greeting").innerHTML = message;
}

addYear();

if (document.getElementById("greeting")) {
    greeting(now.hour);
}

ActiveNav();
