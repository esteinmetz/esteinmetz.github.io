//This is the line # from comic.js - 1
// So arc 1 ends at "Inspect removed branch."
var storyPanels = [{lastPage: 0}, 
    {lastPage: 10, title: 'test'},
    {lastPage: 30, title: 'test2'},
    {lastPage: 60, title: 'test3'},
];

/* Triggers */
window.onload = function() {
    this.addHeaderFooter();

    var images = document.getElementById("imageArchive");
    var last=getMaxPages();
    var lastArc=storyPanels.length-1;
    var pg = parseInt(getUrlParam('p', 1));
    if(!pg) pg=1;
    console.log(pg)
    
    var div, figure, img, figcaption, a, span;
    for(var i = storyPanels[pg-1].lastPage+1; i <= storyPanels[pg].lastPage; i++) {
        div = document.createElement("div");
        div.className = "thumbnail";

        a = document.createElement("a");
        a.className = "figcaption";
        a.href = "index.html?p="+i;

        img = document.createElement("img");
        img.className = "img-thumbnail";
        img.height = img.width = "100";
        img.src = "res/img/"+i+".gif";
        img.alt = "image"+i;

        a.appendChild(img);
        a.appendChild(document.createTextNode(imgHeaders[i]));
        div.appendChild(a);

        images.appendChild(div);
    }

    //Disable previous button
    if(pg == 1)
        $('#navPrevious').addClass('disabled');
    else
        $('#navPrevious').removeClass('disabled');
    //disable next buttons
    if(pg < storyPanels.length-1) {
        $('#navNext, #navLast, #navAdvance').removeClass('disabled');
        document.getElementById('txtAdvance').innerText = storyPanels[pg+1].title;
    } else {
        $('#navNext, #navLast, #navAdvance').addClass('disabled');
        document.getElementById('txtAdvance').innerText = '';
    }
    $('#navPrevious').attr('href', 'archive.html?p=' +(pg-1));
    $('#navNext').attr('href', 'archive.html?p=' +(pg<lastArc?pg+1:pg));
    $('#navAdvance').attr('href', 'archive.html?p=' +(pg<lastArc?pg+1:pg));
    $('#navLast').attr('href', 'archive.html?p=' +lastArc);
}
