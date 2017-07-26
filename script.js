$(function() {
// on box click, ticket image disappears and form appear
var reservations= [];
var reservedSeat= "";

$(".box").click(function() {
	$("#ticketImg").css("display", "none");
	$("#resForm").css("display", "block");
	reservedSeat = $(this).attr("id");
	
});

$("button").click(function() {
	$("#ticketImg").css("display", "block");
	$("#resForm").css("display", "none");
	$("#" + reservedSeat).css("backgroundColor", "red");
});








});