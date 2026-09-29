import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
// import { SunLight } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/lights/SunLight.js";

// Initialize the scene
const scene = new THREE.Scene();

// CAMERAS
// Camera
const Camera = new THREE.PerspectiveCamera(50.0, window.innerWidth / window.innerHeight, 0.1, 1000);
Camera.position.set(7.005946636199951, 6.2644267082214355, 6.353290557861328);
Camera.rotation.set(1.1093189716339111, 0.8149281740188599, -0.0);
console.log('Camera Camera position:', Camera.position);
scene.add(Camera);

// license
const license = new THREE.OrthographicCamera();
license.position.set(-2.280182361602783, 0.6421211957931519, 4.547303676605225);
license.rotation.set(0.0, 0.0, -0.0);
console.log('Camera license position:', license.position);
scene.add(license);

// LIGHTS
const Sun = new THREE.DirectionalLight(0xffffff, 3.0);
Sun.position.set(0.0, 0.8, 0.2);
scene.add(Sun);

const ambient = new THREE.AmbientLight(0x404040, 0.6);
scene.add(ambient);

// OBJECTS
const loader = new GLTFLoader();

// Body_010
loader.load('exported_gltfs/Body_010.glb',
	(gltf) => {
		const Body_010 = gltf.scene;
		Body_010.position.set(0.0, 0.0, -0.0);
		Body_010.rotation.set(0.0, 0.0, -0.0);
		scene.add(Body_010);
	},
	(xhr) => {
		console.log('Body_010 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Body_010', error);
	}
);

// Cube
loader.load('exported_gltfs/Cube.glb',
	(gltf) => {
		const Cube = gltf.scene;
		Cube.position.set(0.0, 0.23375476896762848, 5.376450538635254);
		Cube.rotation.set(0.0, 0.0, -0.0);
		scene.add(Cube);
	},
	(xhr) => {
		console.log('Cube loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Cube', error);
	}
);

// Cube_001
loader.load('exported_gltfs/Cube_001.glb',
	(gltf) => {
		const Cube_001 = gltf.scene;
		Cube_001.position.set(-2.5, 2.0999999046325684, -2.5);
		Cube_001.rotation.set(0.0, 0.0, -0.0);
		scene.add(Cube_001);
	},
	(xhr) => {
		console.log('Cube_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Cube_001', error);
	}
);

// driveway
loader.load('exported_gltfs/driveway.glb',
	(gltf) => {
		const driveway = gltf.scene;
		driveway.position.set(-2.263124465942383, 0.12998518347740173, 3.0170977115631104);
		driveway.rotation.set(0.0, 0.0, -0.0);
		scene.add(driveway);
	},
	(xhr) => {
		console.log('driveway loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model driveway', error);
	}
);

// driveway_001
loader.load('exported_gltfs/driveway_001.glb',
	(gltf) => {
		const driveway_001 = gltf.scene;
		driveway_001.position.set(1.2712507247924805, 0.12998518347740173, 9.20095443725586);
		driveway_001.rotation.set(0.0, 1.5707963705062866, 0.0);
		scene.add(driveway_001);
	},
	(xhr) => {
		console.log('driveway_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model driveway_001', error);
	}
);

// ev1
loader.load('exported_gltfs/ev1.glb',
	(gltf) => {
		const ev1 = gltf.scene;
		ev1.position.set(0.0, 1.5599501132965088, -2.833702802658081);
		ev1.rotation.set(-1.570796257510665e-07, -1.5707963705062866, 0.0);
		scene.add(ev1);
	},
	(xhr) => {
		console.log('ev1 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model ev1', error);
	}
);

// floor
loader.load('exported_gltfs/floor.glb',
	(gltf) => {
		const floor = gltf.scene;
		floor.position.set(0.0, 0.0, -0.0);
		floor.rotation.set(0.0, 0.0, -0.0);
		scene.add(floor);
	},
	(xhr) => {
		console.log('floor loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model floor', error);
	}
);

// license
loader.load('exported_gltfs/license.glb',
	(gltf) => {
		const license = gltf.scene;
		license.position.set(-2.280182361602783, 0.6421211957931519, 4.547303676605225);
		license.rotation.set(0.0, 0.0, -0.0);
		scene.add(license);
	},
	(xhr) => {
		console.log('license loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model license', error);
	}
);

// Male_emotion_usual_001_001
loader.load('exported_gltfs/Male_emotion_usual_001_001.glb',
	(gltf) => {
		const Male_emotion_usual_001_001 = gltf.scene;
		Male_emotion_usual_001_001.position.set(0.0, 0.0, -0.0);
		Male_emotion_usual_001_001.rotation.set(0.0, 0.0, 0.0);
		scene.add(Male_emotion_usual_001_001);
	},
	(xhr) => {
		console.log('Male_emotion_usual_001_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Male_emotion_usual_001_001', error);
	}
);

