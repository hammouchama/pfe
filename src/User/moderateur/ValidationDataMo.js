export const ValidationDataMo = (values) => {
    let errors = {}
    if (values.pwd.length < 4) {
        errors.pwd = "Le mot de passe n'est pas fort";
        errors.v = 1;
    } else {
        errors.v = 0;
    }
    if (values.nom.length < 3) {
        errors.nom = 'le nom est incorrect';
        errors.v = 1;
    } else {
        if (/[0-9]/ig.test(values.nom)) {
            errors.nom = 'le nom est incorrect';
            errors.v = 1;
        } else {
            errors.v = 0;
        }
    }
    if (values.prenom.length < 3) {
        errors.prenom = 'le prénom est incorrect';
        errors.v = 1;
    } else {
        if (/[0-9]/ig.test(values.prenom)) {
            errors.prenom = 'le prénom est incorrect'
            errors.v = 1;
        } else {
            errors.v = 0;
        }
    }
    if (values.pwd !== values.pwdc) {
        errors.pwdc = "Les mots de passe ne se correspondent pas ";
        errors.v = 1;
    } else {
        errors.v = 0;
    }
    return errors;
}
export const lenghtObjet = (obj) => {
    let size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
        return size;
    }
}