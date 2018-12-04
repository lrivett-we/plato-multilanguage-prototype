const translations = {
    en_us: {
        greeting: "Hi",
        goodbye: "See ya",
        submit: "Submit"
    },
    en_uk: {
        greeting: "Greetings",
        goodbye: "Cheers",
        submit: "Submit"
    },
    fr: {
        greeting: "Bonjour",
        goodbye: "Salut",
        submit: "Soumettez"
    }
}

const _t = (word, language) => {
    return translations[language][word];
}

export { _t };
