function HideAllJobs() {
	var elements = document.getElementsByClassName( "list" )
	for ( var i=0; i < elements.length; i++ ) {
		elements[i].style.display = "none"
	}
}

function ChangeJob( id ) {
	const job = document.getElementById( id )
	HideAllJobs()
	job.style.display = "inline"
}
