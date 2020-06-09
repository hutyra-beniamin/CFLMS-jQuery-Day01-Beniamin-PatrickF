/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
$("*").css("background-color", "yellow");

// all p elements

$("p").css("background-color", "blue");

// the p element with an ID of "intro"

$("#intro").css("background-color", "red");

// all elements with a class of "note"
$(".note").css("background-color", )

// all DIV elements with a class of note

$("div .note").css("background-color", "black");
// all p elements in the article element

$("article p").css("color", "grey");

// the last element in any section which is a p tag

$("p:last").css("color", "green");

// the first paragraph on the page

$("p:first").css("background-color", "yellow");

// all p elements which have a link
$("[href]").css("color", "blue");

// the second li within nested ul element

$("ul li:eq(1)").css("background-color", "greenyellow");

// every second and third p element

$("p:nth-child(2n),p:nth-child(3n)").css("color", "white");