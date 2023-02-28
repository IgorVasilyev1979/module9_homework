const btn = document.querySelector('.j-btn');
const inpWidth = document.querySelector('.j-inp-width');
const inpHeight = document.querySelector('.j-inp-height');
const resultNode = document.querySelector('.j-result');

btn.addEventListener('click', () => {
    if(inpWidth.value >= 100 && inpWidth.value <= 300 && inpHeight.value >= 100 && inpHeight.value <= 300) {
        fetch(`https://picsum.photos/${inpWidth.value}/${inpHeight.value}`)
        .then((response) => {
            const htmlText = `<img src="${response.url}"/>`;
            resultNode.innerHTML = htmlText;
        })
        .catch(() => { console.log('error') });    
    } else {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    }
});