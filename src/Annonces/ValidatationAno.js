function date_tim(d) {
    var d1 = d.split('-');

    return (d1[0] * 365 + d1[1] * 30 + (+d1[2]));
}
export function valids(values) {

    let d = new Date();
    let errors = {}

    if ((date_tim(values.datededebut) - date_tim(d.getFullYear() + '-' + (+d.getMonth() + 1) + '-' + d.getDate())) <= 0) {
        errors.datededebut = 'la date est incorrecte';
        errors.vv = values.vv + 1;
    } else {
        errors.vv = 0;
    }
    if ((date_tim(values.datedefin) - date_tim(d.getFullYear() + '-' + (+d.getMonth() + 1) + '-' + d.getDate())) <= 0) {
        errors.datedefin = 'la date est incorrecte';
        errors.vv = values.vv + 1;
    } else {
        errors.vv = 0;
    }
    if (date_tim(values.datedefin) - date_tim(values.datededebut) < 0) {
        errors.datedefin = 'la date est incorrecte';
        errors.vv = values.vv + 1
    } else {
        errors.vv = 0;
    }
    if (values.numdetelephone.length !== 10) {
        errors.numdetelephone = 'le numéro de téléphone est incorrecte';
        errors.vv = values.vv + 1
    } else {
        if ((/\D/ig.test(values.numdetelephone))) {
            errors.numdetelephone = 'le numéro de téléphone est incorrecte';
            errors.vv = values.vv + 1
        } else {
            if (!(/^(06|07|05)/ig.test(values.numdetelephone))) {
                errors.numdetelephone = 'le numéro de téléphone est incorrecte';
                errors.vv = values.vv + 1
            } else {
                errors.vv = 0;
            }
        }
    }

    return errors;
}