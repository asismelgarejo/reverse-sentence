export default function reverse(sentence: string) {
	const wordsArray = sentence.split(" ");
	const reversedArray = wordsArray.reverse();
	const reversedSentence = reversedArray.join(" ");
	return reversedSentence;
};