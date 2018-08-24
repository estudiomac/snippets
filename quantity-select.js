// Select instead input

function qtySelect() {
	
	$(".body-items select").each(function(index){
		//console.log( this.id );
		$(this).change(function(){
			//console.log("changed " + this.id)
			
			var optVal = $(this, "option:selected").val();
			
			//console.log(optVal);
			
			var qtyBox = $(this).parent(".qty-wrapper");
			$(".choose_quantity input", qtyBox).val(optVal);
			setTimeout(function(){
				$(".update-qty", qtyBox).click();
			}, 300);
		});
		var qtyBox = $(this).parent(".qty-wrapper");
		var curVal = $(".choose_quantity input", qtyBox).val();
		
		localStorage.setItem("Select1", curVal);
		localStorage.getItem("Select1");
		var localVal = localStorage.getItem("Select1");
		
		//console.log(localVal);
		
		$("option:selected", this).text('Anz. ' + localVal);
	}).get();							
}
