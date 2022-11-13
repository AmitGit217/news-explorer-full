class NewsApi {
    constructor({ url, key }) {
        this.url = url;
        this.key = key;
        this.time = new Date();
    }
    async _connect(url) {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject(`Error: ${res.status}`);
    }
    _getLastWeek() {
        return new Date(
            this.time.getFullYear(),
            this.time.getMonth(),
            this.time.getDate() - 7
        );
    }

    getArticles(keyword) {
        const lastWeek = this._getLastWeek();
        return this._connect(
            `${this.url}?q=${keyword}&from=${lastWeek}&to=${this.time}&pageSize=100&apiKey=${this.key}`
        );
    }
}

const newsApi = new NewsApi({
    url: "https://nomoreparties.co/news/v2/everything",
    key: "b0318af0f80441c6927025c32587781d",
});

export default newsApi;
