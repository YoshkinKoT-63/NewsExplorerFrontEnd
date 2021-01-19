export default class Report {
  constructor(REPORT_CONTAINER, mainApi, ucFirst) {
    this.mainApi = mainApi;
    this.articles = [];
    this.sortedArticles = [];
    this.reportContainer = REPORT_CONTAINER;
    this.ucFirst = ucFirst;
    this.reportSum = this.reportContainer.querySelector('.report__sum');
    this.reportKeywords = this.reportContainer.querySelector('.report__keywords');
  }

  getSaveArticles() {
    this.articles = JSON.parse(window.localStorage.getItem("articles"));
  }

  setKeywords() {
    const count = {};
    this.articles.forEach(article => {
      if (count[article.keyword]) {
        count[article.keyword] += 1;
      } else {
        count[article.keyword] = 1;
      }
    });
    this.sortedArticles = Object.entries(count).sort((a, b) => b[1] - a[1]);
  }

  setNumberArticles() {
    this.reportSum.textContent = `${localStorage.getItem("name")}, у вас ${this.articles.length} сохранённых статей`;
  }

  setArticlesInfo() {
    const articlesNumber = this.sortedArticles.length;
    if (articlesNumber > 0) {
      this.reportKeywords.append('По ключевым словам: ');
      this.reportFirstKeyword = document.createElement('strong');
      this.reportFirstKeyword.classList.add('report__keyword');
      this.reportFirstKeyword.textContent = this.ucFirst(this.sortedArticles[0][0]);
      this.reportKeywords.appendChild(this.reportFirstKeyword);
      if(articlesNumber > 1) {
        this.reportKeywords.append(', ');
        this.reportSecondKeyword = document.createElement('strong');
        this.reportSecondKeyword.classList.add('report__keyword');
        this.reportSecondKeyword.textContent = this.ucFirst(this.sortedArticles[1][0]);
        this.reportKeywords.appendChild(this.reportSecondKeyword);
        if(articlesNumber > 2) {
          this.reportKeywords.append(' и');
          this.reportOtherKeyword = document.createElement('strong');
          this.reportSecondKeyword.classList.add('report__keyword');
          this.reportOtherKeyword.textContent = ` ${articlesNumber - 2} другим`;
          this.reportKeywords.appendChild(this.reportOtherKeyword);
        }
      }
    }
  }
}