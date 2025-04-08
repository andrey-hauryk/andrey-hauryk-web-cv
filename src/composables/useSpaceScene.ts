import { onMounted } from 'vue';
import type { Ref } from 'vue';
import * as THREE from 'three';
import { useBaseUrl } from './useBaseUrl';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function useSpaceScene(spaceScene: Ref<HTMLDivElement | null>) {
  const { getAssetPath } = useBaseUrl();

  let starMeshes: {
    points: THREE.Points,
    speed: THREE.Vector3
  }[] = [];

  const smokeClouds: {
    sprite: THREE.Sprite,
    rotationSpeed: number
  }[] = [];
  

  // const colors = ref({
  //   violet: '#6A0DAD',
  //   blue: '#0000FF',
  //   blueCyan: '#1E90FF',
  //   blueViolet: '#8A2BE2',
  //   paleOrangeViolet: '#D8A0D7',

  //   neonPurple: '#B026FF',       // яркий неоновый фиолетовый
  //   neonBlue: '#00F0FF',         // голубовато-неоновый
  //   electricViolet: '#8F00FF',   // насыщенный светящийся фиолетовый
  //   deepSpaceBlue: '#1A1AFF',    // глубокий синий с эффектом свечения
  //   plasmaPink: '#FF6EC7',       // розово-фиолетовый (перелив)
  //   auroraTeal: '#00FFC6',       // светящийся бирюзовый
  //   cosmicIndigo: '#4B0082',     // насыщенный индиго
  //   galaxyGlow: '#CBA0FF',       // бледный неон с сиреневым отливом
  //   ultraviolet: '#9400D3',      // глубокий ультрафиолет
  //   nebulaPink: '#FF77FF', 
  // });

  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let controls: OrbitControls;

  const initScene = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (spaceScene.value) {
      spaceScene.value.appendChild(renderer.domElement);
    }

    // OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enablePan = false;

    createStars(5000, 'star_05.png', 'white', 8, new THREE.Vector3(0, 0.01, 0));

    createStars(500, 'star_08.png', '#8F00FF', 20, new THREE.Vector3(0.08, 0.04, 0.07));


    // scorch - будут большие светящиеся звезды - 3 типа
    createStars(100, 'scorch_01.png', '#FF77FF', 40, new THREE.Vector3(0, 0.1, 0));

    // createComplexSmokeCloud(
    //   [
    //     'smoke_01.png', 'smoke_02.png', 'smoke_03.png',
    //     'smoke_04.png', 'smoke_05.png', 'smoke_06.png',
    //     'smoke_07.png', 'smoke_08.png', 'smoke_09.png'
    //   ],
    //   new THREE.Vector3(0, 0, -100),
    //   [250, 400],
    //   [0.1, 1.2],
    //   8,
    //   new THREE.Vector3(120, 80, 60),
    //   new THREE.Vector3(1.5, 1, 1),
    //   '#CBA0FF',
    // );

  };

  const createStars = (
    starCount: number,
    texturePath: string,
    color: string | number = 0xffffff,
    size: number = 6,
    speed: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
  ) => {
    const starGeometry = new THREE.BufferGeometry();

    const starTexture = new THREE.TextureLoader().load(getAssetPath(texturePath));

    const starMaterial = new THREE.PointsMaterial({
      map: starTexture,
      color: color,
      size: size,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.1,
      sizeAttenuation: true,
    });

    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000;
      positions[i * 3 + 1] = Math.random() * 2000 - 1000;
      positions[i * 3 + 2] = Math.random() * 2000 - 1000;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    if (speed.length() > 0) {
      starMeshes.push({ points: stars, speed });
    }
  };

  // const createComplexSmokeCloud = (
  //   textureNames: string[],
  //   basePosition: THREE.Vector3,
  //   scaleRange: [number, number] = [200, 400],
  //   opacityRange: [number, number] = [0.2, 0.5],
  //   count: number = 6,
  //   spread: THREE.Vector3 = new THREE.Vector3(1009, 600, 400),
  //   stretch: THREE.Vector3 = new THREE.Vector3(1.6, 1, 1),
  //   color: string | number = 0xffffff,
  // ) => {
  //   for (let i = 0; i < count; i++) {
  //     const texturePath = textureNames[Math.floor(Math.random() * textureNames.length)];
  //     const texture = new THREE.TextureLoader().load(getAssetPath(texturePath));
  
  //     const material = new THREE.SpriteMaterial({
  //       map: texture,
  //       color: color,
  //       transparent: true,
  //       opacity: THREE.MathUtils.randFloat(opacityRange[0], opacityRange[1]),
  //       depthWrite: false,
  //       blending: THREE.AdditiveBlending,
  //     });
  
  //     const sprite = new THREE.Sprite(material);
  
  //     const offset = new THREE.Vector3(
  //       THREE.MathUtils.randFloatSpread(spread.x * (Math.random() > 0.5 ? 1 : 2)),
  //       THREE.MathUtils.randFloatSpread(spread.y * (Math.random() > 0.5 ? 1 : 2)),
  //       THREE.MathUtils.randFloatSpread(spread.z * (Math.random() > 0.5 ? 1 : 2))
  //     );
  
  //     sprite.position.copy(basePosition.clone().add(offset));
  
  //     const baseScale = THREE.MathUtils.randFloat(scaleRange[0], scaleRange[1]);
  //     sprite.scale.set(
  //       baseScale * stretch.x,
  //       baseScale * stretch.y,
  //       baseScale * stretch.z
  //     );
  
  //     scene.add(sprite);
  
  //     const rotationSpeed = THREE.MathUtils.randFloat(0.0005, 0.002);
  //     const update = () => {
  //       material.rotation += rotationSpeed;
  //       requestAnimationFrame(update);
  //     };
  //     update();
  //   }
  // };  

  const animate = () => {
    requestAnimationFrame(animate);

    for (const { points, speed } of starMeshes) {
      points.position.add(speed);
    }

    for (const cloud of smokeClouds) {
      cloud.sprite.material.rotation += cloud.rotationSpeed;
    }

    controls.update();
    renderer.render(scene, camera);
  };

  onMounted(() => {
    initScene();
    animate();
  });

  return {
    spaceScene,
  };
}
