/*
 *@todo:
 * -max page (dynamic)
 */
/* Triggers */
window.onload = function() {
    var last=getMaxPages();
    var pg = parseInt(getUrlParam('p', 1));
    if(!pg) pg=1;
    document.getElementById('imgComic').src='res/img/' +pg+ '.gif';
    $('#txtComic').load('res/txt/' +pg+ '.txt');
    document.getElementById('navPrevious').href='index.html?p=' +(pg-1);
    document.getElementById('navNext').href='index.html?p=' +(pg<last?pg+1:pg);
    document.getElementById('navLast').href='index.html?p=' +last;

    test();
}



/* Tools */
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function getMaxPages() {
    return 2;
}

function test() {
    var num=0;
    /*
    $.ajax({url: "127.0.0.1:5500/Dan%20(NC)/res/img"})
    .done(function( data ) {      
        $(data).find("tbody tr a").each(function(i) {
//            if(i>=4) 
            num=num++;
        });
    })
    */

//   alert($('#txtTest').load('res/txt/').toString());

/*
alert('I got here');
    $.ajax({
        url: "res/img/",
        success: function(data) {
            var parser = new DOMParser(),
                doc = parser.parseFromString(data, 'text/html');

            //output the file table
//            $("#files").append(doc.querySelector('table').outerHTML);

            //or return the number of files
            //tr = icon, filename, date, size, desc
            //consider all rows with a size value holding a number as a vlid file
            var fileCount = 0,
                rows = doc.querySelector('table').querySelectorAll('tr');

            for (var i=0;i<rows.length;i++) {
                if (rows[i].children[3]) {
                    if (parseInt(rows[i].children[3].innerText)>0) fileCount++;         
                }
            }
            $("#txtTest").text(fileCount+' files');
        }
    });
*/

    return num;
}