let randomString = (props = { minLength: 4, maxLength: 7, remindFriendly: true }) => {
    props.maxLength === undefined && (props.maxLength = props.minLength + 3);
    props.minLength === undefined && (props.minLength = 3);
    props.remindFriendly === undefined && (props.remindFriendly = true);
    let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
    let vowels = "AEIOUaeiou";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length = Math.random() * (props.maxLength - props.minLength) + props.minLength;
    let string = "";
    for (let i = 0; i < length; i++) {
        if (props.remindFriendly)
            string += i % 2 ? consonants[Math.floor(Math.random() * consonants.length)] : vowels[Math.floor(Math.random() * vowels.length)];
        else
            string += chars[Math.random() * chars.length];
    }
    return string;
}
class Tiempo {
    constructor(horas, minutos) {
        this.horas = horas;
        this.minutos = minutos;
    }
}

let TiempoAString = (tiempo) => {
    console.log(tiempo);
    return (`${tiempo.horas} ${tiempo.horas === 1 ? "hora" : "horas"} ${tiempo.minutos} ${tiempo.minutos === 1 ? " minuto" : " minutos"}`);
}