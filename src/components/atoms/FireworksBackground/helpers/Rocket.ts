import Particle from './Particle';

export default class Rocket extends Particle {
  explosionColor: number;
  static particles: Particle[] = [];

  constructor(x, y) {
    super({
      x: x,
      y: y,
    });

    this.explosionColor = 0;
  }

  explode() {
    const count = Math.random() * 10 + 80;

    for (let i = 0; i < count; i++) {
      const particle = new Particle(this.pos);
      const angle = Math.random() * Math.PI * 2;

      // emulate 3D effect by using cosine and put more particles in the middle
      const speed = Math.cos((Math.random() * Math.PI) / 2) * 15;

      particle.vel.x = Math.cos(angle) * speed;
      particle.vel.y = Math.sin(angle) * speed;

      particle.size = 10;

      particle.gravity = 0.2;
      particle.resistance = 0.92;
      particle.shrink = Math.random() * 0.05 + 0.93;

      particle.flick = true;
      particle.color = this.explosionColor;

      Rocket.particles.push(particle);
    }
  }

  render(c) {
    if (!this.exists()) {
      return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    const x = this.pos.x,
      y = this.pos.y,
      r = this.size / 2;

    const gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, 'rgba(255, 255, 255 ,' + this.alpha + ')');
    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + this.alpha + ')');

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(
      this.pos.x,
      this.pos.y,
      this.flick ? (Math.random() * this.size) / 2 + this.size / 2 : this.size,
      0,
      Math.PI * 2,
      true,
    );
    c.closePath();
    c.fill();

    c.restore();
  }
}
