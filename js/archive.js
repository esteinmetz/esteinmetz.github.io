/* Triggers */
window.onload = function() {
    var images = document.getElementById("imageArchive");
    
    var figure, img, figcaption;
    for(var i = 1; i < getMaxPages(); i++) {
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
        figcaption.id = "cap"+i;
        figcaption.load('res/hdr/' +i+ '.txt');
        figure.appendChild(figcaption);

        images.appendChild(figure);
    }

    this.addHeaderFooter();
}
