var listContainer = $("#tab-tab3-name ul li");
var btnText = $("#btntext").attr("data-name");

if (listContainer.length > 20) {
	$(listContainer).slice(20).toggle();
	$("#tab-tab3-name").append("<button id='showmore' class='btn btn-default'></button>");
	$('#showmore').html(btnText + ' ' + '<i class="fa fa-chevron-down" aria-hidden="true" style="font-size: 12px; padding-left: 7px;"></i>');
	$('#showmore').on('click', function(){
		$('i', this).toggleClass('fa-chevron-up fa-chevron-down');
		(listContainer).show();
		$(this).click(function (){
			(listContainer).slice(21).toggle();
		});
	});	
};