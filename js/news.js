let news = []

function LoadNews() {
	fetch( "https://lambdagaming.github.io/data/news.json" )
		.then( response => response.json() )
		.then( json => {
			news = json;
			const params = new URL( window.location.href ).searchParams;
			var id = params.get( "id" );
			ShowNews( id );
		} );
}

function ShowNews( id ) {
	var currentId = news.length;
	var container = document.getElementById( "newsContainer" );
	container.innerHTML = "<h1>News</h1><hr>";
	for ( const n of news ) {
		if ( id != null && Number( id ) != currentId ) {
			currentId--;
			continue;
		}
		var div = document.createElement( "div" );
		var link = document.createElement( "a" );
		var title = document.createElement( "h2" );
		var date = document.createElement( "h4" );
		var author = n.author || "OPGman";
		link.href = `https://lambdagaming.github.io/news?id=${currentId}`;
		title.innerHTML = n.title;
		title.id = String( currentId );
		date.innerHTML = `Published on ${n.date} by ${author}`;
		link.append( title );
		div.append( link, date );
		div.innerHTML += n.info + "<hr>";
		container.append( div );
		currentId--;
	}
}

document.addEventListener( "DOMContentLoaded", function() {
	LoadNews();
} )
