let videoURL;

document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const vrLeftEye = document.getElementById('vrLeftEye');
    const vrRightEye = document.getElementById('vrRightEye');

    if (file) {
        videoURL = URL.createObjectURL(file);
        vrLeftEye.src = videoURL;
        vrRightEye.src = videoURL;
        document.getElementById('vrVideoContainer').style.display = 'flex';
    }
});

// Função para manipular a orientação do dispositivo
window.addEventListener('deviceorientation', function(event) {
    const leftVideo = document.getElementById('vrLeftEye');
    const rightVideo = document.getElementById('vrRightEye');

    // Calcula o ângulo de rotação
    const tiltLR = event.gamma; // Movimento lateral
    const tiltFB = event.beta;   // Movimento frontal

    // Limita os valores para não exceder os limites do vídeo
    const leftTransform = `translate(${tiltLR}deg, ${-tiltFB}deg)`;
    const rightTransform = `translate(${tiltLR}deg, ${-tiltFB}deg)`;

    leftVideo.style.transform = leftTransform;
    rightVideo.style.transform = rightTransform;
});
