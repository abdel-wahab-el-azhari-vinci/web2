#!/bin/bash

# Exécuter les tests np

# Vérifier si les tests ont réussi

    echo "Tests réussis, ajout des fichiers à Git."

    # Ajouter tous les fichiers modifiés à Git
    git add .

    # Demander un message de commit à l'utilisateur
    echo "Entrez le message de commit :"
    read commit_message

    # Faire le commit avec le message fourni
    git commit -m "$commit_message"

    # Pousser les changements vers le dépôt distant
    git push

    echo "Changements poussés avec succès."

    echo "Les tests ont échoué. Corrigez les erreurs avant de pousser les changements."

