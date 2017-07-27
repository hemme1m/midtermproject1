$(function() {
var reservations = [];
var reservedSeat = "";
var hoveredSeat = "";

$(".box").click(function() {
	if ($(this).attr("title") === "This seat is available!") {
		reservedSeat = $(this).attr("id");			//saves clicked box's id to variable reservedSeat
		$("#reservationModal").modal("show");		//shows modal for reservation form
		$("#inputName").focus();					//sets focus to name input
	}
});

$("#submitBtn").click(function() {
	$("#" + reservedSeat).css("backgroundColor", "red").addClass("reserved");	//changes the color of the reserved seat box
	reservations.push({name: $("#inputName").val(), email: $("#inputEmail").val(), seat: reservedSeat.toUpperCase()}) //adds an object to the reservations array with user info
	$("#inputName").val("");					//reset name field
	$("#inputEmail").val("");					//reset email field
	$("reservationsModal").modal("hide");		//hides modal after user submits reservation info
	console.log(reservations);
});

$(".box").mouseover(function() {
	hoveredSeat = $(this).attr("id").toUpperCase();			//save seat id to variable when user hovers over a box

	// for loop runs through reservations array, and if user hovers over a reserved seat, it will match that seat id and output the reservation information
	for (var i = 0; i < reservations.length; i++) {
		if(hoveredSeat === reservations[i].seat) {		//while for loop is running, checks to see if there is a match between hovered seat id and seat id for an object in the array
			$(this).attr("title" , reservations[i].name + ", " + reservations[i].email + ", " + reservations[i].seat );
		}
	}
});

});