const videoFileInput = document.getElementById('video-file-input');
const customUploadButton = document.getElementById('custom-upload-button');
const videoGrid = document.getElementById('videoGrid');

customUploadButton.addEventListener('click', () => {
    const selectedFile = videoFileInput.files[0];
    if (selectedFile) {
        const videoURL = URL.createObjectURL(selectedFile);
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

        videoGrid.appendChild(videoElement);
        // Open the video link in a popup window
        videoElement.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(videoLink.href, '_blank', 'width=800,height=600');
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