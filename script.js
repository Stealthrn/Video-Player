const videoFileInput = document.getElementById('video-file-input');
const customUploadButton = document.getElementById('custom-upload-button');
const videoLinkContainer = document.getElementById('video-link-container');

customUploadButton.addEventListener('click', () => {
    const selectedFile = videoFileInput.files[0];
    if (selectedFile) {
        const videoLink = document.createElement('a');
        videoLink.href = URL.createObjectURL(selectedFile);
        videoLink.textContent = selectedFile.name;
        // Open the video link in a popup window
        videoLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(videoLink.href, '_blank', 'width=800,height=600');
        });
        // Append the video link to the link container
        videoLinkContainer.appendChild(videoLink);
        // Add a line break after each video link
        videoLinkContainer.appendChild(document.createElement('br'));
    } else {
        console.log('No video file selected.');
    }
});