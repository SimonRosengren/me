import { Mesh, Vector3 } from "three";

export class Star {
    position: Vector3;
    velocity: Vector3;
    speed: number;
    mesh: Mesh;

    constructor(position: Vector3, velocity: Vector3, speed: number, mesh: Mesh) {
        this.position = position;
        this.speed = speed;
        this.velocity = velocity;
        this.mesh = mesh;
    }
    move(mousePos: { x: number, y: number }) {
        this.position.x += ((20 * ((mousePos.x) - 0) / (1920 - 0)) - 1) * this.speed
        this.position.y += ((20 * ((mousePos.y * -1) - 0) / (1080 - 0)) - 1) * this.speed
        this.position.z += this.velocity.z * this.speed
        this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    }
}