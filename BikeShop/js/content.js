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
		for(var i = 0; i < data.events.length; i++)
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
		for(var a = 0; a < data.products.length; a++)
		{
			var articleSelectProducts = productsSelect.querySelectorAll('article')[a];
			articleSelectProducts.querySelectorAll('img')[0].src = data.products[a].imageURL;
			articleSelectProducts.querySelector('h4').innerHTML = data.products[a].title;
			articleSelectProducts.querySelectorAll('p')[0].innerHTML = data.products[a].description;
			articleSelectProducts.querySelectorAll('p')[1].innerHTML = data.products[a].rating;
			articleSelectProducts.querySelector('h3').innerHTML = data.products[a].price;
			var rating = data.products[a].rating;
			if(rating == .5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/.5 star.png";
			}
			else if(rating == 1)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/1 star.png";
			}
			else if(rating == 1.5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/1.5 star.png";
			}
			else if(rating == 2)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/2 star.png";
			}
			else if(rating == 2.5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/2.5 star.png";
			}
			else if(rating == 3)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/3 star.png";
			}
			else if(rating == 3.5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/3.5 star.png";
			}
			else if(rating == 4)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/4 star.png";
			}
			else if(rating == 4.5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/4.5 star.png";
			}
			else if(rating ==5)
			{
				articleSelectProducts.querySelectorAll('img')[1].src = "images/5 star.png";
			}
			
			
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
	
	var featuredSelect = document.querySelector('#featured');
	if(featuredSelect)
	{
		for(var b = 0; b < 6; b++)
		{
			var articleSelectFeatured = featuredSelect.querySelectorAll('article')[b];
			articleSelectFeatured.querySelectorAll('img')[0].src = data.products[b].imageURL;
			articleSelectFeatured.querySelectorAll('img')[1].src = "images/4 star.png";
			articleSelectFeatured.querySelector('h4').innerHTML = data.products[b].title;
			articleSelectFeatured.querySelectorAll('p')[0].innerHTML = data.products[b].description;
			articleSelectFeatured.querySelectorAll('p')[1].innerHTML = data.products[b].price;
			var rating = data.products[b].rating;
				if(rating == .5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/.5 star.png";
			}
			else if(rating == 1)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/1 star.png";
			}
			else if(rating == 1.5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/1.5 star.png";
			}
			else if(rating == 2)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/2 star.png";
			}
			else if(rating == 2.5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/2.5 star.png";
			}
			else if(rating == 3)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/3 star.png";
			}
			else if(rating == 3.5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/3.5 star.png";
			}
			else if(rating == 4)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/4 star.png";
			}
			else if(rating == 4.5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/4.5 star.png";
			}
			else if(rating ==5)
			{
				articleSelectFeatured.querySelectorAll('img')[1].src = "images/5 star.png";
			}
		}
	}
	
	
	
	
};
xhr.open('GET','https://joshbloom.github.io/dws1/data/bikeshop.json', true);
xhr.send(null);