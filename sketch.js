let pursuer1, pursuer2;
let target;
let obstacles = [];
let vehicules = [];
let isSnakeMode = false; 
let isWanderMode = false;
let predator = null;
let isPredatorActive = false; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  pursuer1 = new Vehicle(100, 100);
  pursuer2 = new Vehicle(random(width), random(height));

  vehicules.push(pursuer1);
  vehicules.push(pursuer2);

  predator = new Predator(width / 2, height / 2);

  // On cree un obstacle au milieu de l'ecran
  obstacles.push(new Obstacle(width / 2, height / 2, 100, "green"));
}

function draw() {
  background(0, 0, 0, 100);

  target = createVector(mouseX, mouseY);

  // Dessin de la cible
  fill(255, 0, 0);
  noStroke();
  circle(target.x, target.y, 32);

  // Dessin des obstacles
  obstacles.forEach(o => o.show());

  // Gerer le prédateur
  if (predator && isPredatorActive) {
    // Trouver le véhicule le plus proche
    let closestVehicle = findClosestVehicle(predator, vehicules);
    if (closestVehicle) {
      // Le predateur suit le véhicule le plus proche
      let seekForce = predator.seek(closestVehicle.pos);
      predator.applyForce(seekForce);
    }

    // Le predateur tire des projectiles
    predator.shoot();

    // Mise q jour et affichage du predateur
    predator.update();
    predator.show();
  }

  // Gerer les véhicules
  vehicules = vehicules.filter(v => {
    // Verifier les collisions avec les projectiles
    if (predator && v.checkCollision(predator.projectiles)) {
      
      return false; // Supprimer le vehicule
    }

    // Fuir les projectiles du predateur
    if (predator && isPredatorActive) {
      v.fleeProjectiles(predator.projectiles);
    }

    // Appliquer le mode actuel
    if (isWanderMode) {
      // Mode Wander
      v.wander(obstacles); // Wander avec evitement d'obstacles
    } else if (isSnakeMode) {
      // Mode Snake
      let index = vehicules.indexOf(v);
      if (index === 0) {
        let arriveForce = v.arrive(target, 60);
        v.applyForce(arriveForce);
      } else {
        let followForce = v.arrive(vehicules[index - 1].pos, 60);
        v.applyForce(followForce);
      }
    } else {
      // Mode normal
      v.applyBehaviors(target, obstacles, vehicules);
    }

    // Mettre a jour et afficher le vehicule
    v.update();
    v.show();
    return true; // Conserver le vehicule
  });
}

function findClosestVehicle(predator, vehicules) {
  let closest = null;
  let minDist = Infinity;

  vehicules.forEach(v => {
    let dist = p5.Vector.dist(predator.pos, v.pos);
    if (dist < minDist) {
      minDist = dist;
      closest = v;
    }
  });

  return closest;
}

function mousePressed() {
  // Ajouter un obstacle de taille aleatoire a la position de la souris
  obstacles.push(new Obstacle(mouseX, mouseY, random(20, 100), "green"));
}

function keyPressed() {
  if (key === "w") {
    isWanderMode = !isWanderMode; // Basculer le mode wander
    isSnakeMode = false; // Desactiver le mode snake si Wander est active
  }
  if (key === "s") {
    isSnakeMode = !isSnakeMode; // Basculer le mode snake
    isWanderMode = false; // Desactiver le mode wander si Snake est active
  }
  if (key === "p") {
    isPredatorActive = !isPredatorActive; // Basculer le mode du predateur
  }
  if (key == "v") {
    vehicules.push(new Vehicle(random(width), random(height)));
  }
  if (key == "d") {
    Vehicle.debug = !Vehicle.debug;
  } else if (key == "f") {
    for (let i = 0; i < 2; i++) {
      let v = new Vehicle(20, 300);
      v.vel = new p5.Vector(random(1, 5), random(1, 5));
      vehicules.push(v);
    }
  }
}
