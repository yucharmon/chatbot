// Options the user could type in
const prompts = [
    ["bonjour", "salut", "hello", "coucou", "bonsoir"],
    ["comment va?", "comment vas tu", "ca va"],
    ["j'ai besoin d'aide", "Je suis en avance et je m'ennui en courq",
        "Je suis en retard et je ne comprend pas les cours", "je suis en avance",
        "je m'ennui en cours", "je suis en retard", "je ne comprend pas les cours"
    ],
    ["en maths", "maths", "français", "en maths", "anglais", "en anglais"],
    ["je n'arrive pas a aller sur le site",
        "je ne sais pas comment faire", "j'ai besoin d'aide pour aller sur le site"
    ],
    ["merci", "merci beaucoup"],
    ["commencer"],
    ["professeur"],
    ["difficultés"],
    ["facilités"],
    ["maths"],
    ["français"],
    ["oui"],
    ["non"],
]

// Possible responses, in corresponding order

const replies = [
    ["Coucou!", "Bonjour!", "Hey!", "Hello", "Salut"],
    [
        "Bien... et toi?",
        "Super et toi?",
        "Top et toi ?"
    ],
    ["Dans quelle matière ?", "Dans quelle cour ?", "Sur quelle sujet ?"],
    ["Des exercices sont a ta disposition sur notre site internet : https://atisoutientscolaire.wixsite.com/atiatypique/coin-%C3%A9l%C3%A8ve",
        "Tu peux t'entrainer grace à cette page internet : https://atisoutientscolaire.wixsite.com/atiatypique/coin-%C3%A9l%C3%A8ve"
    ],
    ["Copie le lien puis met le sur un nouvel onglet"],
    ["De rien", "Je t'en prie"],
    //COMMENCER REP
    ["Bonjour à toi ! Es-tu un professeur ou un eleve ? (Merci de répondre par Élève ou Professeur !)"],
    //Prof etc
    ["Un professeur ? Génial ! Ton élève a-t-il des difficultés ou des facilités ? (Difficultés ou Facilités)"],
    ["Des difficultés ? Très bien. En quoi ? Maths ou français ? (Maths ou Français)"],
    ["Des  facilités ? Très bien. En quoi ? Maths ou français ? (Maths ou Français)"],
    //Maths et fr
    ["En maths ? Et bien, tu peux avoir des exercices personnalisés sur notre site ! Ou peut-être veux-tu contacter un professionel ? (Oui ou Non)"],
    ["En français ? Et bien, tu peux avoir des exercices personnalisés sur notre site ! Ou peut-être veux-tu contacter un professionel ? (Oui ou Non)"],
    // ouinon
    ["Très bien, voici une liste de professionels que nous conseillons !",
        "Julie Meau, Orthophoniste, 1 rue du Quartier",
        "Pauline Doliprane, Psychiatre spécialisée précoce, 13 boulevard Doublon",
        "Maurice Yzer, Orthophoniste, 78 rue Buisson",
    ],
    ["Très bien. Alors, bonne journée !"],
]

// Random for any other user input

const alternative = [
    "Je n'ai pas compris, essaye plutôt d'écrire commencer !"
]
