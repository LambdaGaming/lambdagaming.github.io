function GetScreenshots() {
	const json = fetch( "../data/screenshots.json" ).then( response => response.json() )
	var gallery = document.getElementById( "gallery" )
	for ( const pic of json ) {
		var figure = document.createElement( "figure" ) 
		figure.innerHTML = `<img src="${pic.src} loading="lazy"><figcaption>${pic.caption}<figcaption>`
		gallery.append( figure )
	}
}
