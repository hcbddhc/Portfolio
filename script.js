//button links
function toClosetShare() { 
    window.location.href = "closetshare.html";
} 
function toRabbitat() { 
            window.location.href = "rabbitats.html";
        } 
function toMacaron() { 
            window.location.href = "macaron.html";
        } 

function toRabbitatWebPrototype() { 
    window.open("https://www.figma.com/proto/OYqhVFOScMYtIJVII5JH9Z/IAT-235---P4?page-id=23%3A2&node-id=709-466&p=f&viewport=-98%2C258%2C0.06&t=EuHdoU8uq3pbUkS1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=742%3A256");
        } 

function toRabbitatMobilePrototype() { 
    window.open( "https://www.figma.com/proto/OYqhVFOScMYtIJVII5JH9Z/IAT-235---P4?page-id=23%3A2&node-id=710-647&p=f&viewport=-98%2C258%2C0.06&t=EuHdoU8uq3pbUkS1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=742%3A256");
} 

function toMacaronProject() { 
            window.location.href = "https://github.com/siimka113/PO2";
        } 

// Add background to navigation when the user scrolls down (remove background when scroll to the top)
        window.onscroll = function() {
            if(window.scrollY!=0){
                document.getElementById("navigation-wrapper").style.backgroundColor = "#1e1e1e";
            }else if(window.scrollY==0){
                document.getElementById("navigation-wrapper").style.backgroundColor = "#222222";
            }
        };