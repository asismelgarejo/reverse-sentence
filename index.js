"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(sentence) {
    var wordsArray = sentence.split(" ");
    var reversedArray = wordsArray.reverse();
    var reversedSentence = reversedArray.join(" ");
    return reversedSentence;
}
exports.default = reverse;
;
