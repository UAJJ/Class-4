$(document).ready(function() {
	$('.dropdown .form-group').click(function() {
		return false;
	});

	var textInputs = {};

	$('button[type=submit]').click(function() {
		textInputs = {
			"header": $('#header-input').val(),
			"sub-header": $('#sub-header-input').val(),
			"centered-second-header": $('#second-centered-header-input').val(),
			"body-l-title": $('#body-l-title-input').val(),
			"body-l-content": $('#body-l-content-input').val(),
			"body-m-title": $('#body-m-title-input').val(),
			"body-m-content": $('#body-m-content-input').val(),
			"body-r-title": $('#body-r-title-input').val(),
			"body-r-content": $('#body-r-content-input').val()
		};

		imageInput = $('input[name=optionsRadios]:checked').val();

		$.each(textInputs, function(key, value) {
			$('#'+key).fadeOut(100, function() {
				$(this).text(value);
				$(this).fadeIn(100);
			});
		});

		$('#banner-image').fadeOut(100, function() {
			$(this).attr('src', imageInput);
			$(this).fadeIn(100);
		});

		console.log(textInputs);
		console.log(imageInput);

		return false;
	});
});

