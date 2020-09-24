import sortData from './sortData';
import data from './data';
// import addContentInTable from './addContentInTable';

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');
const thead = document.createElement('thead');
thead.innerHTML = `
  <tr>
    <td>id</td>
    <td>title</td>
    <td>year</td>
    <td>imdb</td>
  </tr>
`;
const tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
const theadInner = Array.from(document.getElementsByTagName('td'));
const span = document.createElement('span');

const sortedDataArrays = sortData(data);
const tableInnerHTMLs = [];
for (let i = 0; i < sortedDataArrays.length; i += 1) {
  const sortedData = sortedDataArrays[i];
  let headContent = '';
  let bodyContent = '';
  if (i % 2 === 0) {
    headContent += '↓';
  } else {
    headContent += '↑';
  }
  for (let j = 0; j < sortedData.length; j += 1) {
    bodyContent += `
    <tr>
      <td>${sortedData[j].id}</td>
      <td>${sortedData[j].title}</td>
      <td>(${sortedData[j].year})</td>
      <td>imdb: ${sortedData[j].imdb}</td>
    </tr>
  `;
  }
  const result = {
    headContent,
    bodyContent,
  };
  tableInnerHTMLs.push(result);
}

let arrayIndex = 0;
let headerIndex = 0;

function addContentInTable(index) {
  span.innerHTML = tableInnerHTMLs[arrayIndex].headContent;
  tbody.innerHTML = '';
  theadInner[headerIndex].appendChild(span);
  tbody.innerHTML += tableInnerHTMLs[index].bodyContent;
}
addContentInTable(arrayIndex);

let timerId = setTimeout(function tick() {
  if (arrayIndex < tableInnerHTMLs.length) {
    if (arrayIndex > 1) {
      if (arrayIndex % 2 === 0) {
        headerIndex += 1;
      }
    }
    addContentInTable(arrayIndex);
    arrayIndex += 1;
  } else {
    clearTimeout(timerId);
  }
  timerId = setTimeout(tick, 1000);
}, 1000);
