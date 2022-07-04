window.addEventListener( "load", function() {
	if ( window.location.hash ) {
		ChangeJob( window.location.hash.substring( 1 ) )
	}
} )

function HideAllJobs() {
	var elements = document.getElementsByClassName( "list" )
	for ( var i=0; i < elements.length; i++ ) {
		elements[i].style.display = "none"
	}
}

function ChangeJob( id ) {
	const job = document.getElementById( id )
	const main = document.getElementById( "main" )
	HideAllJobs()
	job.style.display = "inline"
	main.scrollIntoView()
}
