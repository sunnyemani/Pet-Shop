       
       // Fetch data from the API endpoint
fetch('https://dogs-care.onrender.com/api/dogs_care')
.then(response => response.json())
.then(data => {
    // Render the data on the webpage
    const imagesContainer = document.getElementById('images-container');
    
    // Create and append the image
    const imageUrl = data[0].image1;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Dog Image';
    image.classList.add('dog-image');
    imagesContainer.appendChild(image);
})
.catch(error => {
    console.error('Error fetching data:', error);
});


// image 2

fetch('https://dogs-care.onrender.com/api/dogs_care')
.then(response => response.json())
.then(data => {
    // Render the data on the webpage
    const imagesContainer = document.getElementById('images-container');
    
    // Create and append the image
    const imageUrl = data[0].image2;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Dog Image';
    image.classList.add('dog-image2');
    imagesContainer.appendChild(image);
})
.catch(error => {
    console.error('Error fetching data:', error);
});

//image 3

fetch('https://dogs-care.onrender.com/api/dogs_care')
.then(response => response.json())
.then(data => {
    // Render the data on the webpage
    const imagesContainer = document.getElementById('images-container');
    
    // Create and append the image
    const imageUrl = data[0].image3;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Dog Image';
    image.classList.add('dog-image3');
    imagesContainer.appendChild(image);
})
.catch(error => {
    console.error('Error fetching data:', error);
});


//image 4

fetch('https://dogs-care.onrender.com/api/dogs_care')
.then(response => response.json())
.then(data => {
    // Render the data on the webpage
    const imagesContainer = document.getElementById('images-container');
    
    // Create and append the image
    const imageUrl = data[0].image4;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Dog Image';
    image.classList.add('dog-image4');
    imagesContainer.appendChild(image);
})
.catch(error => {
    console.error('Error fetching data:', error);
});

//image 5

fetch('https://dogs-care.onrender.com/api/dogs_care')
.then(response => response.json())
.then(data => {
    // Render the data on the webpage
    const imagesContainer = document.getElementById('images-container');
    
    // Create and append the image
    const imageUrl = data[0].image5;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Dog Image';
    image.classList.add('dog-image5');
    imagesContainer.appendChild(image);
})
.catch(error => {
    console.error('Error fetching data:', error);
});