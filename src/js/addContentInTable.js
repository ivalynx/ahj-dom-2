export default function addContentInTable(tableElements, tableInnerHTMLs, arrayIndex, headerIndex) {
  const { span } = tableElements;
  const { tbody } = tableElements;
  const { theadInner } = tableElements;
  span.innerHTML = tableInnerHTMLs[arrayIndex].headContent;
  tbody.innerHTML = '';
  theadInner[headerIndex].appendChild(span);
  tbody.innerHTML += tableInnerHTMLs[arrayIndex].bodyContent;
}
