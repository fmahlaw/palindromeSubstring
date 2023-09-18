function countPalindrome(str) {
    let count = 0;
    const words = str.split(" ");
    let firstPalindrome = "";

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i].length !== words[j].length) continue;

            let isPalindrome = true;
            for (let k = 0; k < words[i].length; k++) {
                if (words[i][k] !== words[j][words[j].length - k - 1]) {
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome) {
                if (firstPalindrome === "") {
                    firstPalindrome = words[i];
                }
                count++;
            }
        }
    }
    return { count, firstPalindrome };
}


(function calculatePalindrome() {
    const userInput = prompt("Enter a string:");
    if (userInput) {
        const result = countPalindrome(userInput);
        alert(`Palindrome count: ${result.count}\nFirst palindrome: ${result.firstPalindrome}`);
    } else {
        alert("Invalid input.");
    }
})();
