function Slideshow() {
	fetch( "https://lambdagaming.github.io/data/screenshots.json" )
		.then( response => response.json() )
		.then( json => {
			var image = document.getElementById( "image" )
			function RandomImage() {
				var randimage = Math.floor( Math.random() * json.data.length )
				image.src = json.data[randimage].src
			}
			RandomImage()
			setInterval( RandomImage, 10000 )
		} )
}

document.addEventListener( "DOMContentLoaded", function() {
	Slideshow();
} )
