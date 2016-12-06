var loginLink = document.querySelector(".login");
var popup = document.querySelector(".login-module");
var close = document.querySelector(".modal-content-exit");
var map = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapPopupClose = document.querySelector(".modal-content-map-exit")


loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("login-module-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

map.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-map-show");
});

mapPopupClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-map-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("login-module-show");
});


window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("login-module-show")) {
            popup.classList.remove("login-module-show");
        }
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (mapPopup.classList.contains("modal-content-map-show")) {
            mapPopup.classList.remove("modal-content-map-show");
        }
    }
});


var gallery = document.querySelector(".gallery");
gallery.classList.add("gallery-live");
