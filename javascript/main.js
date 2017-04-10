function getData() {
    $.ajax({ url: "https://teamtreehouse.com/geoffwebb.json" }).done(function(data) {
        var ajaxData = data.badges;
        addSongs(ajaxData);
    }).fail(function(error) {
        console.log("Failed", error);
    }).always(function() {
        console.log("Test");
    });
}

function addSongs(ajaxData) {
    var badges = ajaxData.slice(0, 10);
    badges.forEach(function(url, index) {
        $("#root").append(`
        	<div class="col-md-3">
	        	<div class="thumbnail">
	        		<img class="image" src=${ajaxData[index].icon_url} alt="icon" style="height:100px; width:100px;">
	        	</div>
        	</div>`);

    });
}

getData();
