const parser = new DOMParser();

const result = {list: [{}, {}]};

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmlDOM.querySelector("list");
const studentList = list.querySelectorAll("student");

for(let i = 0; i < studentList.length; i++) {
    result.list[i].name = studentList[i].querySelector("name").querySelector("first").textContent + ' ' + studentList[i].querySelector("name").querySelector("second").textContent;
    result.list[i].age = studentList[i].querySelector("age").textContent;
    result.list[i].prof = studentList[i].querySelector("prof").textContent;
    result.list[i].lang = studentList[i].querySelector("name").getAttribute('lang');
}

console.log(result);