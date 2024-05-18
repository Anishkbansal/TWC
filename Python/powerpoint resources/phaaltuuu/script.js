document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeButton = document.getElementById('closeButton');
    const zoomInButton = document.getElementById('zoomIn');
    const zoomOutButton = document.getElementById('zoomOut');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImage.src = image.src;
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        resetZoom();
    });

    // Zoom functionality
    let scale = 1;
    const zoomSpeed = 0.1;

    overlayImage.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            scale += zoomSpeed;
        } else {
            scale -= zoomSpeed;
        }
        scale = Math.min(Math.max(0.5, scale), 3); // Restrict scale between 0.5 and 3
        overlayImage.style.transform = `scale(${scale})`;
    });

    zoomInButton.addEventListener('click', () => {
        scale += zoomSpeed;
        scale = Math.min(scale, 3); // Max scale of 3
        overlayImage.style.transform = `scale(${scale})`;
    });

    zoomOutButton.addEventListener('click', () => {
        scale -= zoomSpeed;
        scale = Math.max(scale, 0.5); // Min scale of 0.5
        overlayImage.style.transform = `scale(${scale})`;
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            resetZoom();
        }
    });

    function resetZoom() {
        scale = 1;
        overlayImage.style.transform = `scale(${scale})`;
    }
});
