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
    move() {
        this.position.x += this.velocity.x * this.speed
        this.position.y += this.velocity.y * this.speed
        this.position.z += this.velocity.z * this.speed
        this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    }
}