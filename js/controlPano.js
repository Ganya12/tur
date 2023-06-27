const Panorama1 = new PANOLENS.ImagePanorama('assets/Panorama_1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/Panorama_2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/Panorama_3.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/Panorama_4.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/Panorama_5.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
    // Связь коридор и зал
    new THREE.Vector3(2000, 0, 1500),
    new THREE.Vector3(1630, 0, -660),
    // Связь зал и кухня
    new THREE.Vector3(1600, 0, 400),
    new THREE.Vector3(-1800, 0, 400),
    // Связь зал и спальня
    new THREE.Vector3(1600, 0, 0),
    new THREE.Vector3(1800, 0, 0),
    // Связь спальня и ванная
    new THREE.Vector3(-800, 0, -2400),
    new THREE.Vector3(0, 0, 2300),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});

// Связь коридор и зал
Panorama1.link(Panorama2, SpotPositions[0]);
Panorama2.link(Panorama1, SpotPositions[1]);

// Связь зал и кухня
Panorama2.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama2, SpotPositions[3]);

// Связь зал и спальня
Panorama2.link(Panorama4, SpotPositions[4]);
Panorama4.link(Panorama2, SpotPositions[5]);

// Связь спальня и ванная
Panorama4.link(Panorama5, SpotPositions[6]);
Panorama5.link(Panorama4, SpotPositions[7]);

viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5);
