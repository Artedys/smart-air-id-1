# Identité Numérique en utilisant les ERC 165,  ERC 725/735


ERC 725 et ERC 735 comme nous l’avons présenté le Lundi 29 Mars 2021

Identification du problème:

L'identité décentralisée est la manière dont les individus contrôlent quand, où et avec qui ils partagent leurs informations d'identification. Dans le monde physique, nous considérons ce partage d'informations d'identification comme allant de soi - mais il manque depuis longtemps un moyen sûr et intelligent de le faire dans le monde numérique.

Pourquoi Blockchain:

Confiance - Dans les systèmes basés sur la blockchain, les métadonnées utilisées pour les communications sont conservées dans le registre distribué. L'authenticité des données est vérifiée via plusieurs nœuds, via un mécanisme de consensus. Cette décentralisation est utile dans le contexte des identités numériques, en particulier lorsque les identifiants nationaux sont utilisés dans plusieurs agences.

Sécurité - La technologie Blockchain a été conçue pour conserver les données de manière cryptée et immuable, et sécurisée par cryptographie, gardant ainsi l'ID protégé et traçable. De plus, les systèmes basés sur la blockchain suppriment la vulnérabilité associée à la protection par mot de passe.

Intégrité - L'avantage de ce type de système d'identité par rapport aux systèmes traditionnels est la capacité de maintenir chaque identité sur tous les nœuds du réseau. Bien que les données soient distribuées sur des réseaux peer-to-peer, elles sont continuellement réconciliées et mises à jour. De plus, le réseau blockchain n'a pas de point de défaillance unique, ce qui rend difficile pour les pirates informatiques de briser l'intégrité de l'ensemble de données.

Simplicité - Un cadre de blockchain simplifie le processus pour chaque partie prenante impliquée: émission d'identité, vérificateurs d'identité, propriétaires d'identité.
Confidentialité - Les régulateurs du monde entier réclament la confidentialité des informations personnelles et sensibles des citoyens.


L'identité décentralisée est prometteuse et attire une attention et une concentration importantes sur deux points: Écosystème et nouvelle infrastructure De nombreux avantages ne seront tirés que lorsqu'un vaste écosystème d'entités adoptera des solutions d'identité décentralisées, émettra et vérifiera les informations d'identification numériquement et instituera des normes pour permettre l'interopérabilité et la portabilité.

mode d'emploi

Le domaine du projet est une implémentation de ERC 725 et ERC 735, norme proposée pour la gestion de l'identité numérique
sur la Blockchain. Le projet utilise le framework Truffle et Ganache CLI pour les tests. Ganache CLI, qui fait partie de la suite Truffle d'outils de développement Ethereum, est la version en ligne de commande de Ganache, une blockchain personnelle pour le développement Ethereum. Des outils doux pour les contrats intelligents. La suite Truffle permet aux développeurs de passer de l'idée à l'application le plus confortablement possible.

En utilisant ERC 725, un contrat intelligent peut empêcher l'exécution des appels de fonction à moins que l'expéditeur n'ait une réclamation vérifiée d'un émetteur de confiance, par ex. Intégrez un mécanisme dans nos contrats intelligents pour n'autoriser que les interactions de personnes réputées. ERC-725 permet de nombreux autres cas d'utilisation, tels que les approbations d'exécution multi-signatures et la vérification par appel de contrat au lieu de la validation de clé.




                +--------------+         +------------+
                |              |         |            |
                |    ERC 165   |         | KeyStore** |
                |              |         |            |
                +---+--------+-+         +----+-------+
                    |        |                |
               +----v-----+ +v---------+ +----v-----+
               |          | |          | |          |
 +-------------+ ERC 735* | | ERC 725* | | KeyBase* |
 |             |          | |          | |          |
 |             +----------+ ++-+----+--+ +--+-------+------+--------------+
 |                           | |    |       |              |              |
 |                           | |    |       |              |              |
 |   +-----------------------+ |    | +-----+-----+  +-----v-----+ +------v-------+
 |   |                         |    | |           |  |           | |              |
 |   |                 +-------|----|-+  Pausable |  | KeyGetter | | Destructible |
 |   |    +--------------------|----|-+           |  |           | |              |
 |   |    |            |       |    | +--+--------+  +-+---------+ +--+-----------+
 |   |    |            |  +----+    |    |             |              |
 |   |    |            |  |         |    |             |              |
 |   |    |            |  |         |    |             |              |
 |   |    |            |  |         |    |             |              |
