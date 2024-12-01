Ce projet est une simulation interactive en p5.js qui met en œuvre plusieurs comportements de véhicules autonomes, 
tels que la recherche de cible, l'évitement d'obstacles, la prédation, et la gestion des bordures.



Fonctionnalités principales:
Les véhicules se déplacent dans un environnement 2D.
Chaque véhicule a des comportements spécifiques, comme :
Recherche de cible : Se dirige vers un point cible (par exemple, la souris ou un autre objet).
Évitement d'obstacles : Les véhicules détectent les obstacles proches et ajustent leur trajectoire.
Mode Wander : Les véhicules se déplacent aléatoirement tout en évitant les collisions.
Mode Snake : Les véhicules suivent une trajectoire en chaîne, le premier véhicule suivant la cible et les autres suivant leur prédécesseur.


Modes interactifs:
Plusieurs modes peuvent être activés ou désactivés avec des touches du clavier :
w : Active/désactive le mode Wander .
s : Active/désactive le mode Snake .
p : Active/désactive le prédateur.
v : Ajoute un nouveau véhicule à un emplacement aléatoire.
f : Ajoute plusieurs véhicules avec des vitesses initiales aléatoires.
d : Active/désactive le mode Debug .



Classes principales:
Vehicle : La classe principale représentant les véhicules autonomes. Elle gère :
Les comportements comme seek, flee, arrive, et wander.
L'évitement des obstacles et des projectiles.
La mise à jour et le dessin de chaque véhicule.


Predator : Hérite de la classe Vehicle et représente un véhicule spécial capable de :
Poursuivre les autres véhicules.
Tirer des projectiles pour les éliminer.


Projectile : Représente les projectiles tirés par le prédateur. Chaque projectile se déplace à une vitesse
fixe et est supprimé lorsqu'il quitte les limites de l'écran.

Obstacle : Représente un obstacle statique dans l'environnement. 
Les véhicules détectent les obstacles à l'avance pour ajuster leur trajectoire.

Target : Hérite également de Vehicle et représente un objectif en mouvement pour les véhicules.




Durant le développement de ce projet, j'ai travaillé sur plusieurs aspects du code par moi-même. 
Cependant, étant donné mon emploi du temps chargé (notamment avec les examens qui arrivent la semaine prochaine) et le manque de temps disponible,
j'ai utilisé ChatGPT pour m'aider sur certains points précis du projet.

Comme je dois attendre 72 heures pour l'activation de mon compte GitHub Copilot Student, ChatGPT m'a aidé un petit peu .



Un énorme merci à M. Michel Buffa pour ce cours enrichissant et pour sa manière inspirante et pédagogique d'enseigner.
C'est grâce à sa méthode que j'ai pu explorer et approfondir ce projet, même avec des contraintes de temps.
