function createHelloWorldFormatter(style) {
    return function (text, exclamation = false, repetition = 1) {
        let formattedText = '';

        switch (style) {
            case 'normal':
                formattedText = text;
                break;
            case 'shouting':
                formattedText = text.toUpperCase() + (exclamation ? '!!!' : '');
                break;
            case 'whispering':
                formattedText = text.toLowerCase() + (exclamation ? '...' : '');
                break;
            case 'fancy':
                formattedText = `~~~ ${text} ~~~` + (exclamation ? '!!!' : '');
                break;
            case 'excited':
                formattedText = `${text}! 🎉` + (exclamation ? ' Wow!' : '');
                break;
            default:
                formattedText = text;
        }

        return formattedText.repeat(repetition);
    };
}

const normalFormatter = createHelloWorldFormatter('normal');
const shoutingFormatter = createHelloWorldFormatter('shouting');
const whisperingFormatter = createHelloWorldFormatter('whispering');
const fancyFormatter = createHelloWorldFormatter('fancy');
const excitedFormatter = createHelloWorldFormatter('excited');

console.log(normalFormatter('Hello World'));
console.log(shoutingFormatter('Hello World', true));
console.log(whisperingFormatter('Hello World'));
console.log(fancyFormatter('Hello World', true));
console.log(excitedFormatter('Hello World', true, 2));
