export default function sortData(data) {
  const idToTop = [...data.sort((a, b) => {
    let result;
    if (a.id > b.id) {
      result = 1;
    } else if (a.id < b.id) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const idToBottom = [...data.sort((a, b) => {
    let result;
    if (a.id < b.id) {
      result = 1;
    } else if (a.id > b.id) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const titleToTop = [...data.sort((a, b) => {
    let result;
    if (a.title > b.title) {
      result = 1;
    } else if (a.title < b.title) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const titleToBottom = [...data.sort((a, b) => {
    let result;
    if (a.title < b.title) {
      result = 1;
    } else if (a.title > b.title) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const yearToTop = [...data.sort((a, b) => {
    let result;
    if (a.year > b.year) {
      result = 1;
    } else if (a.year < b.year) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const yearToBottom = [...data.sort((a, b) => {
    let result;
    if (a.year < b.year) {
      result = 1;
    } else if (a.year > b.year) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const imdbToTop = [...data.sort((a, b) => {
    let result;
    if (a.imdb > b.imdb) {
      result = 1;
    } else if (a.imdb < b.imdb) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const imdbToBottom = [...data.sort((a, b) => {
    let result;
    if (a.imdb < b.imdb) {
      result = 1;
    } else if (a.imdb > b.imdb) {
      result = -1;
    } else {
      result = 0;
    }
    return result;
  })];
  const result = [
    idToTop, idToBottom,
    titleToTop, titleToBottom,
    yearToTop, yearToBottom,
    imdbToTop, imdbToBottom,
  ];
  return result;
}
