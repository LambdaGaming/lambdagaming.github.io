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
			setInterval( RandomImage, 10000 ) // 10 second timer loop
		} )
}

function GetCreators() {
	fetch( "https://raw.githubusercontent.com/LambdaGaming/lambdagaming.github.io/master/data/creators.json" )
		.then( response => response.json() )
		.then( json => {
			var list = document.getElementById( "creators" )
			for ( const c of json.creators ) {
				var link = document.createElement( "a" )
				link.href = c.url
				link.innerText = c.name
				list.prepend( link )
			}
		} )
}
