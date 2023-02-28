document.getElementById('encrypt').addEventListener('click', (e) => {
    e.preventDefault();
    // Get the text to encrypt and the shift value from the form
    const text = document.getElementById("textEncrypt").value;
    const shift = parseInt(document.getElementById("shiftEncrypt").value);

    // Define the alphabet to use for encrypting
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    // Create a mapping of the alphabet to the shifted alphabet
    const shiftedAlphabet = alphabet.slice(shift).concat(alphabet.slice(0, shift));
    const alphabetMap = {};
    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[shiftedAlphabet[i]] = alphabet[i];
    }

    // Decode the text using the alphabet mapping
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (alphabetMap[char]) {
            result += alphabetMap[char];
        } else {
            result += text[i];
        }
    }

    // Display the encrypted text on the page
    document.getElementById("resultEncrypt").innerHTML = result;
});

document.getElementById('decrypt').addEventListener('click', (e) => {
    e.preventDefault();
    // Get the text to decrypt and the shift value from the form
    const text = document.getElementById("textDecrypt").value;
    const shift = -parseInt(document.getElementById("shiftDecrypt").value);

    // Define the alphabet to use for decrypting
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    // Create a mapping of the alphabet to the shifted alphabet
    const shiftedAlphabet = alphabet.slice(shift).concat(alphabet.slice(0, shift));
    const alphabetMap = {};
    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[shiftedAlphabet[i]] = alphabet[i];
    }

    // Decode the text using the alphabet mapping
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (alphabetMap[char]) {
            result += alphabetMap[char];
        } else {
            result += text[i];
        }
    }

    // Display the decrypted text on the page
    document.getElementById("resultDecrypt").innerHTML = result;
});