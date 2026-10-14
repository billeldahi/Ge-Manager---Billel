GE MANAGER v4 — SARL VERY FAST
================================

CHOIX ACTUELS PRIS EN COMPTE
- Version orientée téléphone pour commencer.
- Un seul compte Google personnel prévu à ce stade.
- Utilisation hors connexion, puis synchronisation ultérieure à mettre en place.

CE QUE CONTIENT CETTE VERSION
- Base actuelle GE Manager conservée : sites et wilayas, groupes électrogènes, pièces/filtres et équivalences par catégorie, interventions modifiables, recherche générale, suggestions, exports CSV compatibles Excel, sauvegarde/restauration JSON et impressions PDF.
- Application web installable (PWA) lorsqu’elle est publiée sur un hébergement HTTPS.
- Cache de l’interface pour ouvrir l’application hors connexion après son premier chargement.
- Indication de l’état de connexion et du dernier enregistrement local.

IMPORTANT — GOOGLE DRIVE
La connexion Google Drive et la synchronisation automatique ne sont PAS encore actives dans ce paquet. Elles nécessitent de créer/configurer un projet Google Cloud, un identifiant OAuth, les origines autorisées et les autorisations Drive. Aucun mot de passe Google ne doit être inscrit dans le code. Pour l’instant, utilisez « Créer une sauvegarde maintenant » et conservez le fichier JSON dans un endroit sûr.

INSTALLATION / UTILISATION
1. Décompressez le ZIP.
2. Pour tester rapidement sur PC, ouvrez index.html dans un navigateur. Dans ce mode local, le cache PWA et l’installation ne seront pas disponibles.
3. Pour installer sur Android et bénéficier du cache hors connexion, publiez le dossier sur un hébergement HTTPS. Ouvrez ensuite l’adresse dans Chrome et choisissez « Installer l’application » ou « Ajouter à l’écran d’accueil ».
4. Faites régulièrement une sauvegarde JSON. Les données de localStorage restent sur le navigateur/appareil utilisé et ne sont pas automatiquement transférées vers un autre téléphone.

LIMITES À CONNAÎTRE
- Le mode hors connexion couvre l’interface après chargement initial; le stockage applicatif repose toujours sur le navigateur local.
- Cette version ne fournit pas encore de synchronisation cloud, de partage multi-utilisateur, de gestion de conflits ni de connexion Google.
- Avant un usage professionnel avec données importantes, testez les exports et gardez plusieurs sauvegardes.
