$(function() {
var reservations = [];
var reservedSeat = "";
var hoveredSeat = "";

$(".box").click(function() {
	reservedSeat = $(this).attr("id");			//saves clicked box's id to variable reservedSeat
	$("#reservationModal").modal("show");		//shows modal for reservation form
	$("#inputName").focus();					//sets focus to name input
	
});

$("#submitBtn").click(function() {
	$("#" + reservedSeat).css("backgroundColor", "red").addClass("reserved");	//changes the color of the reserved seat box
	reservations.push({name: $("#inputName").val(), email: $("#inputEmail").val(), seat: reservedSeat}) //adds an object to the reservations array with user info
	$("#inputName").val("");					//reset name field
	$("#inputEmail").val("");					//reset email field
	$("reservationsModal").modal("hide");		//hides modal after user submits reservation info
});

$(".box").mouseover(function() {
	hoveredSeat = $(this).attr("id");			//save seat id to variable when user hovers over a box

	// for loop runs through reservations array, and if user hovers over a reserved seat, it will match that seat id and output the reservation information
	for (var i = 0; i < reservations.length; i++) {
		if(hoveredSeat === reservations[i].seat) {		//while for loop is running, checks to see if there is a match between hovered seat id and seat id for an object in the array
			$("#output").html("<br><br><p>Reservation Information:" + "<br>" + "Name: " + reservations[i].name 
			  	+ "<br>" + "Email: " + reservations[i].email + "<br>" + "Seat Number: " + reservations[i].seat + "</p>");		//if the hovered seat id finds a match, that user's reservation info shows up on page below the seats
		}
	}
});

});