// Pants_010_001
loader.load('exported_gltfs/Pants_010_001.glb',
	(gltf) => {
		const Pants_010_001 = gltf.scene;
		Pants_010_001.position.set(0.0, 0.0, -0.0);
		Pants_010_001.rotation.set(0.0, 0.0, 0.0);
		scene.add(Pants_010_001);
	},
	(xhr) => {
		console.log('Pants_010_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Pants_010_001', error);
	}
);

// Plane
loader.load('exported_gltfs/Plane.glb',
	(gltf) => {
		const Plane = gltf.scene;
		Plane.position.set(5.9319305419921875, -3.6767165660858154, -2.5245800018310547);
		Plane.rotation.set(0.0, 0.0, 0.0);
		scene.add(Plane);
	},
	(xhr) => {
		console.log('Plane loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Plane', error);
	}
);

// sedan_car_body_sedan_car_body_1_0
loader.load('exported_gltfs/sedan_car_body_sedan_car_body_1_0.glb',
	(gltf) => {
		const sedan_car_body_sedan_car_body_1_0 = gltf.scene;
		sedan_car_body_sedan_car_body_1_0.position.set(0.0, 0.0, -0.0);
		sedan_car_body_sedan_car_body_1_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_body_sedan_car_body_1_0);
	},
	(xhr) => {
		console.log('sedan_car_body_sedan_car_body_1_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_body_sedan_car_body_1_0', error);
	}
);

// sedan_car_body_sedan_car_body_2_0
loader.load('exported_gltfs/sedan_car_body_sedan_car_body_2_0.glb',
	(gltf) => {
		const sedan_car_body_sedan_car_body_2_0 = gltf.scene;
		sedan_car_body_sedan_car_body_2_0.position.set(0.0, 0.0, -0.0);
		sedan_car_body_sedan_car_body_2_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_body_sedan_car_body_2_0);
	},
	(xhr) => {
		console.log('sedan_car_body_sedan_car_body_2_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_body_sedan_car_body_2_0', error);
	}
);

// sedan_car_body_sedan_car_body_3_0
loader.load('exported_gltfs/sedan_car_body_sedan_car_body_3_0.glb',
	(gltf) => {
		const sedan_car_body_sedan_car_body_3_0 = gltf.scene;
		sedan_car_body_sedan_car_body_3_0.position.set(0.0, 0.0, -0.0);
		sedan_car_body_sedan_car_body_3_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_body_sedan_car_body_3_0);
	},
	(xhr) => {
		console.log('sedan_car_body_sedan_car_body_3_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_body_sedan_car_body_3_0', error);
	}
);

// sedan_car_wheel_lb_sedan_car_wheel_lb_1_0
loader.load('exported_gltfs/sedan_car_wheel_lb_sedan_car_wheel_lb_1_0.glb',
	(gltf) => {
		const sedan_car_wheel_lb_sedan_car_wheel_lb_1_0 = gltf.scene;
		sedan_car_wheel_lb_sedan_car_wheel_lb_1_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_lb_sedan_car_wheel_lb_1_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_lb_sedan_car_wheel_lb_1_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_lb_sedan_car_wheel_lb_1_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_lb_sedan_car_wheel_lb_1_0', error);
	}
);

// sedan_car_wheel_lb_sedan_car_wheel_lb_2_0
loader.load('exported_gltfs/sedan_car_wheel_lb_sedan_car_wheel_lb_2_0.glb',
	(gltf) => {
		const sedan_car_wheel_lb_sedan_car_wheel_lb_2_0 = gltf.scene;
		sedan_car_wheel_lb_sedan_car_wheel_lb_2_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_lb_sedan_car_wheel_lb_2_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_lb_sedan_car_wheel_lb_2_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_lb_sedan_car_wheel_lb_2_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_lb_sedan_car_wheel_lb_2_0', error);
	}
);

// sedan_car_wheel_lf_sedan_car_wheel_lf_1_0
loader.load('exported_gltfs/sedan_car_wheel_lf_sedan_car_wheel_lf_1_0.glb',
	(gltf) => {
		const sedan_car_wheel_lf_sedan_car_wheel_lf_1_0 = gltf.scene;
		sedan_car_wheel_lf_sedan_car_wheel_lf_1_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_lf_sedan_car_wheel_lf_1_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_lf_sedan_car_wheel_lf_1_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_lf_sedan_car_wheel_lf_1_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_lf_sedan_car_wheel_lf_1_0', error);
	}
);

