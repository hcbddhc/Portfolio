//button links
function toRabbitat() { 
            window.location.href = "rabbitats.html";
        } 
function toMacaron() { 
            window.location.href = "macaron.html";
        } 

function toRabbitatProject() { 
            window.location.href = "https://www.figma.com/proto/OYqhVFOScMYtIJVII5JH9Z/IAT-235---P4?page-id=23%3A2&type=design&node-id=742-256&viewport=473%2C268%2C0.02&t=sOBE6Pxd1Rep1bsK-1&scaling=scale-down&starting-point-node-id=742%3A256&show-proto-sidebar=1&mode=design";
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