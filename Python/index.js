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

