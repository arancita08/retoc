const monsters = {
  pemola: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/pam3.png'
    },
    frames: {
      max: 3,
      hold: 30
    },
    animate: true,
    name: 'pemola',
    attacks: [attacks.azote, attacks.bolafuego]
  },
  aranse: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/aranse2.png'
    },
    frames: {
      max: 3,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'aranse',
    attacks: [attacks.azote, attacks.bolafuego]
  }
}