// sedan_car_wheel_lf_sedan_car_wheel_lf_2_0
loader.load('exported_gltfs/sedan_car_wheel_lf_sedan_car_wheel_lf_2_0.glb',
	(gltf) => {
		const sedan_car_wheel_lf_sedan_car_wheel_lf_2_0 = gltf.scene;
		sedan_car_wheel_lf_sedan_car_wheel_lf_2_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_lf_sedan_car_wheel_lf_2_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_lf_sedan_car_wheel_lf_2_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_lf_sedan_car_wheel_lf_2_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_lf_sedan_car_wheel_lf_2_0', error);
	}
);

// sedan_car_wheel_rb_sedan_car_wheel_rb_1_0
loader.load('exported_gltfs/sedan_car_wheel_rb_sedan_car_wheel_rb_1_0.glb',
	(gltf) => {
		const sedan_car_wheel_rb_sedan_car_wheel_rb_1_0 = gltf.scene;
		sedan_car_wheel_rb_sedan_car_wheel_rb_1_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_rb_sedan_car_wheel_rb_1_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_rb_sedan_car_wheel_rb_1_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_rb_sedan_car_wheel_rb_1_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_rb_sedan_car_wheel_rb_1_0', error);
	}
);

// sedan_car_wheel_rb_sedan_car_wheel_rb_2_0
loader.load('exported_gltfs/sedan_car_wheel_rb_sedan_car_wheel_rb_2_0.glb',
	(gltf) => {
		const sedan_car_wheel_rb_sedan_car_wheel_rb_2_0 = gltf.scene;
		sedan_car_wheel_rb_sedan_car_wheel_rb_2_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_rb_sedan_car_wheel_rb_2_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_rb_sedan_car_wheel_rb_2_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_rb_sedan_car_wheel_rb_2_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_rb_sedan_car_wheel_rb_2_0', error);
	}
);

// sedan_car_wheel_rf_sedan_car_wheel_rf_1_0
loader.load('exported_gltfs/sedan_car_wheel_rf_sedan_car_wheel_rf_1_0.glb',
	(gltf) => {
		const sedan_car_wheel_rf_sedan_car_wheel_rf_1_0 = gltf.scene;
		sedan_car_wheel_rf_sedan_car_wheel_rf_1_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_rf_sedan_car_wheel_rf_1_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_rf_sedan_car_wheel_rf_1_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_rf_sedan_car_wheel_rf_1_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_rf_sedan_car_wheel_rf_1_0', error);
	}
);

// sedan_car_wheel_rf_sedan_car_wheel_rf_2_0
loader.load('exported_gltfs/sedan_car_wheel_rf_sedan_car_wheel_rf_2_0.glb',
	(gltf) => {
		const sedan_car_wheel_rf_sedan_car_wheel_rf_2_0 = gltf.scene;
		sedan_car_wheel_rf_sedan_car_wheel_rf_2_0.position.set(0.0, 0.0, -0.0);
		sedan_car_wheel_rf_sedan_car_wheel_rf_2_0.rotation.set(0.0, 0.0, -0.0);
		scene.add(sedan_car_wheel_rf_sedan_car_wheel_rf_2_0);
	},
	(xhr) => {
		console.log('sedan_car_wheel_rf_sedan_car_wheel_rf_2_0 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model sedan_car_wheel_rf_sedan_car_wheel_rf_2_0', error);
	}
);

// Shoe_Sneakers_009_001
loader.load('exported_gltfs/Shoe_Sneakers_009_001.glb',
	(gltf) => {
		const Shoe_Sneakers_009_001 = gltf.scene;
		Shoe_Sneakers_009_001.position.set(0.0, 0.0, -0.0);
		Shoe_Sneakers_009_001.rotation.set(0.0, 0.0, 0.0);
		scene.add(Shoe_Sneakers_009_001);
	},
	(xhr) => {
		console.log('Shoe_Sneakers_009_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model Shoe_Sneakers_009_001', error);
	}
);

// T_Shirt_009_001
loader.load('exported_gltfs/T_Shirt_009_001.glb',
	(gltf) => {
		const T_Shirt_009_001 = gltf.scene;
		T_Shirt_009_001.position.set(0.0, 0.0, -0.0);
		T_Shirt_009_001.rotation.set(0.0, 0.0, 0.0);
		scene.add(T_Shirt_009_001);
	},
	(xhr) => {
		console.log('T_Shirt_009_001 loaded: ' + (xhr.loaded / xhr.total * 100) + '%');
	},
	(error) => {
		console.error('An error happened loading the model T_Shirt_009_001', error);
	}
);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Background Color
scene.background = new THREE.Color(0x0c0c0c);

// Event Listeners
window.addEventListener('resize', () => {
	Camera.aspect = window.innerWidth / window.innerHeight;
	Camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

// OrbitControls
const controls = new OrbitControls(Camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animation loop
function animate() {
	requestAnimationFrame(animate);
	controls.update(); // for damping
	renderer.render(scene, Camera);
}

animate();
