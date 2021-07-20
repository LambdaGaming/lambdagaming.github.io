function WriteImage() {
	var images = []
	var id = ""

	switch ( imageid ) {
		case 1:
			id = "cityrp"
			break
		case 2:
			id = "hlurp"
			break
		case 3:
			id = "various"
			break
		case 4:
			id = "sandbox"
			break
	}

	for ( i = 0; i < data.length; i++ ) {
		if ( data[i].id == id ) {
			images.push( data[i].src )
		}
	}

	var image = document.getElementById( "image" )
	var initimage = Math.floor( Math.random() * images.length ) // Initialize the image with a random one so the page isn't blank for 3 seconds
	image.src = images[initimage]
	function RandomImage() {
		var randimage = Math.floor( Math.random() * images.length )
		image.src = images[randimage] // Set image to a random one from the list
	}
	setInterval( RandomImage, 3000 ) // 3 second timer loop
}
