"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = exports.work_environment = exports.benefits = exports.education_level = exports.experience_level = exports.contract_type = void 0;
// Tipo di contratto
const contract_type = [
    {
        value: 'tempo_indeterminato',
        label: {
            it: 'A tempo indeterminato',
            en: 'Full time',
        },
    },
    {
        value: 'tempo_determinato',
        label: {
            it: 'A tempo determinato',
            en: 'Part time',
        },
    },
    {
        value: 'apprendistato',
        label: {
            it: 'Apprendistato',
            en: 'Internship',
        },
    },
];
exports.contract_type = contract_type;
// Livello di esperienza
const experience_level = [
    {
        value: 'junior',
        label: {
            it: 'Junior',
            en: 'Junior',
        },
    },
    {
        value: 'senior',
        label: {
            it: 'Senior',
            en: 'Senior',
        },
    },
];
exports.experience_level = experience_level;
// Istruzione richiesta
const education_level = [
    {
        value: 'laurea_magistrale',
        label: {
            it: 'Laurea magistrale o master',
            en: 'Master or PhD',
        },
    },
    {
        value: 'laurea_triennale',
        label: {
            it: 'Laurea triennale',
            en: 'Bachelor degree',
        },
    },
    {
        value: 'diploma_scuola_superiore',
        label: {
            it: 'Diploma scuola superiore',
            en: 'High school diploma',
        },
    },
];
exports.education_level = education_level;
// Benefici
const benefits = [
    {
        value: 'italiano',
        label: {
            it: 'Italiano',
            en: 'Italian',
        },
    },
    {
        value: 'inglese',
        label: {
            it: 'Inglese',
            en: 'English',
        },
    },
    {
        value: 'francese',
        label: {
            it: 'Francese',
            en: 'French',
        },
    },
    {
        value: 'tedesco',
        label: {
            it: 'Tedesco',
            en: 'German',
        },
    },
    {
        value: 'altre',
        label: {
            it: 'Altre',
            en: 'Other',
        },
    },
];
exports.benefits = benefits;
// Ambiente di lavoro
const work_environment = [
    {
        value: 'italiano',
        label: {
            it: 'Italiano',
            en: 'Italian',
        },
    },
    {
        value: 'inglese',
        label: {
            it: 'Inglese',
            en: 'English',
        },
    },
    {
        value: 'francese',
        label: {
            it: 'Francese',
            en: 'French',
        },
    },
    {
        value: 'tedesco',
        label: {
            it: 'Tedesco',
            en: 'German',
        },
    },
    {
        value: 'altre',
        label: {
            it: 'Altre',
            en: 'Other',
        },
    },
];
exports.work_environment = work_environment;
// Lingue
const languages = [
    {
        value: 'italiano',
        label: {
            it: 'Italiano',
            en: 'Italian',
        },
    },
    {
        value: 'inglese',
        label: {
            it: 'Inglese',
            en: 'English',
        },
    },
    {
        value: 'francese',
        label: {
            it: 'Francese',
            en: 'French',
        },
    },
    {
        value: 'tedesco',
        label: {
            it: 'Tedesco',
            en: 'German',
        },
    },
    {
        value: 'altre',
        label: {
            it: 'Altre',
            en: 'Other',
        },
    },
];
exports.languages = languages;
//# sourceMappingURL=configuration.js.map