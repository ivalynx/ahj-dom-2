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

function addContentInTable(i) {
  let index;
  if (i === 0 || i === 1) {
    index = 0;
  } else if (i === 2 || i === 3) {
    index = 1;
  } else if (i === 4 || i === 5) {
    index = 2;
  } else if (i === 6 || i === 7) {
    index = 3;
  }
  span.innerHTML = tableInnerHTMLs[i].headContent;
  tbody.innerHTML = '';
  theadInner[index].appendChild(span);
  tbody.innerHTML += tableInnerHTMLs[i].bodyContent;
}
let index = 0;
addContentInTable(index);

setInterval(() => {
  if (index < tableInnerHTMLs.length) {
    index += 1;
    addContentInTable(tableInnerHTMLs, index);
  }
}, 1000);
