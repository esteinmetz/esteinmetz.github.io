/* Triggers */
window.onload = function() {
    this.addHeaderFooter();

    var images = document.getElementById("imageArchive");
    
    var figure, img, figcaption, a;
    for(var i = 1; i <= getMaxPages(); i++) {
        figure = document.createElement("figure");
        figure.className = "figure";

        img = document.createElement("img");
        img.className = "img-thumbnail";
        img.height = img.width = "100";
        img.src = "res/img/"+i+".gif";
        img.alt = "image"+i;
        figure.appendChild(img);

        figcaption = document.createElement("figcaption");
        figcaption.className="figure-caption";
//        figcaption.innerHTML = imgHeaders[i];

        a = document.createElement("a");
        a.href = "index.html?p="+i;
        a.innerHTML = imgHeaders[i];
        figcaption.appendChild(a);
        figure.appendChild(figcaption);

        images.appendChild(figure);
    }
}
