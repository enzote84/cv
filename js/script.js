// Functions:
function menuHome() {
    /*$("#cv-article").html("Home");
    $("#home-menu").addClass("visited");
    $("#education-menu").removeClass("visited");
    $("#work-menu").removeClass("visited");
    */
    $("nav a.w3-green").removeClass("w3-green");
    $("#home-menu").addClass("w3-green");
    $("#collapsable-menu").removeClass("w3-show");
    $("#collapsable-menu").addClass("w3-hide");
	$("#home-article").removeClass("w3-hide");
	$("#home-article").addClass("w3-show");
	$("#education-article").removeClass("w3-show");
    $("#education-article").addClass("w3-hide");
	$("#work-experience-article").removeClass("w3-show");
	$("#work-experience-article").addClass("w3-hide");
}

function menuEducation() {
    $("nav a.w3-green").removeClass("w3-green");
    $("#education-menu").addClass("w3-green");
    $("#collapsable-menu").removeClass("w3-show");
    $("#collapsable-menu").addClass("w3-hide");
    $("#home-article").removeClass("w3-show");
	$("#home-article").addClass("w3-hide");
	$("#education-article").removeClass("w3-hide");
    $("#education-article").addClass("w3-show");
	$("#work-experience-article").removeClass("w3-show");
	$("#work-experience-article").addClass("w3-hide");
}

function menuWorkExperience() {
    $("nav a.w3-green").removeClass("w3-green");
    $("#work-experience-menu").addClass("w3-green");
    $("#collapsable-menu").removeClass("w3-show");
    $("#collapsable-menu").addClass("w3-hide");
    $("#home-article").removeClass("w3-show");
	$("#home-article").addClass("w3-hide");
	$("#education-article").removeClass("w3-show");
    $("#education-article").addClass("w3-hide");
	$("#work-experience-article").removeClass("w3-hide");
	$("#work-experience-article").addClass("w3-show");
}

function menuCollapse() {
    $("#collapsable-menu").toggleClass("w3-show", "w3-hide");
}

