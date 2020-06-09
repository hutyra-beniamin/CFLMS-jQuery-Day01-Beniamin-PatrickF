$("form").submit(function(e) {

	e.preventDefault();

});

$(document).ready(function() {

	//TASK 3
	$("input").val("Search for...")
	//TASK 2
	for (i = 0; i < 5; i++) {
		$("article").append("<div></div>")
	}
	//TASK 1
	$("form").remove()
	//TASK 4
	$("article div").addClass("box")
	//TASK 5
	$("a").attr("href", "www.codefactory.wien")

});