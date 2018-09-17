function checkCustomFields() {
	
	var errMessageModel = $('.erw-error-msg').text();
	var errMessageBumper = $(".bump-error-msg").text();	
	
	$('#quantity-grp').parent('.panel-footer').prepend('<div class="erw-error-msg text-danger hidden"><i class="fa fa-hand-o-right" aria-hidden="true"></i> <a href="#handymodel">' + errMessageModel + '</a></div><div class="bump-error-msg text-danger hidden"><i class="fa fa-hand-o-right" aria-hidden="true"></i> <a href="#bumperfields">' + errMessageBumper + '</a></div>');
	
	$('button.submit').on('click', function () {
		$( ".eigenschaftwert-custom" ).map(function (){
			if( !$(this).val() ) {
				$(this).parent('.panel-body').addClass('required has-error');
				$('.erw-error-msg').removeClass('hidden');					              
			} else {
				$(this).parent('.panel-body').removeClass('required has-error');
				$('.erw-error-msg').addClass('hidden');
			}			             
		});
		var checkBoxBumper = $("#item5[type='checkbox']");
		$(checkBoxBumper).prop("checked", function(i, v){
			if(v == true) {
				$( "#bumperSize input" ).each(function (){
					if( !$(this).val() ) {
						$('#bump').removeClass('hidden');
						$('.bump-error-msg').removeClass('hidden');	
						$(this).addClass("has-error");							
					} else {
						$(this).removeClass("has-error");					
					}			
				});
			} else {
				$('.bump-error-msg').addClass('hidden');				
			}
		});			
		
		var aTag = $("#erw");		
		if(!$( ".eigenschaftwert-custom").val()) {			
			$('html, body').animate({scrollTop: aTag.offset().top - 300},'slow');
		}							
	});
	
	$("#bumperSize input").each(function(){		
		$(this).change(function(e){			
			if($(this).val() != '') {
				$(this).removeClass("has-error");
			} else {
				$(this).addClass("has-error");
			}
      
			if($("#uoq").val() && $("#uol").val() && $("#umq").val() && $("#uml").val() ) {
				$('.bump-error-msg').hide();
			} else {
				$('.bump-error-msg').show();				
			}		      								
		});
		$(this).on( "keydown", function( event ){
			console.log(event.type + ": " +  event.which);
			if(event.which == 69 || event.which == 187 || event.which == 189 ){
				alert('Numbers only allowed');
				return false;
			}
		});
	});
	$( ".eigenschaftwert-custom").change(function(){
		if($(this).val()) {
			$(".erw-error-msg").hide();
			$(this).parent('.panel-body').removeClass('required has-error');
		}
	});
	
	$("#item5").change(function(){
		var checkBox = $(this);
		$(checkBox).prop("checked", function(i, v){
			//console.log(i + ':' + v);
			if(v == true) {
				$("#bumperSize input").prop("required", true);
			} else {
				$("#bumperSize input").prop("required", false);
				$( "#bumperSize input").val('');
			}
		});
		$(".bumper-size-fields").toggleClass("show");
		
		$(this).parent("label").css("color", "#555");
	});
}
