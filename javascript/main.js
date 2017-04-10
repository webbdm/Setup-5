function getData() {
    $.ajax({url: "https://teamtreehouse.com/geoffwebb.json"}).done(function(data) {
        var ajaxData = data.badges[3].icon_url;
        console.log(ajaxData);
        addSongs();
    }).fail(function(error) {
        console.log("Failed", error);
    }).always(function() {
        console.log("Test");
    });
}

function addSongs() {
	console.log("test");
    // data.map(function(song, index) {
    //     $("#root").html(`<p>Test</p>`);
    // });
}

getData();