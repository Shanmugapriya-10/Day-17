const restcountriesapiUrl = 'https://restcountries.com/v3.1/all'
const latlng = [];
fetch (restcountriesapiUrl) 
.then (function(response) {
    if(response.ok) {
      return response.json()
    }
    throw new Error ("error");
})
.then (function(data) {
 
    latlng.push(data[0].latlng[0]);
    latlng.push(data[0].latlng[1]);
  
    console.log(data[0]);
    console.log('data[0].flags.png', data[0].flags.png);

    
    function createBootstrapCards(data) {
        // Get the container element
        const container = document.getElementById('cardContainer');
        let row;
        // Loop through the data and create a card for each item
        data.forEach((item, index) => {
            // Create card elements

            if ( index % 3 === 0) {
                // Start a new row for every third card
                row = document.createElement('div');
                row.classList.add('row');
                //container.appendChild(row);
            }

            document.body.style.backgroundColor = 'LightBlue';

            const cardColumn = document.createElement('div');
            cardColumn.classList.add('col-lg-4', 'mb-3');

            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('style', 'width: 25rem;');
            card.style.border = '5px solid black';
            
            // Assuming you have a variable 'card' representing the card element

    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.style.backgroundColor = 'Grey';

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = item.name.common;
            cardTitle.style.backgroundColor = 'Black'
            cardTitle.style.color = 'white'
            cardTitle.style.width = '100%';


            const img = document.createElement('img')
            img.setAttribute('src', item.flags.png);
            document.body.appendChild(img);
    
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = item.capital[0];

            const cardText2 = document.createElement('p');
            cardText2.classList.add('card-text');
            cardText2.textContent = item.region;

            const cardText3 = document.createElement('p');
            cardText3.classList.add('card-text');
            cardText3.textContent = item.continents;

    
            // Append elements to each other
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(img);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardText2);
            cardBody.appendChild(cardText3);
            card.appendChild(cardBody);
            cardColumn.appendChild(card);
            row.appendChild(cardColumn);
        
            
    
            // Append card to container
            container.appendChild(row);
            //document.body.appendChild(container);
        });
    }
    
    // Call the function with sample data
    createBootstrapCards(data);

    latlng.push(data[0].latlng[0]);
    latlng.push(data[0].latlng[1]);
    console.log('latlng', latlng);

})
.catch (function(error) {
    console.error('Error', error);
})

const lat = latlng[0];
const lng = latlng[1];
console.log('lat', lat);
console.log('lng', lng);

const weatherapiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lng&appid=1ffa6880a7a10e8da76b66ab55b046e6';

fetch(weatherapiUrl)
.then (function(response) {
    if(response.ok) {
      return response.json()
    }
    throw new Error ("error");
})
.then (function(data) {
    console.log('weather', data);
})
.catch (function(error) {
    console.error('Error', error);
})




























