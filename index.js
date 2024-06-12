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


// dynamic html generation

//head tag 
function getRelativePath(src) {
  if (window.location.pathname.includes('Projects/lecture%20projects') || window.location.pathname.includes('SubCourses/')) { return `../../${src}`;} 
  else { return src; }
}

const links = [
  { rel: 'stylesheet', href: getRelativePath("../common_designs.css") },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  { href: 'https://fonts.googleapis.com/css2?family=Cagliostro&family=Mukta&display=swap', rel: 'stylesheet' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  { href: 'https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&display=swap', rel: 'stylesheet' },
  { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.css'},
  { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/theme/darcula.min.css'},
];

// Loop through the array and create link elements
links.forEach(linkDetails => {
  const link = document.createElement('link');

  // Set attributes for each link element
  Object.keys(linkDetails).forEach(attr => {
      link.setAttribute(attr, linkDetails[attr]);
  });

  // Append the link element to the head section
  document.head.appendChild(link);

  console.log('Link added to head:', link);
});

// create script elements
const scriptSources = [
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/mode/javascript/javascript.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.2/mode/python/python.min.js',
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/clike/clike.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.3/mode/sql/sql.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.3/mode/xml/xml.min.js"
];
scriptSources.forEach(src => {
  // Create a new script element
  const script = document.createElement('script');

  // Set the source of the script
  script.src = src;

  // Append the script element to the head
  document.head.appendChild(script);
});


// Array to store CodeMirror instances
let codeMirrorInstances = [];
// Initializing CodeMirror for code
document.addEventListener('DOMContentLoaded', function() {
  // Dictionary mapping folder names to CodeMirror modes
  const languageModes = {
    'python': 'text/x-cython',
    'java': 'text/x-java',
    'javascript': 'text/javascript',
    'sql': 'text/x-sqlite',
    'xml': 'text/html'
    // Add more mappings as needed
  };

  // Function to determine the language based on the folder name
  function determineLanguageMode() {
    const pathArray = window.location.pathname.split('/');
    for (const folderName of pathArray) {
      if (languageModes[folderName.toLowerCase()]) {
        return languageModes[folderName.toLowerCase()];
      }
    }
    return 'text/javascript'; // Default to JavaScript if no match
  }

  // Get the appropriate CodeMirror mode based on the folder name
  const defaultCodeMirrorMode = determineLanguageMode();

  const codeElements = document.querySelectorAll('pre.code');
  codeElements.forEach((codeElement, index) => {
    // Check if a specific language mode is set via the data-language attribute
    const languageName = codeElement.getAttribute('data-language');
    const customMode = languageName ? languageModes[languageName.toLowerCase()] : null;
    const codeMirrorMode = customMode || defaultCodeMirrorMode;

    // Check if the <pre> contains a <code> tag
    let codeText = codeElement.textContent;
    const codeTag = codeElement.querySelector('code');
    if (codeTag) {
      codeText = codeTag.textContent;
    }

    // Create a new <textarea> element
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    codeElement.textContent = ''; // Clear the content of the <pre>
    codeElement.appendChild(textArea); // Append the <textarea> to the <pre>

    // Initialize CodeMirror
    const codeMirror = CodeMirror.fromTextArea(textArea, {
      lineNumbers: true,
      mode: codeMirrorMode,
      readOnly: true,
      theme: 'darcula',
      lineWrapping: true,
    });

    // Store the CodeMirror instance in the array
    codeMirrorInstances.push(codeMirror);

    // Resize CodeMirror to fit content height
    codeMirror.on('change', () => {
      codeMirror.setSize(null, codeMirror.getDoc().height + 'px');
    });
  });
  addCopyButtons();
});

// adding body content
const overlayDiv = document.createElement('div');
overlayDiv.id = 'overlay';
overlayDiv.className = 'overlay';
overlayDiv.innerHTML = `
    <span id='closeButton' class='close-btn'>&times;</span>
    <img id='overlayImage' class='overlay-img' src='' alt='Isolated Image'>
    <div class='zoom-controls'>
       <button id='zoomIn' class='zoom-btn'>+</button>
       <button id='zoomOut' class='zoom-btn'>-</button>
    </div>
`;
document.body.insertBefore(overlayDiv, document.body.firstChild.nextSibling);

// Create audio element
const audio = document.createElement('audio');
audio.id = 'bgMusic';
audio.loop = true;
audio.innerHTML = `
<source src='${getRelativePath("../TheEndingSong.mp3")}' type='audio/mpeg'>
`
document.querySelector('div.container').appendChild(audio);




// Function to create a copy button for each <pre> element with class 'code'
function addCopyButtons() {
  // Get all <pre> elements with class 'code'
  var codeElements = document.querySelectorAll("pre.code");

  // Loop through each <pre> element
  codeElements.forEach(function(element, index) {
    // Create a copy button
    var copyButton = document.createElement("button");
    copyButton.innerHTML = `<img src='${getRelativePath("../images/CopyButtonSymbol.png")}' alt='Copy Code'>`;
    copyButton.title = "Copy Code Without Comments";
    copyButton.onclick = function() {
      copyCodeWithoutComments(index);
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

// Function to copy code without comments for a specific CodeMirror instance
function copyCodeWithoutComments(index) {
  // Get the CodeMirror instance
  var codeMirror = codeMirrorInstances[index];

  // Get the code from the CodeMirror instance
  var code = codeMirror.getValue();

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
  const images_scroll = document.querySelectorAll('.images_scroll');
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  const closeButton = document.getElementById('closeButton');
  const zoomInButton = document.getElementById('zoomIn');
  const zoomOutButton = document.getElementById('zoomOut');
  const progressBar = document.getElementById('progress-bar');

  let scale = 1;
  const zoomSpeed = 0.1;
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;
  let initialDistance = 0;
  let isPinching = false;

  images.forEach(image => {
      image.addEventListener('click', () => {
        const scrollY = window.scrollY;
        overlay.style.top = `${scrollY}px`;
        overlay.style.display = 'flex';
        overlayImage.src = image.src;
        document.body.classList.add('no-scroll');
        progressBar.style.display = "none";
      });
  });

  images_scroll.forEach(image_scroll => {
    image_scroll.addEventListener('click', () => {
      const scrollY = window.scrollY;
      overlay.style.top = `${scrollY}px`
      overlay.style.display = 'flex';
      overlayImage.src = image_scroll.src;
      document.body.classList.add('no-scroll');
      progressBar.style.display = "none";
    });
  });

  closeButton.addEventListener('click', () => {
      overlay.style.display = 'none';
      document.body.classList.remove('no-scroll');
      progressBar.style.display = "block";
      resetZoom();
  });

  overlayImage.addEventListener('wheel', (event) => {
      event.preventDefault();
      if (event.deltaY < 0) {
          scale += zoomSpeed;
      } else {
          scale -= zoomSpeed;
      }
      scale = Math.min(Math.max(0.5, scale), 5); // Restrict scale between 0.5 and 3
      overlayImage.style.transform = `scale(${scale})`;
  });

  zoomInButton.addEventListener('click', () => {
      scale += zoomSpeed;
      scale = Math.min(scale, 5); // Max scale of 3
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
          document.body.classList.remove('no-scroll');
          progressBar.style.display = "block";
      }
  });

  function resetZoom() {
      scale = 1;
      overlayImage.style.transform = `scale(${scale})`;
      overlayImage.style.left = '0';
      overlayImage.style.top = '0';
  }

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
      if (event.touches.length === 1) {
          isDragging = true;
          startX = event.touches[0].clientX;
          startY = event.touches[0].clientY;
          initialLeft = parseInt(window.getComputedStyle(overlayImage).left) || 0;
          initialTop = parseInt(window.getComputedStyle(overlayImage).top) || 0;
      } else if (event.touches.length === 2) {
          isPinching = true;
          initialDistance = getDistance(event.touches[0], event.touches[1]);
          scale = parseFloat(overlayImage.style.transform.replace(/[^0-9.-]/g, '')) || 1;
      }
  });

  overlayImage.addEventListener('touchmove', (event) => {
      if (isDragging && event.touches.length === 1) {
          const dx = event.touches[0].clientX - startX;
          const dy = event.touches[0].clientY - startY;
          overlayImage.style.left = `${initialLeft + dx}px`;
          overlayImage.style.top = `${initialTop + dy}px`;
      } else if (isPinching && event.touches.length === 2) {
          const currentDistance = getDistance(event.touches[0], event.touches[1]);
          scale *= currentDistance / initialDistance;
          scale = Math.min(Math.max(0.5, scale), 3); // Restrict scale between 0.5 and 3
          overlayImage.style.transform = `scale(${scale})`;
          initialDistance = currentDistance;
      }
  });

  overlayImage.addEventListener('touchend', (event) => {
      if (event.touches.length < 2) {
          isPinching = false;
      }
      if (event.touches.length === 0) {
          isDragging = false;
      }
  });

  // Prevent native drag behavior
  overlayImage.addEventListener('dragstart', (event) => {
      event.preventDefault();
  });

  function getDistance(touch1, touch2) {
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dy + dy * dy);
  }
});
