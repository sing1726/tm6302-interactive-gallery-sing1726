// Define image data as an array of objects
const imageData = [
  {
    src: 'images/1-min.jpg',
    alt: 'Image 1',
    caption: 'A beautiful Desert',
  },
  {
    src: 'images/2-min.jpg',
    alt: 'Image 1',
    caption: 'Abstract Art',
  },
  {
    src: 'images/3-min.jpg',
    alt: 'Image 1',
    caption: 'Wedding Ceremony',
  },
  {
    src: 'images/4-min.jpg',
    alt: 'Image 1',
    caption: 'Hiking With Friends',
  },
  {
    src: 'images/5-min.jpg',
    alt: 'Image 1',
    caption: 'New York City Skyline',
  },
  {
    src: 'images/6-min.jpg',
    alt: 'Image 1',
    caption: 'Deers Walking Around',
  },
  {
    src: 'images/01-min.jpg',
    alt: 'Image 1',
    caption: 'Couples Enjoying on Beach',
  },
  {
    src: 'images/02-min.jpg',
    alt: 'Image 1',
    caption: 'Sunset over Sahara Desert',
  },
  {
    src: 'images/03-min.jpg',
    alt: 'Image 1',
    caption: 'Enjoying the Sea',
  },
  {
    src: 'images/04-min.jpg',
    alt: 'Image 1',
    caption: 'Escalators',
  },
  {
    src: 'images/05-min.jpg',
    alt: 'Image 1',
    caption: 'Jeep In the Desert',
  },
  {
    src: 'images/06-min.jpg',
    alt: 'Image 1',
    caption: 'Hiker clicking photos in beautiful desert',
  },
];

// Function to dynamically create the gallery
function createGallery() {
  const galleryContainer = document.getElementById('gallery');

  imageData.forEach((image, index) => {
    // Create div element to hold image and caption
    const imageContainer = document.createElement('div');

    // Create image element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    img.addEventListener('click', function () {
      openOverlay(index);
    });

    // Append image and caption to the image container
    imageContainer.appendChild(img);

    // Append image container to the gallery container
    galleryContainer.appendChild(imageContainer);
  });
}

function openOverlay(index) {
  const overlay = document.getElementById('overlay');
  const image = document.getElementById('overlay-image');
  const caption = document.getElementById('overlay-caption');
  image.src = imageData[index].src;
  caption.textContent = imageData[index].caption;
  overlay.style.display = 'flex';

  document
    .getElementById('overlay-button')
    .addEventListener('click', function () {
      overlay.style.display = 'none';
    });
}

// Event delegation for dynamically added images
document.addEventListener('DOMContentLoaded', createGallery);
