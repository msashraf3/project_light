function takeScreenshot() {
    // Hide the buttons
    document.getElementById("buttons").style.display = "none";
  
    // Set the size of the canvas to the size of the window
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Get the context of the canvas
    var ctx = canvas.getContext("2d");
  
    // Scroll to the top of the page and draw the entire page onto the canvas
    window.scrollTo(0, 0);
    ctx.drawImage(document.body, 0, 0, window.innerWidth, window.innerHeight);
  
    // Append the canvas to a new div
    var screenshotDiv = document.getElementById("screenshot-div");
    screenshotDiv.appendChild(canvas);
    screenshotDiv.style.display = "block";
  
    // Create a data URL from the canvas and set it as the href of the download link
    var dataURL = canvas.toDataURL("image/png");
    document.getElementById("download-link").href = dataURL;
    document.getElementById("download-link").style.display = "block";
  
    // Show the buttons again after a delay
    setTimeout(function() {
      document.getElementById("buttons").style.display = "block";
      screenshotDiv.innerHTML = '';
      document.getElementById("download-link").style.display = "none";
    }, 2000);
  }
  
  function hideButtons() {
    // Hide the buttons
    document.getElementById("buttons").style.display = "none";
  }

  
      $(document).ready(function() {
        var progressBarWidth = $('#progress-bar').width();
        var logoWidth = $('#logo-container').width();
        
        var positionLeft = progressBarWidth - logoWidth;
        
        $('#logo-container').css('left', positionLeft + 'px');
      });
  