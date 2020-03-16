//JavaScript Document

function loadAsset(url, type, callback)
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function()
    {
        callback(xhr.response);
    };
    xhr.send();
}

function strangeProducts(json)
{
    let strangeProducts = JSON.parse(json).strangeProducts;
    let section = document.querySelector('section');

    for(let i = 0; i < strangeProducts.length; i++)
    {
        // build HTML elements dynamically
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        img.setAttribute('src', 'https://techno-pixel.github.io/LabFour.github.io/img/' + strangeProducts[i].name);
        img.setAttribute('alt', strangeProducts[i].image);
        h2.textContent = strangeProducts[i].name;
        p1.textContent = 'Size ' + strangeProducts[i].size;
        p2.textContent = 'Price ' + strangeProducts[i].price;

        let description = strangeProducts[i].description;
        for(let j = 0; j< strangeProducts.length; j++)
        {
            let listItem = document.createElement('li');
            listItem.textContent = description[j];
            ul.appendChild(listItem);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);
    }
}

loadAsset('https://techno-pixel.github.io/LabFour.github.io/strangeProducts.json', 'application/json', strangeProducts);
// loadAsset('https://techno-pixel.github.io/LabFour.github.io/img/buttcat.jpg', 'jsonObj', strangeProducts);
// loadAsset('https://techno-pixel.github.io/LabFour.github.io/img/dogdry.jpg', 'jsonObj', strangeProducts);
// loadAsset('https://techno-pixel.github.io/LabFour.github.io/img/zillakilla.jpg', 'jsonObj', strangeProducts);
// loadAsset('https://techno-pixel.github.io/LabFour.github.io/img/pickledill.jpg', 'jsonObj', strangeProducts);
// loadAsset('https://techno-pixel.github.io/LabFour.github.io/img/pizzahat.jpg', 'jsonObj', strangeProducts);
