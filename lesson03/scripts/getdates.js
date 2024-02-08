document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the first paragraph in the footer
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy; ' + currentYear+'<br>🤓Raphael Shawn Taurai <br><br>Zimbabwe<br> <img src="images/zim-fly-flag.jpg" alt="Zimbabwe Fly Flag" width="40" height="30">';
  
    // Get the last modified date and update the second paragraph in the footer
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;
  });