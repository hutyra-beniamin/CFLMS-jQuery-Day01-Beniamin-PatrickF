$(document).ready(function(){

	let readJSON = function (file) {
		let json = {}
		$.ajax({
		    'async': false,
		    'global': false,
		    'url': file,
		    'dataType': "json",
		    'success': function (data) {
		        json = data;
		    }
		});
		return json;
	};

	let familyMembers = readJSON("familyMembers.json")

	$("body").prepend(`<div class="whole-family"></div>`)
	$(familyMembers).each(function(i) {
		$(".whole-family").append(`<div class="family-member"></div>`);
		$(".family-member").last().append(`<h3>${familyMembers[i].name}</h3>`);
		$(".family-member").last().append(`<p><i>${familyMembers[i].relation}</i></p>`);
		$(".family-member").last().append(`<img src="${familyMembers[i].image}">`);
		switch (familyMembers[i].status) {
			case 1:
				$(".family-member").last().css("background-color", "red");
				break;
			case 2:
				$(".family-member").last().css("background-color", "blue");
				$(".family-member").last().css("color", "white");
				break;
			case 3:
				$(".family-member").last().css("background-color", "orange");
				break;
			default:
				$(".family-member").last().css("background-color", "grey");
		}
	});
	$(".whole-family").css({
		"display": "flex",
		"justify-content": "space-evenly"
	})
	$(".family-member").css({
		"display": "flex",
		"align-items": "center",
		"flex-wrap": "wrap",
		"flex-basis": "100%",
		"margin": "3px"
	})
	$(".family-member p, .family-member h3").css({
		"width": "100%",
		"text-align": "center"
	});
	$(".family-member img").css({
		"width": "100%",
		"height": "10vw",
		"object-fit": "cover"
	})


});