/*
 * events.js
 * 
*/
var id = document.getElementById("submit");
if(id)
{
	id.addEventListener("click",thankYou,null);
	
}
function thankYou()
	{
		window.alert("Thank you for contacting us!");

	}
var nextButton = document.getElementById("next");
if(nextButton){
	nextButton.addEventListener("click",nextPage,null);
}
	function nextPage()
	{
		var xhr = new XMLHttpRequest();
		xhr.onload = function()
		{
			var data = JSON.parse(xhr.responseText);

			var productsSelect = document.querySelector('#products');
			if(productsSelect)
			{
				for(var a = 6; a < data.products.length; a++)
				{
					var articleSelectProducts = productsSelect.querySelectorAll('article')[a-6];
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
					productsSelect.querySelectorAll('article')[5].remove();
					productsSelect.querySelectorAll('article')[4].remove();
					productsSelect.querySelectorAll('article')[3].remove();
					productsSelect.querySelectorAll('article')[2].remove();

				}
			}



		};
	xhr.open('GET','https://joshbloom.github.io/dws1/data/bikeshop.json', true);
	xhr.send(null);
	}



