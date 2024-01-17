function getPathFromUrl(url) {
    return url.split("?")[0];
  }
  
  // Execute the code on page load
  console.log('YouTube Link Path Extractor content script loaded.');
  
  // Get the path from the current URL
  const path = getPathFromUrl(window.location.href);
  
  // Update the browser location if on a YouTube page
  if (path !== window.location.href) {
    console.log('Navigating to:', path);
    window.location.href = path;
  }
  