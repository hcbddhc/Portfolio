//button links
function toClosetShare() { 
    window.location.href = "closetshare.html";
} 
function toWealthsimple() { 
    window.location.href = "wealthsimple.html";
} 
function toCraftConnect() { 
    window.location.href = "craftconnect.html";
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

//for navigation bar scroll color change
window.onscroll = function() {
    if(window.scrollY!=0){
        document.getElementById("navigation-wrapper").style.backgroundColor = "#1e1e1e";
    }else if(window.scrollY==0){
        document.getElementById("navigation-wrapper").style.backgroundColor = "#222222";
    }
};

//for section slide up animation
function revealSections() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
        section.classList.add("visible");
        }
    });
    }

    window.addEventListener("scroll", revealSections);
    window.addEventListener("load", revealSections);
