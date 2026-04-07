/* removed most comments because I don't need them anymore */

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
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  
    $("#shortIntro").show();   
  });
  

  $("#readMore").click(function(){
    $("#longIntro").show();  
    $("#readLess").show();   
    $("#readMore").hide();   
    $("#shortIntro").hide();   
  });

function addYear(){
    var now = new Date();
    console.log(now);
    var year = now.getFullYear();
    document.getElementById("copyYear").innerHTML = "© " +  year + " The Music Room. All rights reserved ";
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav li a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

var now = new Date();
var hour = now.getHours();

function greeting(hour) {
    let message = "";
    if (hour < 5 || hour >= 20) {
        message = "Good night and welcome to The Music Room!";
    } 
    else if (hour < 12) {
        message = "Good morning and welcome to The Music Room!";
    } 
    else if (hour < 18) {
        message = "Good afternoon and welcome to The Music Room!";
    } 
    else {
        message = "Good evening and welcome to The Music Room!";
    }
    document.getElementById("greeting").innerHTML = message;
}

addYear();

if (document.getElementById("greeting")) {
    greeting(hour);
}

ActiveNav();


function showTicketForm() {
    const form = document.getElementById("ticketFormContainer");
    if (form) {
        form.style.display = "block"; 
        form.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function generateCalendar() {
    var calendarBody = document.getElementById("calendar-body");
    if (!calendarBody) return;
    const now = new Date();
    const month = now.getMonth(); 
    const year = now.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    
    const scheduleHeader = document.querySelector(".main h2:last-of-type");
    if (scheduleHeader) {
        scheduleHeader.innerHTML = monthNames[month] + " " + year + " Ticket Schedule";
    }

    const firstDay = new Date(year, month, 1).getDay(); // Sunday=0, Monday=1, etc.
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarBody.innerHTML = "";
    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            
            if (i === 0 && j < firstDay) {
                // Properly aligns the 1st of the month
                cell.innerHTML = "";
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                row.appendChild(cell);
            } else {
                
                let dateString = `${monthNames[month]} ${date}, ${year}`;
                cell.innerHTML = date + `<br><button class='buy-now' onclick="showTicketForm('${dateString}')">Buy Now</button>`;
                date++;
                row.appendChild(cell);
            }
        }
        calendarBody.appendChild(row);
        if (date > daysInMonth) break;
    }
}


function showTicketForm(selectedDate) {
    var formContainer = document.getElementById("ticketFormContainer");
    var dateField = document.getElementById("selectedDateDisplay");
    if (formContainer) {
        formContainer.style.display = "block";
        
        if (dateField) {
            dateField.value = selectedDate;
        }
    }
}

generateCalendar();

function ResponsiveNavBar() {
    var nav = document.getElementById("navbar");
    
    if (nav.className === "nav_bar") {
        
        nav.className += " responsive";
    } else {
        
        nav.className = "nav_bar";
    }
}

/* Leaflet Map */
function initMap() {
    var mapContainer = document.getElementById('map');
    if (!mapContainer) return; // does this only on the page with a map
    var map = L.map('map').setView([40.4406, -79.9959], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
    var marker = L.marker([40.44183025257919, -79.98992234434853]).addTo(map);    
    marker.bindPopup("<b>The Music Room</b><br>Pittsburgh's EDM Hub.").openPopup();
}

initMap();