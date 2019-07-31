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
		footerSelect.querySelectorAll('h4')[2].innerHTML = data.about.title;
		footerSelect.querySelector('p').innerHTML = data.about.text;
		
		for(var i = 0; i < 4; i++)
		{
			footerSelect.querySelectorAll('#eventList li')[i].innerHTML = data.events[i].title;
		}
		for(var a = 0; a < 4; a++)
		{
			footerSelect.querySelectorAll('#hikerList li')[a].innerHTML ="<img src='images/user.png' alt='user'>"+ data.hikers[a].firstname + " " + data.hikers[a].lastname;
		}
	}
	
	var blogSelect = document.querySelector('#blog');
	
	if(blogSelect)
	{
		for(var b = 0; b < 3; b++)
		{
			blogSelect.querySelectorAll('h3')[b].innerHTML = data.posts[b].title;
			blogSelect.querySelectorAll('h4')[b].innerHTML = data.posts[b].postDate;
			blogSelect.querySelectorAll('p')[b].innerHTML = data.posts[b].text;
		}
	}
	var eventSelect = document.querySelector('#events');
	
	if(eventSelect)
	{
		for(var c = 0; c < 3; c++)
		{
			
			eventSelect.querySelectorAll('h3')[c].innerHTML = data.events[c].title;
			eventSelect.querySelectorAll('h4')[c].innerHTML = data.events[c].date;
			eventSelect.querySelectorAll('p')[c].innerHTML = data.events[c].text;
			
		}
	}
	
};
xhr.open('GET','https://joshbloom.github.io/dws1/data/hikersguide.json', true);
xhr.send(null);