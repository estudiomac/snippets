function modelsList() {
	
  // Getting field
	var inputField = $(".eigenschaftwert-destination");
	
  // Adding new class to filed in case we have more than one field with the same name
	$(inputField).each(function(){
		var fieldAddonClass = $(this).parent().prev("dt.var-name").text().toLowerCase();
		$(this).addClass(fieldAddonClass);
	});
	
  // Take the items list
	var models = $.ajax({
		url: 'phones_export.csv',
		async: false,
		timeout: 200,
		cache: true
		}).responseText;
	
  // Splits by string
	var availableModels = models.split("\n");

  // Select from visible filed and paste to hidden filed
	$("#models, .handymodell").autocomplete({
		source: availableModels,
		minLength : 3,
		change: function(){
			$(".handymodell").val($(this).val());
		}
	});
			
}
