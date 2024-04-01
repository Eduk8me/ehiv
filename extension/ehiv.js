function hideVideoOption() {
    var videoLabel = document.querySelector('span[aria-label="Video v"]');
    if (videoLabel) {
        var outerDiv = videoLabel.closest('.goog-menuitem.apps-menuitem');
        if (outerDiv) {
            outerDiv.style.display = 'none';
            console.log('Video option hidden.');
        }
    }
}

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional for loop for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            hideVideoOption();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the document body for configured mutations
observer.observe(document.body, config);

// Initial check in case the element is already there
hideVideoOption();

