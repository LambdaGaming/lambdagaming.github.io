
function WriteImage(){
	var image = document.getElementById( "image" )
	function RandomImage(){
		var randimage = Math.floor( Math.random() * images.length )
		image.src = images[randimage]
	}
	setInterval( RandomImage, 3000 )
}