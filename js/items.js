var ItemList = []
function LoadItems() {
	fetch( "../data/items_cityrp.json" ).then( response => response.json() ).then( json => {
		SaveJSON( json )
	} )
}

function SaveJSON( json ) {
	ItemList = json
}

function DisplaySearchResults() {
	var list = document.getElementById( "list" )
	var search = document.getElementById( "search" )
	list.innerHTML = ""
	for ( const item of ItemList.data ) {
		if ( item.name.toLowerCase().includes( search.value.toLowerCase() ) ) {
			var div = document.createElement( "div" )
			var title = document.createElement( "h2" )
			title.innerHTML = item.name
			var desc = document.createElement( "p" )
			desc.innerHTML = `Description: ${item.desc}`
			div.append( title, desc )

			if ( item.hasOwnProperty( "location" ) ) {
				var location = document.createElement( "p" )
				location.innerHTML = `Location: ${item.location}`
				div.append( location )
			}
			if ( item.hasOwnProperty( "user" ) ) {
				var user = document.createElement( "p" )
				user.innerHTML = `Used by: ${item.user}`
				div.append( user )
			}
			if ( item.hasOwnProperty( "shop" ) ) {
				var shop = document.createElement( "p" )
				shop.innerHTML = `Purchased at: ${item.shop}`
				div.append( shop )
			}
			if ( item.hasOwnProperty( "other" ) ) {
				var other = document.createElement( "p" )
				other.innerHTML = `Obtained by: ${item.other}`
				div.append( other )
			}

			div.innerHTML += "<hr>"
			list.append( div )
		}
	}
}
