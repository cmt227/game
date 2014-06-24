/**** Javascript file for a game called... *****
***** Author: Carsten Thue-Bludworth       *****
***** Modified: June 23, 2014              ****/

// Make the map container square with 100% height.
var map= document.getElementById("map");
var mapStyle= getComputedStyle(map);
var mapHeight= mapStyle.getPropertyValue("height");
map.style.width= mapHeight;
