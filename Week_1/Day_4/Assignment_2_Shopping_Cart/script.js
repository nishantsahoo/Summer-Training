// $ function is loaded only once HTML has completely loaded

$(function () {
    var no_of_products = 0;
    var total_cost = 0;
    setNoOfProducts();
    setTotalCost();
    

    function setTotalCost() {
    	$('#totalCost').text(total_cost);
    } // end of the function setTotalCost

    function setNoOfProducts() {
    	$('#noOfProducts').text(no_of_products);
    } // end of the function setNoOfProducts
    
    $("button").click(function() {
    	// alert(this.id + ':' +this.name); // or alert($(this).attr('id'));
    	if (this.name == "minus") {
    		alert(this.name + "Minus");
    	}

    	if (this.name == "plus") {
    		alert(this.name + "Plus");
    	}

    	if (this.name == "add-to-cart") {
    		alert(this.name + "add to cart");
    	}

    	if (this.name == "clear-cart") {
    		alert(this.name + "clear cart");
    	}

	});
    

});
