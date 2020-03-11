/* Triggers */
window.onload = function() {
    this.addHeaderFooter();

    var last=getMaxPages();
    var pg = parseInt(getUrlParam('p', 1));
    if(!pg) pg=1;

    document.getElementById('hTitle').innerText = imgHeaders[pg];

    document.getElementById('imgComic').src='res/img/' +pg+ '.gif';
    document.getElementById('imgComic').alt='image' + pg;
    document.getElementById('txtAdvance').innerText = imgHeaders[pg];
    $('#txtComic').load('res/txt/' +pg+ '.txt');
    document.getElementById('navPrevious').href='index.html?p=' +(pg-1);
    document.getElementById('navAdvance').href=document.getElementById('navNext').href='index.html?p=' +(pg<last?pg+1:pg);
    document.getElementById('navLast').href='index.html?p=' +last;

//    test();
}
