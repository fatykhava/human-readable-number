module.exports = function toReadable(n) {
    let str = '';

    const smallNumbers = (n) => {
        const arrNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        return arrNumbers[n];
    }

    const middleNumbers = (n) => {
        const arrDecade = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        return arrDecade[n - 2];
    }

    const checkMiddleNumbers = (decade) => {
        if (decade < 20) return str + ' ' + smallNumbers(decade);
        if (decade / 10 >= 2) {
            if (str.length > 0) {
                str += ' ' + middleNumbers(Math.floor(decade / 10));
            } else {
                str += middleNumbers(Math.floor(decade / 10));
            }
            let numb = decade % 10;

            if (numb === 0) return str;
            return str + ' ' + smallNumbers(numb);
        }
    }

    if (n < 20) {
        return smallNumbers(n);
    }

    if (n / 100 >= 1) {
        let decade = n % 100;
        str += smallNumbers(Math.floor(n / 100)) + ' hundred';

        if (decade === 0) return str;

        return checkMiddleNumbers(decade);
    }
    return checkMiddleNumbers(n);
}
