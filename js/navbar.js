window.onscroll = () => {
	const nav = document.querySelector( "#navbar" )
	const logo = document.getElementById( "logo" )
	const dropdown = document.getElementById( "dropdown" )
	const navid = document.getElementById( "navbar" )
	const menu = document.getElementById( "menu" )
	if ( this.scrollY <= 50 )
	{
		nav.className = ""
		logo.style.width = "5%"
		dropdown.style.backgroundColor = "black"
		navid.style.height = "10%"
		menu.style.top = "27%"
	}
	else
	{
		nav.className = "scroll"
		logo.style.width = "3%"
		dropdown.style.backgroundColor = "#000011"
		navid.style.height = "5%"
		menu.style.top = "0%"
	}
}
