// Options the user could type in
const prompts = [
    ["bonjour", "salut", "hello", "coucou", "bonsoir"],
    ["comment va?", "comment vas tu", "ca va"],
    ["j'ai besoin d'aide", "je m'appel", "what is up"],
]

// Possible responses, in corresponding order

const replies = [
    ["Coucou!", "Bonjour!", "Hey!", "Hello", "Salut"],
    [
        "Bien... et toi?",
        "Super et toi?",
        "Top et toi ?"
    ],
]

// Random for any other user input

const alternative = [
    "Je n'ai pas compris peux tu répéter stp",
    "peux tu me dire autre chose stp? je ne sais pas répondre à cela :/"
]