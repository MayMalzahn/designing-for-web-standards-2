/*
 * events.js
 * 
*/

var submit = document.getElementById('submit');
submit.addEventListener('click', send,false);

function send(event)
{
	event.preventDefault();
	alert("Thanks!");
}


var pageChange = document.getElementById('pageChange');
pageChange.addEventListener('click',change,false);

function change(event)
{
	event.preventDefault();
	
	var xhr = new XMLHttpRequest();
xhr.onload = function()
{
	var data = JSON.parse(xhr.responseText);
	
	
	var blogSelect = document.querySelector('#blog');
	
	if(blogSelect)
	{
		for(var b = 4; b < 6; b++)
		{
			blogSelect.querySelectorAll('h3')[b].innerHTML = data.posts[b].title;
			blogSelect.querySelectorAll('h4')[b].innerHTML = data.posts[b].postDate;
			blogSelect.querySelectorAll('p')[b].innerHTML = data.posts[b].text;
		}
	}
	
};
xhr.open('GET','https://joshbloom.github.io/dws1/data/hikersguide.json', true);
xhr.send(null);
}