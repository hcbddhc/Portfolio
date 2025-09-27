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

function toUnfinishedSymphony() { 
    window.open("https://hcdoggo.itch.io/the-unfinished-symphony", "_blank");
} 

function toSmallButMighty() { 
    window.open("https://iat343-small-but-mighty.framer.website/", "_blank");
} 

function toRabbitatWebPrototype() { 
    window.open("https://www.figma.com/proto/OYqhVFOScMYtIJVII5JH9Z/IAT-235---P4?page-id=23%3A2&node-id=709-466&p=f&viewport=-98%2C258%2C0.06&t=EuHdoU8uq3pbUkS1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=742%3A256", "_blank");
} 

function toRabbitatMobilePrototype() { 
    window.open("https://www.figma.com/proto/OYqhVFOScMYtIJVII5JH9Z/IAT-235---P4?page-id=23%3A2&node-id=710-647&p=f&viewport=-98%2C258%2C0.06&t=EuHdoU8uq3pbUkS1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=742%3A256", "_blank");
} 

function toMacaronProject() { 
    window.open("https://github.com/siimka113/PO2", "_blank");
} 

function toCraftconnectPrototype() {
    window.open("https://www.figma.com/proto/0seKlcqLSc2nzigScHuAab/IAT-333-Project-Ideation?page-id=1520%3A1241&node-id=1524-876&p=f&viewport=466%2C262%2C0.06&t=dPg8SEiSoPTVALk4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1524%3A876&show-proto-sidebar=1", "_blank");
}

//for navigation bar scroll color change
window.onscroll = function() {
    const nav = document.getElementById("navigation-wrapper");

    if (window.scrollY !== 0) {
        nav.style.backgroundColor = "rgba(20, 20, 20, 0.85)";
        nav.style.backdropFilter = "blur(10px)";
    } else {
        nav.style.backgroundColor = "#141414";
        nav.style.backdropFilter = "none";
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
