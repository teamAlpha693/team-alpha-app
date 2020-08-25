/*
Template Name: Doccure - HTML Mobile Template
Author: Dreamguy's Technologies
Version: 1.1
*/


"use strict";

//Fancybox
if(jQuery('[data-fancybox="gallery"]').length > 0) {
	$('[data-fancybox="gallery"]').fancybox({
	});
}

// Home Specialist Slider 
if(jQuery('.specialist-slider .swiper-container').length > 0) {
	var swiper = new Swiper('.specialist-slider .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 15,
	});
}

// Home Doctor Slider 
if(jQuery('.focused .swiper-container').length > 0) {
	var swiper = new Swiper('.focused .swiper-container', {
		slidesPerView: 1.1,
		spaceBetween: 15,
		pagination: {
        	el: '.focused .swiper-pagination',
      	},
	});
}

// Schedule Timings Slider 
if(jQuery('.schedule-timings .swiper-container').length > 0) {
	var swiper = new Swiper('.schedule-timings .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 11,
	});
}

// Search Doctor slider 
if(jQuery('.search-tag .swiper-container').length > 0) {
	var swiper = new Swiper('.search-tag .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 5,
	});
}

if($('.datetimepicker').length > 0) {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fas fa-chevron-up",
				down: "fas fa-chevron-down",
				next: 'fas fa-chevron-right',
				previous: 'fas fa-chevron-left'
			}
		});
	}

//Sidebar menu
$('.navbar .left a i').on('click', function(e) {
	e.preventDefault();
	$('.side-menu').addClass('show-menu');
	$('body').addClass('overlay-body');
});
$('.side-menu .close-btn').on('click', function(e) {
	e.preventDefault();
	$('.side-menu').removeClass('show-menu');
	$('body').removeClass('overlay-body');
});

// Checkbox Changed
$('input[type=checkbox]').change(function(){
  	if($(this).is("input[type=checkbox]:checked")) {
      	$(this).parent().closest('.item-content').addClass("menuitemshow");
  	} else {
      	$(this).parent().closest('.item-content').removeClass("menuitemshow");
  	}
});
$('input[type=radio]').click(function () {
   $('input[type=radio]:not(:checked)').parent().parent().removeClass("menuitemshow");
   $('input[type=radio]:checked').parent().parent().addClass("menuitemshow");
});  

//Filter chat list
$("#search-chat").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$(".list ul li").filter(function() {
	  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
});

// Multiple images preview in browser
// var url = window.URL || window.webkitURL; // alternate use
function readImage(file) {
  var reader = new FileReader();
  var image  = new Image();

  reader.readAsDataURL(file);  
  reader.onload = function(_file) {
  image.src = _file.target.result; // url.createObjectURL(file);
  image.onload = function() {
      var w = this.width,
          h = this.height,
          t = file.type, // ext only: // file.type.split('/')[1],
          n = file.name,
          s = ~~(file.size/1024) +'KB';
      //$('#uploadPreview').append('<img src="' + this.src + '">');
      $("#uploadPreview").append("<span>"+'<img src="' + this.src + '">'+'</span>');
  };

  image.onerror= function() {
      alert('Invalid file type: '+ file.type);
  };      
};

}
$("#choose").change(function (e) {
  if(this.disabled) {
    return alert('File upload not supported!');
  }

var F = this.files;
  if (F && F[0]) {
    for (var i = 0; i < F.length; i++) {
        readImage(F[i]);
    }
  }
});

//Clear Input Item list
function clearfunction() {
	$('.form-group span.close-icon').on('click', function() {
	  $(this).parent().parent().hide();
	});
}
//Append Input Values Service
$('.append-btn').on('click', function() {
  const services = $('#Services').val();
  if (services.length) {
    $('#profileCard').append('<li><div class="form-group">' + services + '<span class="close-icon"></span></div></li>');
    $('#data')[0].reset()
  }
  clearfunction();
});
$('.append-btn1').on('click', function() {
  const specialization = $('#Specialization').val();
  if (specialization.length) {
    $('#profileCard1').append('<li><div class="form-group">' + specialization + '<span class="close-icon"></span></div></li>');
    $('#data1')[0].reset()
  }
  clearfunction();
});

//Click trash remove div
function f1() {
	$('ul li span.trash-icon').on('click', function() {
	  $(this).parent().parent().hide();
	});
}

//Append div education
var education_details = $('.education-experience form').html();
	$('.education-experience span.add-btn').on('click', function() {
	$(".education-experience form").append(education_details);
	f1();
});

//Append div work experince
var work_details = $('.work-experience form').html();
$('.work-experience span.add-btn').on('click', function() {
	$(".work-experience form").append(work_details);
	f1();
});

//Append div Awards
var awards_details = $('.awards-experience form').html();
$('.awards-experience span.add-btn').on('click', function() {
	$(".awards-experience form").append(awards_details);
	f1();
});

//Append div Membership
var membership_details = $('.membership-experience form').html();
$('.membership-experience span.add-btn').on('click', function() {
	$(".membership-experience form").append(membership_details);
	f1();
});

//Append div Registration
var registration_details = $('.registration-col form').html();
$('.registration-col span.add-btn').on('click', function() {
	$(".registration-col form").append(registration_details);
	f1();
});