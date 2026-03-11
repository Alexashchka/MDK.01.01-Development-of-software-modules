function Luck(text, sender) {
    let random = Math.random();
    if(random < 0.2) {
        let decode = decode_base64(text);
        let decode2 = decryptCaesarSimple(decode);
        navigator.clipboard.writeText(decode2)
            .then(() => alert("Код сохранён в буфер обмена."))
            .catch(err => alert("Кажется Вам, не повезло, возникла ошибка."));
        
    } else {
        alert("Эх, не повезло.")
    }
    sender.remove();
}
function decode_base64(base64Text) {
    return atob(base64Text);
}
function encryptCaesarSimple(text, shift = 3) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        const isUpperCase = char === char.toUpperCase();
        const alphabetStart = isUpperCase ? 65 : 97; // 'A' или 'a'
        const charCode = ((char.charCodeAt(0) - alphabetStart + shift) % 26 + 26) % 26;
        return String.fromCharCode(alphabetStart + charCode);
    });
}
function decryptCaesarSimple(text, shift = 3) {
    return encryptCaesarSimple(text, -shift);
}