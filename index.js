document.addEventListener('DOMContentLoaded', function() {
        fetch('db.json')
            .then(response => response.json())
            .then(data => {
                const cars = data.cars;
                const hotels = data.Hotels;
                const item =  data.image   
             

                const carList = document.getElementById('car-list');
                cars.forEach(car => {
                    const carDiv = document.createElement('div');
                    carDiv.innerHTML = `
                        <h2>${car.Name}</h2>
                        <p>Description: ${car.Description}</p>
                        <p>Year: ${car.year}</p>
                        <p>Price per day: Ksh${car.price_per_day}</p>
                        <img src="${car.Picture}" alt="${car.Name}">
                    `;
                    carList.appendChild(carDiv);
                });
    
                const hotelList = document.getElementById('hotel-list');
                hotels.forEach(hotel => {
                    const hotelDiv = document.createElement('div');
                    hotelDiv.innerHTML = `
                        <h2>${hotel.Name}</h2>
                        <p>Description: ${hotel.Description}</p>
                        <p>Location: ${hotel.Location}</p>
                        <img src="${hotel.Picture}" alt="${hotel.Name}">
                        
                    `;
                    hotelList.appendChild(hotelDiv);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });document.addEventListener("DOMContentLoaded", function () {
        const quoteForm = document.getElementById('quote-form');
        const carInquiryForm = document.getElementById('car-inquiry-form');
        
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
         window.location.reload();
        });
    
        carInquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.reload();
        });
    });
    

    