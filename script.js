document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    const images = [
        { src: 'images/image1.jpg', hdSrc: 'images/hd/image1.jpg', title: 'Image 1', description: 'Van Gogh Oil Painting' },
        { src: 'images/image2.jpg', hdSrc: 'images/hd/image2.jpg', title: 'Image 2', description: 'Creative graffiti wall with portrait of Frida Kahlo' },
        { src: 'images/image3.jpg', hdSrc: 'images/hd/image3.jpg', title: 'Image 3', description: 'Colorful Sunflowers' },
        { src: 'images/image4.jpg', hdSrc: 'images/hd/image4.jpg', title: 'Image 4', description: 'Colorful Abstract Art' },
        { src: 'images/image5.jpg', hdSrc: 'images/hd/image5.jpg', title: 'Image 5', description: 'Blue and Pink Paint Abstract Artwork' },
        { src: 'images/image6.jpg', hdSrc: 'images/hd/image6.jpg', title: 'Image 6', description: 'Multicolored Abstract Painting With Brown Frame' },
        { src: 'images/image7.jpg', hdSrc: 'images/hd/image7.jpg', title: 'Image 7', description: 'White, Orange, Blue, and Red Color Artwork' },
        { src: 'images/image8.jpg', hdSrc: 'images/hd/image8.jpg', title: 'Image 8', description: 'Painters Brushes in a Jar' },
        { src: 'images/image9.jpg', hdSrc: 'images/hd/image9.jpg', title: 'Image 9', description: 'Glass Artwork in the Chihuly Garden and Glass Museum' },
        { src: 'images/image10.jpg', hdSrc: 'images/hd/image10.jpg', title: 'Image 10', description: 'Glass Artworks in an Ecosystem in the Chihuly Garden and Glass Museum' },
       
    images.forEach((image, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.dataset.index = index;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        container.appendChild(img);
        gallery.appendChild(container);
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    gallery.addEventListener('click', (event) => {
        const target = event.target.closest('.image-container');
        if (target) {
            const index = target.dataset.index;
            const image = images[index];
            modal.style.display = 'flex';
            modalImg.src = image.hdSrc;
            captionText.innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
    
