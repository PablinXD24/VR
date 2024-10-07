document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const vrLeftEye = document.getElementById('vrLeftEye');
    const vrRightEye = document.getElementById('vrRightEye');

    if (file) {
        const videoURL = URL.createObjectURL(file);
        vrLeftEye.src = videoURL;
        vrRightEye.src = videoURL;
        document.getElementById('vrVideoContainer').style.display = 'flex';
    }
});
