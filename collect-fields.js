function collectFields() {	
	
	$("#uoq, #uol, #umq, #uml, #rutschhemmend").bind('keypress blur', function(){
		var checkBox = $("#rutschhemmend");
		($(checkBox).is(":checked")) ? $(checkBox).val("rutschhemmend") : $(checkBox).val("");
 
		$("input.bumper").val('UOQ = ' + $("#bumperSize input#uoq").val() + " UOL = " +
						 $("#bumperSize input#uol").val() + " UMQ = " +
						 $("#bumperSize input#umq").val() + " UML = " +
						 $("#bumperSize input#uml").val() + " | " +
						 $(checkBox).val()
						 );
	});	
}
