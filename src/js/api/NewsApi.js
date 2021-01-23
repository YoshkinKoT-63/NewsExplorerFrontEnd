export default class NewsApi {
  constructor(option) {
    this.url = option.url;
    this.key = option.key;
    this.pageSize = option.pageSize;
    this.getNews = this.getNews.bind(this);
  }

  getNews(apiKey, from, to) {
    return fetch(
      `${this.url}/v2/everything?q=${apiKey}}&from=${from}&to=${to}&sortBy=date&apiKey=${this.key}&pageSize=${this.pageSize}`
    ).then((res) => Promise.resolve(res.json()))
  }


}