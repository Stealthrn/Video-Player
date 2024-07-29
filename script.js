const videoFileInput = document.getElementById('video-file-input');
const customUploadButton = document.getElementById('custom-upload-button');

customUploadButton.addEventListener('click', () => {
    const selectedFile = videoFileInput.files[0];
    if (selectedFile) {
        // Handle the file (e.g., upload to server or display it)
        console.log('Selected video file:', selectedFile.name);
    } else {
        console.log('No video file selected.');
    }
});
