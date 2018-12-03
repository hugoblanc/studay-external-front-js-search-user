# Studay - Exemple d'utilisation de la recherche utilisateur

Ce repository à pour but de fournir un exemple d'implémentation de la route 
```
/external/users/firstname-or-lastname/{Valeur-à-chercher}
```
La demo présente donc la recherche d'un utilisateur via son nom ou prénom.
## Génération de la clé d'api 
Cette recherche est effectuée en utilisant une Clé d'Api Studay que vous pouvez générer via cet URL si vous disposé d'accès administrateur au groupe ciblé. 

Une fois la clé d'api généré vous pouvez remplacé YOUR_TOKEN_HEAR par votre clé sur la  ligen suivante dans script.js
```
xhr.setRequestHeader("Authorization", "Bearer YOUR_TOKEN_HEAR");
```

