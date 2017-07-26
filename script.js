//$(function() {
// on box click, ticket image disappears and form appear
var reservations = [];
var reservedSeat = "";
var hoveredSeat = "";

$(".box").click(function() {
	$("#ticketImg").css("display", "none");		//hides the ticket image
	$("#resForm").css("display", "block");		//displays reservation form
	reservedSeat = $(this).attr("id");
	$("#inputName").focus();					//sets focus to name input
	
});

$("button").click(function() {
	$("#ticketImg").css("display", "block");	//displays ticket image
	$("#resForm").css("display", "none");		//hides reservation form
	$("#" + reservedSeat).css("backgroundColor", "red").addClass("reserved");	//changes the color of the reserved seat box
	reservations.push({name: $("#inputName").val(), email: $("#inputEmail").val(), seat: reservedSeat}) //adds an object to the reservations array with user info
	$("#inputName").val("");					//reset name field
	$("#inputEmail").val("");					//reset email field
});

$(".box").mouseover(function() {
	hoveredSeat = $(this).attr("id");

	for (var i = 0; i < reservations.length; i++) {
		if(hoveredSeat === reservations[i].seat) {
			// $("#output").html("<p>Reservation Information:" + "<br>" + "Name: " + reservations[i].name 
			//  	+ "<br>" + "Email: " + reservations[i].email + "</p>");
			console.log("Wow!");
		}
	}
	//$("#output").html("Reservation Information:" + <br> + "Name: " + )
});


//});