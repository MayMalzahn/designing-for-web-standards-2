/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/
var xhr = new XMLHttpRequest();
xhr.onload = function()
{
	 var data = JSON.parse(xhr.responseText);
	
	var footerSelect = document.querySelector('#foot');
	if(footerSelect)
	{
		
	}
	
	var blogSelect = document.querySelector('#blog');
	
	if(blogSelect)
	{
		
	}
	var eventSelect = document.querySelector('#events');
	
	if(eventSelect)
	{
		
	}
	
}
xhr.open('GET','https://joshbloom.github.io/dws1/data/hikersguide.json', true);
xhr.send(null);