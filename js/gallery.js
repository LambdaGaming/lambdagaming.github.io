function GetScreenshots() {
	for ( i = 0; i < data.length; i++ ) {
		var figure = document.createElement( "figure" ) 
		figure.innerHTML = '<img src="' + data[i].src + '" loading="lazy"> <figcaption>' + data[i].caption + '<figcaption>'
		var gallery = document.getElementById( "gallery" )
		gallery.append( figure )
	}
}
