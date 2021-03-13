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
    ["difficultes"],
    ["facilites"],
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
    ["Bonjour à toi ! Es-tu un professeur ou un eleve ? (Merci de repondre par eleve ou Professeur !)"],
    //Prof etc
    ["Un professeur ? Genial ! Ton eleve a-t-il des difficultes ou des facilites ? (Difficultes ou Facilites)"],
    ["Des difficultes ? Très bien. En quoi ? Maths ou français ? (Maths ou Français)"],
    ["Des  facilites ? Très bien. En quoi ? Maths ou français ? (Maths ou Français)"],
    //Maths et fr
    ["En maths ? Et bien, tu peux avoir des exercices personnalises sur notre site ! Ou peut-être veux-tu contacter un professionel ? (Oui ou Non)"],
    ["En français ? Et bien, tu peux avoir des exercices personnalises sur notre site ! Ou peut-être veux-tu contacter un professionel ? (Oui ou Non)"],
    // ouinon
    ["Très bien, voici une liste de professionels que nous conseillons !",
        "Julie Meau, Orthophoniste, 1 rue du Quartier",
        "Pauline Doliprane, Psychiatre specialisee precoce, 13 boulevard Doublon",
        "Maurice Yzer, Orthophoniste, 78 rue Buisson",
    ],
    ["Très bien. Alors, bonne journee !"],
]

// Random for any other user input

const alternative = [
    "Je n'ai pas compris, essaye plutôt d'ecrire commencer !"
]
