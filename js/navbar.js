function ChangeLogoVisibility() {
	if ( window.innerWidth <= screen.width * 0.46 )
	{
		const img = document.getElementById( "logo" )
		img.style.display = "none"
	}
	else
	{
		const img = document.getElementById( "logo" )
		img.style.display = "inline"
	}
}
window.onload = ChangeLogoVisibility
window.onresize = ChangeLogoVisibility

function Slideshow() {
	fetch( "https://raw.githubusercontent.com/LambdaGaming/lambdagaming.github.io/master/data/screenshots.json" )
		.then( response => response.json() )
		.then( json => {
			var image = document.getElementById( "image" )
			function RandomImage() {
				var randimage = Math.floor( Math.random() * json.data.length )
				image.src = json.data[randimage].src // Set image to a random one from the list
			}
			RandomImage()
			setInterval( RandomImage, 10000 ) // 3 second timer loop
		} )
}