+v---v----v---+ +------v--v---+  +--v----v--+          |              |
|             | |             |  |          |          |              |
|ClaimManager | | KeyManager  |  | MultiSig |          |              |
|             | |             |  |          |          |              |
+---+---------+ ++------------+  +--+-------+          |              |
    |            |                  |                  |              |
    |            |                  |                  |              |
    |            |        +---------v------------------v---+          |
    |            |        |                                <----------+
    |            +-------->            Identity            |
    |                     |        (ERC 725 + 735)         |
    +--------------------->                                |
                          +--------------------------------+

* = Abstract contract
** = Library
Local Development

Installation

NVM & Yarn
nvm install v9.11.1   &&
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - &&
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list &&
sudo apt-get update && sudo apt-get install yarn

Installation

  #
  git clone https://github.com/Artedys/smart-air-id-1.git  &&
  cd smart-air-id-1                                       &&
  nvm use v9.11.1 && yarn install

Run

  nvm use v9.11.1 &&
  yarn clean &&
  yarn start

Tests

  yarn test

Live Demo

 coming soon
 Certifiers provides Issuer-Services:
 Has Phone
 Has Email
 Facebook
 Linked-in
 Google
 Github
 Twitter





Scripts de démonstration

Imaginez que nous souhaitons déployer un contrat de référencement (par exemple, publier un emploi pour embaucher un pigiste), mais autoriser uniquement les interactions des utilisateurs (par exemple, les développeurs) avec un Facebook et un Github vérifiés. Comment pouvons-nous y parvenir avec l'identité numérique ERC-725 ?

Tout d'abord, définissons les entités qui interagiront:
Le consommateur: le développeur est une identité qui souhaite postuler à un poste publié.

L'émetteur: SellerBuyerBroker est une identité qui émet des réclamations de type FACEBOOK_VERIFIED & GITHUB_VERIFIED. Remarque: l'acheteur-courtier est un chasseur de têtes.

La liste: JobPosting n'autorisera que les réclamations Consumer: Developer avec FACEBOOK_VERIFIED & GITHUB_VERIFIED d'un Issuer-HeadHunterService en qui il a confiance.

Deuxièmement, consommateur: le développeur interagit avec un contrat d'inscription O2OIssuer / SellerBuyerBroker en suivant le processus:

Acheteur: l'employeur déploie un nouveau contrat d'identité (ou réutilise celui qu'il a déployé précédemment).

Acheteur: l'employeur visite O2OIssuer / SellerBuyerBroker / verify et obtient une signature cryptographique prouvant qu'il contrôle un e-mail et un numéro de téléphone particuliers.

Acheteur: l'employeur ajoute cette réclamation à son contrat d'identité.

Acheteur: L'employeur essaie de postuler un emploi via un contrat d'inscription O2OIssuer / SellerBuyerBroker.

Le contrat d'inscription porte sur l'acheteur: l'identité de l'employeur pour une réclamation émise par O2OIssuer / SellerBuyerBroker.

Le contrat d'inscription récupère la clé publique de la signature de la réclamation et vérifie qu'elle est toujours valide sur le contrat émetteur O2OIssuer / SellerBuyerBroker.

La transaction est autorisée à se poursuivre.

Maintenant que l'acheteur: l'employeur a une réclamation vérifiée sur son identité de O2OIssuer / SellerBuyerBroker, il peut interagir avec tout autre contrat acceptant également les réclamations émises par O2OIssuer / SellerBuyerBroker.

Dépannage

Chrome> Console: localStorage.clear ();
Chrome> URL: chrome: // settings / siteData
Références:

Cas d'utilisation des revendications vérifiables
blockcerts-révocation
Procédure pas à pas de démonstration

Écran lors du chargement: premier Wallet-ID 0x313A pour une personne qui désire une identité blockchain (Consommateur: Développeur).
===
# smart-air-id-1
