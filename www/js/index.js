
$(function(){

});

function connexion() {
    document.querySelector('#myNavigator').pushPage('main_temp');
}

function deconnexion() {
    document.querySelector('#myNavigator').popPage();
}

window.fn = {};

window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};