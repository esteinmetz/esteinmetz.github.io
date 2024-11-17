//Add email address here encoded from https://www.base64encode.org/
var encEmail = "ZmFrZUB0ZXN0LmNvbQ==";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
