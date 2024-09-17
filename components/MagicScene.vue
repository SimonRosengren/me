<template>
    <div class="fixed top-0 -z-20">
        <canvas ref="canvasRef" />
    </div>
</template>

<script lang="ts" setup>
import { Scene, PerspectiveCamera, Mesh, SphereGeometry, MeshBasicMaterial, WebGL1Renderer, Vector3, Color, Fog } from 'three';
import { useWindowSize } from '@vueuse/core';
import { Star } from '../models/star';

const canvasRef = ref<HTMLCanvasElement | null>(null)
let renderer: WebGL1Renderer
let camera: PerspectiveCamera
let aspectRatio: Ref<number>
let scene: Scene
let stars: Star[] = [];
let mousePos = { x: 300, y: 300 }
const loop = () => {
    stars.forEach(star => star.move(mousePos))
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}

const updateScreenSize = () => {
    const { width, height } = useWindowSize()
    camera.aspect = width.value / height.value
    camera.updateProjectionMatrix()
    renderer.setSize(width.value, height.value)
    renderer.render(scene, camera)
}

const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomVector3 = (min: number, max: number): Vector3 => {
    return new Vector3(randomIntFromInterval(min, max), randomIntFromInterval(min, max), randomIntFromInterval(min, max))
}

const addNewStars = (): void => {
    for (let index = 0; index < 50; index++) {
        stars.push(new Star(randomVector3(-80, 80), new Vector3(0, 0, -4), 0.01, new Mesh(
            new SphereGeometry(0.04, 32, 32),
            new MeshBasicMaterial({ color: '#f8fae3' })
        )))
    }
    if (stars.length > 1000) {
        stars.forEach(star => scene.remove(star.mesh))
        stars = stars.slice(50)
        
    }

    stars.forEach(star => {
        scene.add(star.mesh)
    })
}

const clearOldStars = (): void => {
    stars = stars.slice(stars.length / 2)
}

const setupScene = (): void => {
    const { width, height } = useWindowSize()
    aspectRatio = computed(() => width.value / height.value)

    watch(aspectRatio, () => {
        updateScreenSize()
    })

    scene = new Scene()
    scene.background= new Color('#0f0f0f');
    scene.fog = new Fog('#0f0f0f', 40, 800)

    camera = new PerspectiveCamera(75, width.value / height.value, 0.1, 100)
    camera.position.set(0, 0, 4)

    setInterval(addNewStars, 100)


    if (canvasRef.value) {
        renderer = new WebGL1Renderer({
            canvas: canvasRef.value,
            alpha: true
        })
        renderer.setSize(width.value, height.value)
    }
    renderer.render(scene, camera)
}

onMounted(() => {
    setupScene()
    loop()
    document.addEventListener('mousemove', (event: MouseEvent) => {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;
    })
})
</script>