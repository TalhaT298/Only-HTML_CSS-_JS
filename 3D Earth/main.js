// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

// Load the Earth texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
const earthNormalMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
const earthSpecularMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');

// Create the Earth geometry and material
const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: earthNormalMap,
    specularMap: earthSpecularMap,
    specular: 0x222222,
    shininess: 25
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Earth
    earth.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});