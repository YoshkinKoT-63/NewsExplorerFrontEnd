const shuffle = (arr, shuffleArr) => {
  arr.forEach(el => {
    const { _id, date, image, keyword, link, source, title, text } = el;
    shuffleArr.push( {
      _id: _id,
      description: text,
      source: {name: source},
      title: title,
      url: link,
      urlToImage: image,
      publishedAt: date,
      keyword: keyword,
    })
  });
}

export default shuffle;