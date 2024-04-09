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