# bataille-navale

A . Règles du jeu :

-   2 joueurs : Player 1 et IA

-   5 bateaux :

    -   1 porte avion : 5 cases
    -   1 croiseur : 4 cases
    -   1 contre torpilleur : 3 cases
    -   1 sous-marin : 3 cases
    -   1 torpilleur : 2 cases

-   Grille de jeu :
    -   10x10 pour chaque joueur
        -   1 à 10 horizontal
        -   A à J vertical
-   Phase de placement :

    -   Chaque joueur place ses bateaux sans qu'ils puissent se chevaucher.

-   En jeu :

    -   Chaque joueur joue chacun son tour en choisissant une case à attaquer.
    -   Si il y a un bateau : BOOM (Touché ou Coulé si toute les cases du bateau sont touchées), sinon Plouf
    -   Score :
        -   Chaque joueur démarre à 5 bateaux etpour chaque bateau détruit perd une vie.
        -   le premier à 0 perd.
    -   Quand un joueur arrive à 0, annoncement du vainqueur + bouton "New Game".

-   Definition of Done :
    -   minimum :
        -   Grille s'affiche,
        -   Quand le placement et la phase de jeu peuvent être accomplis.
    -   Bonus :
        -   Drag and drop les ships
        -   Style / animations
        -   Faire en sorte de garder l'historique des parties en local storage

![image](https://i.pinimg.com/originals/25/3c/88/253c88d7a9750f6b9cb68d8f49a4b400.gif)
