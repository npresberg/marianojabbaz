$(function () {
	$('.toggle-accordion').click(function (e) {
		e.preventDefault();
		console.log(this)
		$(this).closest('section').find('.accordion').slideToggle()
	})
})