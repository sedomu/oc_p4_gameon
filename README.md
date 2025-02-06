# oc-projet4

OpenClassrooms - dév JS react - projet 4 - gameon

## Version en ligne
Branche `Master` publiée sur [GitHub Pages](https://sedomu.github.io/GameOn-website-FR/)

## Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

## issues
- [X] TODO : fermer la modale
- [X] Implémenter entrées du formulaire
- [X] Ajouter validation ou messages d'erreur
- [X] Ajouter confirmation quand envoi réussi
- [X] Tests manuels

## protocole de test
tests manuels pour valider la vérification des données

| Description | Champ | Valeur | Résultat attendu | Résultat obtenu | Conclusion |
| ----------- | ----- | ------ | ---------------- | --------------- | ---------- |
| Remplissage correct du formulaire | Tous | Correctes | Accès page validation | Accès page validation | ✅ |
| validation de champ | Prénom | Cedric | ✅ | ✅ | ✅ |
| validation de champ | Prénom | Cédric | ✅ | ✅ | ✅ |
| validation de champ | Prénom | Marie-Alice | ✅ | ✅ | ✅ |
| validation de champ | Prénom | Marie Alice | ✅ | ✅ | ✅ |
| validation de champ | Prénom | C3dric | ❌ | ❌ | ✅ |
| validation de champ | Prénom | C | ❌ | ❌ | ✅ |
| validation de champ | Nom | Cedric | ✅ | ✅ | ✅ |
| validation de champ | Nom | Cédric | ✅ | ✅ | ✅ |
| validation de champ | Nom | Marie-Alice | ✅ | ✅ | ✅ |
| validation de champ | Nom | Marie Alice | ✅ | ✅ | ✅ |
| validation de champ | Nom | C3dric | ❌ | ❌ | ✅ |
| validation de champ | Nom | C | ❌ | ❌ | ✅ |
| validation de champ | Email | marie-alice@cedric.com | ✅ | ✅ | ✅ |
| validation de champ | Email | marie-alice@cedric.c | ❌ | ❌ | ✅ |
| validation de champ | Email | marie.alice@cedric.com | ✅ | ✅ | ✅ |
| validation de champ | Email | marie_alice@cedric.com | ✅ | ✅ | ✅ |
| validation de champ | Email | marie-alice75@cedric.com | ✅ | ✅ | ✅ |
| validation de champ | Email | marie@alice75@cedric.com | ❌ | ❌ | ✅ |
| validation de champ | Email | marie-alice@cedric | ❌ | ❌ | ✅ |
| validation de champ | Email | marie-alice@cedric. | ❌ | ❌ | ✅ |
| validation de champ | Email | marie!alice@cedric.com | ❌ | ❌ | ✅ |
| validation de champ | Date de naissance (date correcte) | 01/01/2000 | ✅ | ✅ | ✅ |
| validation de champ | Date de naissance (format incorrect) | cedric | ❌ | ❌ | ✅ |
| validation de champ | Date de naissance (format incorrect) | 25 | ❌ | ❌ | ✅ |
| validation de champ | Date de naissance (date correcte) | 28/02/2024 | ✅ | ✅ | ✅ |
| validation de champ | Date de naissance (date inexistante) | 31/02/2025 | ❌ | ❌ | ✅ |
| validation de champ | Date de naissance (date inexistante) | 29/02/2023 | ❌ | ❌ | ✅ |
| validation de champ | Date de naissance (date année bissextile) | 29/02/2024 | ✅ | ✅ | ✅ |
| validation de champ | Date de naissance (date future) | 31/12/2100 | ❌ | ❌ | ✅ |
| validation de champ | Nombre de tournois | 0 | ✅ | ✅ | ✅ |
| validation de champ | Nombre de tournois | 1 | ✅ | ✅ | ✅ |
| validation de champ | Nombre de tournois | 01 | ✅ | ✅ | ✅ |
| validation de champ | Nombre de tournois | 99 | ✅ | ✅ | ✅ |
| validation de champ | Nombre de tournois | 100 | ❌ | ❌ | ✅ |
| validation de champ | Nombre de tournois | 099 | ❌ | ❌ | ✅ |
| validation de champ | Nombre de tournois | -1 | ❌ | ❌ | ✅ |
| validation de champ | Nombre de tournois | e | ❌ | ❌ | ✅ |
| validation de champ | Boutons radio | 1 coché | ✅ | ✅ | ✅ |
| validation de champ | Boutons radio | aucun coché | ❌ | ❌ | ✅ |
| validation de champ | Checkbox CGU | cochée | ✅ | ✅ | ✅ |
| validation de champ | Checkbox CGU | décochée | ❌ | ❌ | ✅ |
| validation de champ | Checkbox Newsletter | cochée | ✅ | ✅ | ✅ |
| validation de champ | Checkbox Newsletter | décochée | ✅ | ✅ | ✅ |
| injection: clic sur `submit`avec 1 erreur sur le formulaire (`submitBtn.disabled = false;` via la console) | Submit | N/A | ❌ | ❌ | ✅ |

Conclusion des tests: tous ok.