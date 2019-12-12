
function WriteImage(){
	var image = document.getElementById( "image" )
	var initimage = Math.floor( Math.random() * images.length ) // Initialize the image with a random one so the page isn't blank for 3 seconds
	image.src = images[initimage]
	function RandomImage(){
		var randimage = Math.floor( Math.random() * images.length )
		image.src = images[randimage] // Set image to a random one from the list
	}
	setInterval( RandomImage, 3000 ) // 3 second timer loop
}