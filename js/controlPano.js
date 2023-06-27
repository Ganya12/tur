const Panorama1 = new PANOLENS.ImagePanorama('assets/Panorama_1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/Panorama_2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/Panorama_3.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/Panorama_4.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/Panorama_5.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
    // Связь в коридоре
    new THREE.Vector3(500, 0, 1000),
    new THREE.Vector3(1630, 0, -660),
    // Связь коридора_2 и комнаты переговоров
    // new THREE.Vector3(1860, 0, 620),
    // Связь коридора_1 и комнаты переговоров
    new THREE.Vector3(1600, 0, 400),
    new THREE.Vector3(-1800, 0, 400),
    // Связь переговорных
    new THREE.Vector3(1600, 0, 0),
    new THREE.Vector3(1800, 0, 0),
    // Связь коридора_1 и гостинной_1
    new THREE.Vector3(-800, 0, -2400),
    new THREE.Vector3(0, 0, 2300),
    // Связь гостинной
    // new THREE.Vector3(800, 0, 0),
    // new THREE.Vector3(-800, 0, 0),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});

// Связь в коридоре
Panorama1.link(Panorama2, SpotPositions[0]);
Panorama2.link(Panorama1, SpotPositions[1]);

// // Связь коридора_2 и комнаты переговоров_1
// Panorama2.link(Panorama3, SpotPositions[2]);

// Связь коридора_1 и комнаты переговоров_1
Panorama2.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama2, SpotPositions[3]);

// Связь переговорной_1 и переговорной_2
Panorama2.link(Panorama4, SpotPositions[4]);
Panorama4.link(Panorama2, SpotPositions[5]);

// Связь коридора_1 и гостинной_1
Panorama4.link(Panorama5, SpotPositions[6]);
Panorama5.link(Panorama4, SpotPositions[7]);

// // Связь гостинной_1 и гостинной_2
// Panorama5.link(Panorama6, SpotPositions[8]);
// Panorama6.link(Panorama5, SpotPositions[9]);

viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5);
