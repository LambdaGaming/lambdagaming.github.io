window.onscroll = () => {
	const nav = document.querySelector( "#navbar" )
	const dropdown = document.getElementById( "dropdown" )
	const navid = document.getElementById( "navbar" )
	const menu = document.getElementById( "menu" )
	if ( this.scrollY <= 50 )
	{
		nav.className = ""
		dropdown.style.backgroundColor = "black"
		navid.style.height = "10%"
		menu.style.top = "27%"
	}
	else
	{
		nav.className = "scroll"
		dropdown.style.backgroundColor = "#000011"
		navid.style.height = "5%"
		menu.style.top = "0%"
	}
}
