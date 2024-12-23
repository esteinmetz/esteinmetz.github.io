/* Triggers */
function addHeaderFooter() {
    /* Navbar */
    var nav = document.getElementById("navbarSupportedContent");
    var ul = document.createElement("ul");
    ul.className = "navbar-nav mr-auto";

    var navItems = [
        {href: "/index.html", txt: "Home"},
        {href: "/HandsomeQuest.html", txt: "~Handsome Quest~", style: "border-style:hidden hidden hidden solid"},
        {href: "/archive/HandsomeQuest.html", txt: "Archive", style: "border-style:hidden solid hidden hidden"},
        {href: "/Undefined.html", txt: "~Undefined~"},
        {href: "/archive/Undefined.html", txt: "Archive", style: "border-style:hidden solid hidden hidden"},
        {href: "/about.html", txt: "About"},
        {href: "https://bsky.app/profile/dannybones.bsky.social", txt: "News"}
    ];

    //Home
    var li, a;
    for(var i = 0; i < navItems.length; i++) {
        li = document.createElement("li");
        li.className = "nav-item";
        a = document.createElement("a");
        a.className = "nav-link";
        a.href = navItems[i].href;
        a.innerText = navItems[i].txt;
        a.style = navItems[i].style;
        li.appendChild(a);

        ul.appendChild(li);
    }
    nav.appendChild(ul);

    /* Footer */
    var footer = document.createElement("footer");
    footer.className = "static-bottom bg-secondary";
    var div = document.createElement("div");
    div.className = "text-center";
    div.innerText = "Copyright 2019 Handsome Quest"
    footer.appendChild(div);
    document.body.appendChild(footer);
}

/* Tools */
function getMaxPages() {
    return imgHeaders.length-1;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1)
        urlparameter = getUrlVars()[parameter];
    return urlparameter;
}

function getURLNoParam() {
    return window.location.href.split('?')[0];
}
