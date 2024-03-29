/* Triggers */
window.onload = function() {
    this.addHeaderFooter();

    var last=getMaxPages();
    var pg = parseInt(getUrlParam('p', 1));
    if(!pg) pg=1;

    document.getElementById('hTitle').innerText = imgHeaders[pg];
    document.getElementById('imgComic').src='res/img/' +page+ '/' +pg+ '.gif';
    document.getElementById('imgComic').alt='image' + pg;
    //Disable previous button
    if(pg == 1)
        $('#navPrevious').addClass('disabled');
    else
        $('#navPrevious').removeClass('disabled');
    //disable next buttons
    if(pg < imgHeaders.length-1) {
        $('#navNext, #navLast, #navAdvance').removeClass('disabled');
        document.getElementById('txtAdvance').innerText = imgHeaders[pg+1];
    } else {
        $('#navNext, #navLast, #navAdvance').addClass('disabled');
        document.getElementById('txtAdvance').innerText = '';
    }
    $.get('res/txt/' +page+ '/' +pg+ '.txt', function(data){
        var textLines = data.split('\n');
        var para = document.createElement("p");
        para.style = "text-align:left;";
        textLines.forEach(e => {
            var span = document.createElement("span");
            span.innerHTML = e;
            if(nameFormats[e.split(':')[0]])
                span.style = "color:" + nameFormats[e.split(':')[0]];
            para.append(span);
        });
        $('#txtComic').append(para);
    })
    document.getElementById('navPrevious').href=getURLNoParam() +'?p='+ (pg-1);
    document.getElementById('navAdvance').href=document.getElementById('navNext').href=getURLNoParam() +'?p=' +(pg<last?pg+1:pg);
    document.getElementById('navLast').href=getURLNoParam()+ '?p=' +last;
}
