
function show_image(src) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = "CV";

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}