function fabreblocks() {
		
	$(".fabre-block").each(function(index){		
		$(this).find(".row").slice(2).wrapAll($('<div id="group-design"></div>'));			
	});
		
	var ind = $('.kinderbettwasche #group-design');
	$(ind).hide();

	$('.kinderbettwasche .divider-img span').addClass('opener');
				
	$('.divider-img').click(function(){
		$(this).prev('#group-design').toggle('fast');
		$(this).toggleClass('active');		
	});
}  
    
$( document ).ready(function() {
	
	fabreblocks();
	
});
