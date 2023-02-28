const btn = document.querySelector('.j-btn');
const inpPageNumber = document.querySelector('.j-inp-page-number');
const inpLimit = document.querySelector('.j-inp-limit');
const resultNode = document.querySelector('.j-result');

const myData = localStorage.getItem('myData');
if(myData) {
    const data = JSON.parse(myData);
    let divHtml = '';
    data.forEach((item, index) => {
        const itemHtml = `<li><a href="${item.download_url}" target="_blank">Фото ${index+1}</a></li>`;
        divHtml += itemHtml;
    });
    htmlText = '<ul>' + divHtml + '</ul>';
    resultNode.innerHTML = htmlText;
} else {
    resultNode.innerHTML = 'Здесь будет результат запроса';
}

btn.addEventListener('click', () => {
    let htmlText = '';
    if((inpPageNumber.value < 1 || inpPageNumber.value > 10 || isNaN(inpPageNumber.value)) && (inpLimit.value < 1 || inpLimit.value > 10 || isNaN(inpLimit.value))) {
        htmlText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if(inpPageNumber.value < 1 || inpPageNumber.value > 10 || isNaN(inpPageNumber.value)) {
        htmlText = 'Номер страницы вне диапазона от 1 до 10';
    } else if(inpLimit.value < 1 || inpLimit.value > 10 || isNaN(inpLimit.value)) {
        htmlText = 'Лимит вне диапазона от 1 до 10';
    } else {
        fetch(`https://picsum.photos/v2/list?page=${inpPageNumber.value}&limit=${inpLimit.value}`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('myData', JSON.stringify(data));
            let divHtml = '';
            data.forEach((item, index) => {
                const itemHtml = `<li><a href="${item.download_url}" target="_blank">Фото ${index+1}</a></li>`;
                divHtml += itemHtml;
            });
            htmlText = '<ul>' + divHtml + '</ul>';
            resultNode.innerHTML = htmlText;
        })   
        .catch(() => { console.log('error') });
    }
    resultNode.innerHTML = htmlText;
});