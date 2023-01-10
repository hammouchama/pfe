export const ValidationData = (values) => {
    let errors = {}
    let dd = new Date().getFullYear()
    let agee = dd - values.age.substring(0, 4)
    if (values.pwd.length < 4) {
        errors.pwd = "mot de passe n'est pas fort";
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
        errors.prenom = 'le prenom est incorrect';
        errors.v = 1;
    } else {
        if (/[0-9]/ig.test(values.prenom)) {
            errors.prenom = 'le prenom est incorrect'
            errors.v = 1;
        } else {
            errors.v = 0;
        }
    }
    if (values.pwd !== values.pwdc) {
        errors.pwdc = 'les mots de passe ne se correspondent pas';
        errors.v = 1;
    } else {
        errors.v = 0;
    }
    if (agee < 6) {
        errors.age = 'Date de naissance est incorrecte';
        errors.v = 1;
    } else {
        if (agee > 120) {
            errors.age = "vous ne pouvez pas vous inscrire";
            errors.v = 1;
        } else {
            errors.v = 0;
        }
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