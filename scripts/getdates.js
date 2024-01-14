document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
  
    // Update the copyright text
    var copyRights = document.getElementById("copyRights");
    copyRights.textContent += " " + currentYear;
  
    // Get the last modified date
    var lastModifiedText = document.getElementById("lastModified");
    var lastModified = document.lastModified;
  
    // Update the last modified date text
    lastModifiedText.textContent = "Last modified: " + lastModified;
  });