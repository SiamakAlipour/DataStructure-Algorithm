// Time Complexity  O(n) - algorithm will find if the sequence is bst search sequence

const notValidSeq = [925, 202, 911, 240, 912, 245, 363];
const validSeq = [2, 252, 401, 398, 330, 344, 397, 363];

const isBstSearchSequence = (seq) => {
    let min = seq[seq.length - 1],
        max = seq[seq.length - 1];
    for (let i = seq.length - 2; i >= 0; i--) {
        if (seq[i] >= min && seq[i] <= max) {
            return "not Bst Search Sequence";
        } else if (seq[i] < min) {
            min = seq[i];
        } else if (seq[i] > max) {
            max = seq[i];
        }
    }
    return "valid";
};

const notValid = isBstSearchSequence(notValidSeq);
console.log(notValid);

const valid = isBstSearchSequence(validSeq);
console.log(valid);

