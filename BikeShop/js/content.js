/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/bikeshop.json
*/

var xhr = new XMLHttpRequest();
xhr.onload = function()
{
	var data = JSON.parse(xhr.responseText);
	
	var eventsSelect = document.querySelector('#events');
	if(eventsSelect)
	{
		for(var i = 0; i < 5; i++)
		{
			var articleSelectEvents = eventsSelect.querySelectorAll('article')[i];
			articleSelectEvents.querySelector('h3').innerHTML = data.events[i].title;
			articleSelectEvents.querySelectorAll('p')[0].innerHTML = data.events[i].location;
			articleSelectEvents.querySelectorAll('p')[1].innerHTML = data.events[i].date;
			articleSelectEvents.querySelectorAll('p')[2].innerHTML = data.events[i].text;
		}
	}
	
	var productsSelect = document.querySelector('#products');
	if(productsSelect)
	{
		for(var a = 0; a < 6; a++)
		{
			var articleSelectProducts = productsSelect.querySelectorAll('article')[a];
			articleSelectProducts.querySelectorAll('img')[0].src = data.products[a].imageURL;
			articleSelectProducts.querySelector('h4').innerHTML = data.products[a].title;
			articleSelectProducts.querySelectorAll('p')[0].innerHTML = data.products[a].description;
			articleSelectProducts.querySelectorAll('p')[1].innerHTML = data.products[a].rating;
			articleSelectProducts.querySelector('h3').innerHTML = data.products[a].price;
		}
	}
	
	var featuredSelect = document.querySelector('#featured');
	if(featuredSelect)
	{
		for(var b = 0; b < 6; b++)
		{
			var articleSelectFeatured = featuredSelect.querySelectorAll('article')[b];
			articleSelectFeatured.querySelectorAll('img')[0].src = data.products[b].imageURL;
			articleSelectFeatured.querySelector('h4').innerHTML = data.products[b].title;
			articleSelectFeatured.querySelectorAll('p')[0].innerHTML = data.products[b].description;
			articleSelectFeatured.querySelectorAll('p')[1].innerHTML = data.products[b].price;
		}
	}
	
	var memberSelect = document.querySelector('#memberBenefits');
	if(memberSelect)
	{
		for(var c = 0; c < 2; c++)
		{
			var articleSelectBenefits = memberSelect.querySelectorAll('article')[c];
			articleSelectBenefits.querySelector('p').innerHTML = data.benefits[c].description;
		}
	}
	
	
};
xhr.open('GET','https://joshbloom.github.io/dws1/data/bikeshop.json', true);
xhr.send(null);