function rot13(str) {
  return str.split('').map(function (char) {
    let asciiCode = char.charCodeAt(0);

    if (asciiCode >= 65 && asciiCode <= 90) {
      return String.fromCharCode(((asciiCode - 65 + 13) % 26) + 65);
    }
    else if (asciiCode >= 97 && asciiCode <= 122) {
      return String.fromCharCode(((asciiCode - 97 + 13) % 26) + 97);
    }
    return char;
  }).join('');
}

let encodedString = "Ubyn";
let decodedString = rot13(encodedString);
console.log(decodedString);
