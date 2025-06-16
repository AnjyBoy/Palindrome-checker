function check() {
    let word = input.value.toLowerCase();
    let reversedWord = word.split("").reverse().join("")
    if(word === "") {
        result.innerHTML = "Input Your Word";
        result.style.color = 'red';
    } else if(word === reversedWord) {
        result.innerHTML = "YaY, The word is a palindrome";
        result.style.color = 'green';
    } else {
        result.innerHTML = "The word is a not a palindrome";
        result.style.color = 'red';

    }
}