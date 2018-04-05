var listContainer = $("#tab-tab3-name ul li");

if (listContainer.length > 20) {
	$("#tab-tab3-name ul").css({
		height: '400px',
		overflowY: "scroll"
	}).append('<button class="btn btn-default" id="scrolldown" style="position: absolute; top: 50%; left: 80%;"><i class="fa fa-chevron-down" aria-hidden="true" style="font-size: 16px;"></i></button><button class="btn btn-default" id="scrollup" style="position: absolute; top: 40%; left: 80%;"><i class="fa fa-chevron-up" aria-hidden="true" style="font-size: 16px;"></i></button>')
	.attr('id', 'listscrollable');
	$(listContainer).last().attr('id', 'endlist');
}

$("#scrolldown").click(function(e) {
  $('#listscrollable').animate({
      scrollTop: $(e.currentTarget).position().top + $('#listscrollable').scrollTop()
    },
    'slow');
});
$("#scrollup").click(function(e) {
  $('#listscrollable').animate({
      scrollTop: $(e.currentTarget).position().top - $('#listscrollable').scrollTop()
    },
    'slow');
});
