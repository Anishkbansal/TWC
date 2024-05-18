window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    const filledHeight = (scrollProgress / 100) * progressBar.height;
    progressBar.style.filter = `grayscale(${100 - scrollProgress}%)`;
    progressBar.style.clipPath = `inset(${100 - scrollProgress}% 0 0 0)`;
  });


  var toggleBtn = document.querySelectorAll('.toggleBtn');
  var iframeContainer = document.querySelectorAll('.iframeContainer');
  var iframeSrc = 'https://anishbansal.pythonanywhere.com/'
  
  toggleBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
      toggleIframe(index);
    });
  });

  function toggleIframe(index){
    iframeContainer.forEach(function(container, i){
      if(i === index){
        if(container.style.display === 'none'){
          container.style.display = 'block';
          var iframe = container.querySelector('iframe');
          iframe.setAttribute('src', iframeSrc);
          container.scrollIntoView({behavior:'smooth', block: 'center'})

        }else{
          container.style.display = 'none';
        }
      }else{
        container.style.display = 'none'
      }
    });
  }

// Function to create a copy button for each <pre> element with class 'code'
// Function to create a copy button for each <pre> element with class 'code'
function addCopyButtons() {
  // Get all <pre> elements with class 'code'
  var codeElements = document.querySelectorAll("pre.code");

  // Loop through each <pre> element
  codeElements.forEach(function(element) {
    // Create a copy button
    var copyButton = document.createElement("button");
    copyButton.innerHTML = "<img src='Image resource/CopyButtonSymbol.png' alt='Copy Code'>";
    copyButton.title = "Copy Code Without Comments";
    copyButton.onclick = function() {
      copyCodeWithoutComments(element);
    };

    // Style the button
    copyButton.style.position = "relative";
    copyButton.style.float = "right";
    copyButton.style.marginTop = "-1.5em";
    copyButton.style.marginRight = "-5px";
    copyButton.style.border = "none";
    copyButton.style.backgroundColor = "transparent";
    copyButton.style.cursor = "pointer";
    copyButton.style.fontSize = "1.2em";
    copyButton.style.height = "5px";
    copyButton.style.width = "auto";

    // Append the button to the <pre> element
    element.insertBefore(copyButton, element.firstChild);
  });
}

// Function to copy code without comments for a specific <pre> element
function copyCodeWithoutComments(element) {
  // Get the text content of the element
  var code = element.innerText;

  // Remove comments from the code using regular expression
  code = code.replace(/<pre class='comments'>(.*?)<\/pre>/gs, "");
  code = code.replace("Copy Code Without Comments", "");

  // Copy the code without comments to the clipboard
  navigator.clipboard.writeText(code)
    .then(() => {
      // Show toast for copy success
      showToast("Code copied");
    })
    .catch(err => console.error('Could not copy code: ', err));
}

// Function to display a toast message
function showToast(message) {
  var toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "10px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.padding = "10px 20px";
  toast.style.backgroundColor = "#333";
  toast.style.color = "#fff";
  toast.style.borderRadius = "5px";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease";

  document.body.appendChild(toast);

  // Fade in toast
  setTimeout(function() {
    toast.style.opacity = "1";
  }, 100);

  // Fade out toast after 2 seconds
  setTimeout(function() {
    toast.style.opacity = "0";
    // Remove toast from DOM after fade out
    setTimeout(function() {
      document.body.removeChild(toast);
    }, 300);
  }, 2000);
}

// Call the function to add copy buttons when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  addCopyButtons();
});

window.addEventListener('scroll', function() {
  // Change 80 to the percentage of the page height where you want the music to start playing
  var triggerPercentage = 70;
  var triggerPosition = (document.documentElement.scrollHeight - window.innerHeight) * (triggerPercentage / 100);
  if (window.scrollY > triggerPosition) {
    document.getElementById('bgMusic').play();
  } else {
    document.getElementById('bgMusic').pause();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.images');
  const images_scroll = document.querySelectorAll('.images_scroll')
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  const closeButton = document.getElementById('closeButton');
  const zoomInButton = document.getElementById('zoomIn');
  const zoomOutButton = document.getElementById('zoomOut');
  const progressBar = document.getElementById('progress-bar');
  

  let scale = 1;
  const zoomSpeed = 0.1;

  images.forEach(image => {
      image.addEventListener('click', () => {
          overlay.style.display = 'flex';
          overlayImage.src = image.src;
          progressBar.style.display = "none";
          document.body.classList.add('no-scroll');
          
      });
  });

  images_scroll.forEach(image_scroll => {
    image_scroll.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImage.src = image_scroll.src;
        progressBar.style.display = "none";
        document.body.classList.remove('no-scroll');
    });
});

  closeButton.addEventListener('click', () => {
      overlay.style.display = 'none';
      resetZoom();
      progressBar.style.display = "block";
  });

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
      overlayImage.style.left = '0';
      overlayImage.style.top = '0';
  }

  // Drag functionality
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  overlayImage.addEventListener('mousedown', (event) => {
      event.preventDefault(); // Prevent default drag behavior
      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      initialLeft = parseInt(window.getComputedStyle(overlayImage).left) || 0;
      initialTop = parseInt(window.getComputedStyle(overlayImage).top) || 0;
      overlayImage.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (event) => {
      if (isDragging) {
          const dx = event.clientX - startX;
          const dy = event.clientY - startY;
          overlayImage.style.left = `${initialLeft + dx}px`;
          overlayImage.style.top = `${initialTop + dy}px`;
      }
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
      overlayImage.style.cursor = 'grab';
  });

  overlayImage.addEventListener('touchstart', (event) => {
      isDragging = true;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      initialLeft = parseInt(window.getComputedStyle(overlayImage).left) || 0;
      initialTop = parseInt(window.getComputedStyle(overlayImage).top) || 0;
  });

  overlayImage.addEventListener('touchmove', (event) => {
      if (isDragging) {
          const dx = event.touches[0].clientX - startX;
          const dy = event.touches[0].clientY - startY;
          overlayImage.style.left = `${initialLeft + dx}px`;
          overlayImage.style.top = `${initialTop + dy}px`;
      }
  });

  overlayImage.addEventListener('touchend', () => {
      isDragging = false;
  });

  // Prevent native drag behavior
  overlayImage.addEventListener('dragstart', (event) => {
      event.preventDefault();
  });
});
