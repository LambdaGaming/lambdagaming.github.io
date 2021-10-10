window.onscroll = () => {
	const nav = document.querySelector( "#navbar" )
	const dropdown = document.getElementById( "dropdown" )
	const navid = document.getElementById( "navbar" )
	const menu = document.getElementById( "menu" )
	if ( this.scrollY <= 50 )
	{
		nav.className = ""
		dropdown.style.backgroundColor = "black"
		navid.style.height = "108px"
		menu.style.top = "27%"
	}
	else
	{
		nav.className = "scroll"
		dropdown.style.backgroundColor = "#000011"
		navid.style.height = "47px"
		menu.style.top = "0%"
	}
}

function ChangeLogoVisibility() {
	if ( window.innerWidth <= screen.width * 0.65 )
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
