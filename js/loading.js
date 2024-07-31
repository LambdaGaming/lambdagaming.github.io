function WriteImage() {
	fetch( "../data/screenshots.json" )
		.then( response => response.json() )
		.then( json => {
			var id = ""
			var images = []
			
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
		
			for ( const pic of json.data ) {
				if ( pic.id == id ) {
					images.push( pic.src )
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
		} )
}

// Same as above but ignores IDs
function WriteImageAll() {
	fetch( "../data/screenshots.json" )
		.then( response => response.json() )
		.then( json => {
			var images = []
			for ( const pic of json.data ) {
				images.push( pic.src )
			}
			var image = document.getElementById( "image" )
			var initimage = Math.floor( Math.random() * images.length )
			image.src = images[initimage]
			function RandomImage() {
				var randimage = Math.floor( Math.random() * images.length )
				image.src = images[randimage]
			}
			setInterval( RandomImage, 3000 )
		} )
}
