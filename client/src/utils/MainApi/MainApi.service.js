class UserActions {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    async _connect(url, headers) {
        const res = await fetch(url, headers);
        if (res.ok) {
            return res.json();
        } else {
            return await Promise.reject(`Error: ${res.status}`);
        }
    }

    signup(values) {
        return this._connect(`${this.url}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(values),
        });
    }

    signin(values) {
        return this._connect(`${this.url}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
    }

    checkToken(token) {
        return this._connect(`${this.url}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }

    saveArticle(article) {
        return this._connect(`${this.url}/articles`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(article),
        });
    }

    getUserArticles() {
        return this._connect(`${this.url}/articles`, {
            headers: this.headers,
        });
    }

    deleteArticleById(id) {
        return this._connect(`${this.url}/articles/${id}`, {
            method: "DELETE",
            headers: this.headers,
        });
    }
}

const token = localStorage.getItem("token");
const userActionsApi = new UserActions({
    url: "https://news-api.eastus.cloudapp.azure.com",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

export default userActionsApi;
