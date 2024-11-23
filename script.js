const extraCars = [
    {
        name: "Ferrari 488 Spider",
        image: "https://via.placeholder.com/300x200?text=Ferrari+488+Spider",
        price: "$150/day",
        type: "extra-car"
    },
    {
        name: "Lamborghini Huracan",
        image: "https://via.placeholder.com/300x200?text=Lamborghini+Huracan",
        price: "$200/day",
        type: "extra-car"
    },
    {
        name: "Range Rover Sport",
        image: "https://via.placeholder.com/300x200?text=Range+Rover+Sport",
        price: "$130/day",
        type: "extra-car"
    }
];

const evCars = [
    {
        name: "Tesla Model S",
        image: "https://via.placeholder.com/300x200?text=Tesla+Model+S",
        price: "$120/day",
        type: "ev-car"
    },
    {
        name: "BMW i3",
        image: "https://via.placeholder.com/300x200?text=BMW+i3",
        price: "$100/day",
        type: "ev-car"
    },
    {
        name: "Nissan Leaf",
        image: "https://via.placeholder.com/300x200?text=Nissan+Leaf",
        price: "$90/day",
        type: "ev-car"
    }
];

function displayCars() {
    const carContainer = document.querySelector("#cars .car-container");
    const evContainer = document.querySelector("#evCars .car-container");

    // Display Extra Cars
    extraCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-item");
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">${car.price}</p>
            <span class="${car.type}">Luxury/Sport</span>
        `;
        carContainer.appendChild(carCard);
    });

    // Display EV Cars
    evCars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-item");
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p class="price">${car.price}</p>
            <span class="${car.type}">Electric Vehicle</span>
        `;
        evContainer.appendChild(carCard);
    });
}

// Call the display function on page load
window.onload = displayCars;
