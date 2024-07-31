const videoFileInput = document.getElementById('video-file-input');
const customUploadButton = document.getElementById('custom-upload-button');
const videoGrid = document.getElementById('videoGrid');
const fileSelectButton = document.getElementById('file-select-button')
function removeExtension(filename) {
    return filename.substring(0, filename.lastIndexOf('.'));
}
fileSelectButton.addEventListener('click', () => {
    videoFileInput.click();
})

videoFileInput.addEventListener('change', (e) => {
    if (e.target.files.length === 0) {
        fileSelectButton.nextElementSibling.textContent = 'No file chosen';
        return;
    }
    fileSelectButton.nextElementSibling.textContent = e.target.files[0].name;
})
customUploadButton.addEventListener('click', () => {
    const selectedFile = videoFileInput.files[0];
    if (selectedFile) {
        const videoURL = URL.createObjectURL(selectedFile);
        const videoTitle = document.createElement('h2');
        videoTitle.className = 'video-title'
        videoTitle.textContent = removeExtension(selectedFile.name);
        const videoElement = document.createElement('video');
        videoElement.className = 'video-preview';
        videoElement.src = videoURL;
        videoElement.muted = true;
        videoElement.addEventListener('mouseenter', () => {
            videoElement.currentTime = 0; // Start from the beginning
            videoElement.play();
            setTimeout(() => {
                videoElement.pause();
            }, 5000); // Play for 5 seconds
        });
        videoElement.addEventListener('mouseleave', () => {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset to the beginning
        });
        const videoContainer = document.createElement('div')
        videoContainer.appendChild(videoTitle);
        videoContainer.appendChild(videoElement);
        videoGrid.appendChild(videoContainer);
        // Open the video link in a popup window
        videoElement.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(videoURL, '_blank');
        });

    } else {
        console.log('No video file selected.');
    }
});

// document.getElementById('videoUpload').addEventListener('change', function (event) {
//     const files = event.target.files;
//     const videoGrid = document.getElementById('videoGrid');

//     // Clear the grid before adding new videos
//     videoGrid.innerHTML = '';

//     Array.from(files).forEach(file => {
//         const videoURL = URL.createObjectURL(file);
//         const videoElement = document.createElement('video');
//         videoElement.className = 'video-preview';
//         videoElement.src = videoURL;
//         videoElement.muted = true;

//         videoElement.addEventListener('mouseenter', () => {
//             videoElement.currentTime = 0; // Start from the beginning
//             videoElement.play();
//             setTimeout(() => {
//                 videoElement.pause();
//             }, 5000); // Play for 5 seconds
//         });

//         videoElement.addEventListener('mouseleave', () => {
//             videoElement.pause();
//             videoElement.currentTime = 0; // Reset to the beginning
//         });

//         videoGrid.appendChild(videoElement);
//     });
// });