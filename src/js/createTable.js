export default function createTable() {
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
  const tableElements = { span, tbody, theadInner };
  return tableElements;
}
