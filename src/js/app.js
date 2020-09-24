import createTable from './createTable';
import sortData from './sortData';
import data from './data';
import getTableInnerHTMLs from './getTableInnerHTMLs';
import addContentInTable from './addContentInTable';

const tableElements = createTable();
const sortedDataArrays = sortData(data);
const tableInnerHTMLs = getTableInnerHTMLs(sortedDataArrays);

let arrayIndex = 0;
let headerIndex = 0;

addContentInTable(tableElements, tableInnerHTMLs, arrayIndex, headerIndex);

let timerId = setTimeout(function tick() {
  if (arrayIndex < tableInnerHTMLs.length) {
    if (arrayIndex > 1) {
      if (arrayIndex % 2 === 0) {
        headerIndex += 1;
      }
    }
    addContentInTable(tableElements, tableInnerHTMLs, arrayIndex, headerIndex);
    arrayIndex += 1;
  } else {
    clearTimeout(timerId);
  }
  timerId = setTimeout(tick, 1000);
}, 1000);
