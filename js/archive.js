/* Triggers */
window.onload = function() {
    this.addHeaderFooter();

    var images = document.getElementById("imageArchive");
    
    var div, figure, img, figcaption, a, span;
    for(var i = 1; i <= getMaxPages(); i++) {
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
}
