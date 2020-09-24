export default function getTableInnerHTMLs(sortedDataArrays) {
  const result = [];
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
    const item = {
      headContent,
      bodyContent,
    };
    result.push(item);
  }
  return result;
}
