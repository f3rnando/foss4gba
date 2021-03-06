// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .


// Twitter sidebar panel
jQuery(function($){
    $(".tweet").tweet({
        avatar_size: 32,
        count: 5,
        query: "foss4gBA -RT",
        loading_text: "cargando tweets...",
        refresh_interval: 30,
        template: "{avatar}{text}"
    }).bind("loaded",function(){$(this).find("a").attr("target","_blank");});
});

// Leaflet map
var map = L.map('map').setView([-34.57158, -58.43926], 14);
L.tileLayer('http://{s}.tile.cloudmade.com/ca2c213aa13f4f53923011857d2d8962/999/256/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);
var circle = L.circle([-34.57158, -58.43926], 200, {
    color: '#FFF14A',
    fillOpacity: 0.2
}).addTo(map);