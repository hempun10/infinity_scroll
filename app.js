const imageContainer = document.querySelector('#image-conatiner');
const loader = document.querySelector('#loader');


let photoArray =[];

// unsplash API 
const count = 10
const apiKey = 'EuqsmNWV5i7Lw3SXinjgoocQR7mYQ-4XrWZ08j1rDOM'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Helper function to set Arribute on DOM elements
const setAttribute =(element,attributes) =>{
    for(const key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

// Create element for links & photos, Add to DOM
const displayPhoto = () =>{
    // Run function for each object in photosArray 
    photoArray.forEach((photo)=>{
        // creating <a> to link to Unsplash
        const unsplashLink = document.createElement('a')
        // unsplashLink.setAttribute('href',photo.links.html)
        // unsplashLink.setAttribute('target','_blank')
        setAttribute(unsplashLink, {
            href: photo.links.html,
            target: '_blank'
        });

        //Create <img> for photo
        const img = document.createElement('img')
        // img.setAttribute('src',photo.urls.regular)
        // img.setAttribute('alt',photo.alt_description)
        // img.setAttribute('title',photo.alt_description)
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        // Put <img> inside <a> 
        unsplashLink.appendChild(img)
        //Put <img> inside imageConatiner Element 
        imageContainer.appendChild(unsplashLink)
    });
}

// Get Photos form Unsplash API 
const getPhotos = async() =>{
    try {
        const response = await fetch(apiUrl)
        photoArray = await response.json();
        // console.log(photoArray);
        displayPhoto()
    } catch (error) {
        //Catch Error
        console.log( `There is an error ${error}`);
    }
}

//Onload 
getPhotos()