/*
 *@todo:
 * -add navbar (dynamic)
 * -add footer (dynamic)
 * -make imgHeaders more dynamic (instead of array)
 */
/* Tools */
function getMaxPages() {
    return imgHeaders.length-1;
}
const imgHeaders = [ '', 
'Inspect the door', 
 'Is it a door?  Does it have a frame?',
'Inspect Inventory.',
'Return to crater.',
'Inspect crater.',
'Toss acorn into crater.',
'???',
'Invite the door to catch a ride on the no longer growing tree.',
'Use the knife to cut off a limb.', 
'Inspect removed branch.',
'???',
'Uh oh',
'Reject responsibility.',
'',
'Turn around.',
'Hide!',
'Rest easy knowing you are completely safe.',
'',
'',
'',
'Fuck that Smiley Bastard up.',
'The  monster makes a constitution saving throw to see if his eyes are destroyed.',
'Fine, do an investigation check on the Smiley Bastard',
'Can Handsome Man pocket some teeth to stab others later?',
'Can HM investigate the hole that the tree came from?',
'Use the monster teeth as climbing pitons',
'LOOT.  THAT. BAG.',
'',
'Equip an empty bottle',
'Bottle up some of the blue liquid',
'Examine newly aquired Blue Liquid Bottle',
'Take the backpack.',
'',
'',
'',
'Give the Purple Worm a kiss.',
'',
'Cast animal friendship on the worm and turn it into personal mount',
'Rip out a tooth?',
'Are there any other characters in this story?',
'',
'Go fishing.  The maeg needs protein to go with their vegitables.',
'',
'',
'Help the man out.',
'Use Thunderwave!',
'',
'',
'MAGIC MISSLE!',
'',
'Fine, then Druidcraft a pretty flower on his head.',
'',
'',
'',
'',
'',
'',
'Kick off the Smiley Bastard to propel Handsom out of the water',
'',
'',
'',
'Use dimension door back up to the surface.',
'',
'',
'Dude, fix your hair',
'',
'Handsome, take a sample of the water.',
'Nice.',
'',
'Maeg, cast cure wounds.',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Retrieve item from the chest.',
'Examine bottle.',
'',
'Maeg, tell your story',
'Begin reminiscing.',
'',
'',
'',
'Return to Eden',
'',
'Celebrate good times.',
'',
'Take in the view.',
'Have the cape billow dramatically.',
'Could the force field serve as an artificial atmosphere?',
'That is not billowing so much as a gentle ruffling.',
'Epilepsy warning',
];

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

/* Triggers */
function addHeaderFooter() {
    /* Navbar */
    var nav = document.getElementById("navbarSupportedContent");
    var ul = document.createElement("ul");
    ul.className = "navbar-nav mr-auto";

    var navItems = [
        {href: "index.html", txt: "Home"},
        {href: "about.html", txt: "About"},
        {href: "archive.html", txt: "Archive"},
        {href: "news.html", txt: "News"}
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
