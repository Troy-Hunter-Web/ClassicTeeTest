	$(function () {
		$('.small').on('click', function () {
			$('.medium').css('border-color', 'grey');
			$('.large').css('border-color', 'grey');
			$('#size-selected').html("");
			$('#size-selected').append("S");
			$('.small').css('border-color', 'black');
		});
	});
	$(function () {
		$('.medium').on('click', function () {
			$('.small').css('border-color', 'grey');
			$('.large').css('border-color', 'grey');
			$('#size-selected').html("");
			$('#size-selected').append("M");
			$('.medium').css('border-color', 'black');
		});
	});
	$(function () {
		$('.large').on('click', function () {
			$('.medium').css('border-color', 'grey');
			$('.small').css('border-color', 'grey');
			$('#size-selected').html("");
			$('#size-selected').append("L");
			$('.large').css('border-color', 'black');
		});
	});