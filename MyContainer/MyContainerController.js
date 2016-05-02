({
    doInit: function(cmp){
        // Call the server controller for getting my favourite account and set it in the myFavouriteAccount aux attribute
        var bringAccountFromServer = cmp.get("c.getMyFavouriteAccount");
        
        bringAccountFromServer.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.myFavouriteAccount", response.getReturnValue());
            } else if (state === "ERROR") {
                alert('Error : ' + JSON.stringify(response.getError()));
            }
        });
        
        $A.enqueueAction(bringAccountFromServer);
        
        // Call the server controller for getting my favourite instance and set it in the myFavouriteInstance aux attribute
        var bringMyFavouriteInstanceFromServer = cmp.get("c.getMyFavouriteInstance");
        
        bringMyFavouriteInstanceFromServer.setCallback(this, function(response2){
            var state = response2.getState();
            if (state === "SUCCESS") {
                cmp.set("v.myFavouriteInstance", response2.getReturnValue());
            } else if (state === "ERROR") {
                alert('Error : ' + JSON.stringify(response2.getError()));
            }
        });
	 
        $A.enqueueAction(bringMyFavouriteInstanceFromServer);
        
        // Set a js object in the jsObject aux attribute
        cmp.set("v.jsObject", {type:"Fiat", model:"500", color:"white"});
    }
})