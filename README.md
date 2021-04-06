# Identité Numérique en utilisant les ERC 165,  ERC 725/735


```
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
```
  
## Local Development

> NVM & Yarn
```              
nvm install v9.11.1   &&
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - &&
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list &&
sudo apt-get update && sudo apt-get install yarn
```

> Installation
```
  # 
  git clone https://github.com/Artedys/smart-air-id-1.git  &&
  cd smart-air-id-1                                       &&
  nvm use v9.11.1 && yarn install
```

> Run
```
  nvm use v9.11.1 &&
  yarn clean &&
  yarn start
```

> Tests
```
  yarn test 
```


## Live Demo

- [x] coming soon
- [x] Certifiers provides Issuer-Services: 
  - [x] Has Phone
  - [x] Has Email
  - [x] [Facebook](https://developers.facebook.com/)
  - [x] [Linked-in](https://developer.linkedin.com/)
  - [x] [Google](https://console.cloud.google.com/apis/credentials)
  - [x] [Github](https://github.com/settings/developers)
  - [x] [Twitter](https://apps.twitter.com/) 
  

> **Demo Scripts**

Imagine we want to deploy a **Listing Contract** (e.g. post a job to hire a Freelancer), but only allow interactions from **Users** (e.g. Developers) with a verified `Has Facebook` & `Has Github`. How can we accomplish this with Digital Identity ERC-725?

> First, lets define the entities that will be interacting:
* The _Consumer:Developer_ is an identity who wants to apply a posted job.
* The _Issuer:SellerBuyerBroker_ is an identity which issues claims of type `FACEBOOK_VERIFIED` &  `GITHUB_VERIFIED`. *Note*: Buyer-Broker is HeadHunter.
* The _Listing:JobPosting_ will only allow _Consumer:Developer_ with `FACEBOOK_VERIFIED` &  `GITHUB_VERIFIED` claims from an _Issuer-HeadHunterService_ they trust.

> Second, _Consumer:Developer_ interact with a O2OIssuer/SellerBuyerBroker Listing Contract by following process:

1. _Buyer:Employer_ deploys a new **Identity Contract** (or reuses one they deployed earlier).
2.  _Buyer:Employer_ visits O2OIssuer/SellerBuyerBroker/verify and obtains a cryptographic signature proving that they control a particular `email` and `phone-number`.
3.  _Buyer:Employer_ adds this `Claim` to their `Identity Contract`.
4.  _Buyer:Employer_ tries to *apply a job* via a O2OIssuer/SellerBuyerBroker `Listing Contract`.
5.  `Listing Contract` looks at _Buyer:Employer_’s `Identity` for a `Claim` issued by O2OIssuer/SellerBuyerBroker.
6.  `Listing Contract` recovers the public key from the `Claim Signature` and verifies it is still valid on the O2OIssuer/SellerBuyerBroker `Issuer Contract`.
7.  Transaction is allowed to proceed.

Now that the _Buyer:Employer_ has a verified claim on their identity from O2OIssuer/SellerBuyerBroker, they can interact with any other contracts also accepting claims issued by O2OIssuer/SellerBuyerBroker.

### Troubleshooting

- Chrome > Console: `localStorage.clear();`
- Chrome > URL: `chrome://settings/siteData` 

## References:






Identité Numérique en utilisant les ERC 165, ERC 725/735

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
