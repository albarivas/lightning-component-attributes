({
	afterRender : function(cmp){
        
        this.superAfterRender();

        // Go through the map contained in ratingsByProduct attribute for printing its values in a div
        var ratingsByProduct = cmp.get("v.ratingsByProduct");
        
        var ratingsByProductContainer = document.getElementById('ratingsByProductContainer');
        for (key in ratingsByProduct){
            ratingsByProductContainer.innerHTML += '<p>key: ' + key + ' - value: '+ ratingsByProduct[key] + '</p>'; 
        }
	}
})