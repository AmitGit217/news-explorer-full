# News Explorer 📝

**Full stack web service for exploring news articles and saving them.**

## Back-End

**⚒ Technology stack ⚒**

-   Testing: Jest + Supertest.
-   Development: Node, Express, and MongoDB.
-   Deployment: Microsoft Azure with Ubuntu 18.04 LTS VM.

**📥 📤 Routes & Features 📥 📤**

-   `/signup` POST request for creating a user.
-   `/signin` POST request for receiving a Json-Web-Token.
-   `/users/me` GET request for receiving the current user using Json-Web-Token.
-   `/articles` GET request for getting all the current user saved articles.
-   `/articles` POST request for saving a new article to the current user.
-   `/articles/:id` DELETE request for deleting an article by id.

**👨🏼‍🔬 Testing 👨🏼‍🔬**

-   `npm run test user.test.js` Will test `/users/me`
-   `npm run test auth.test.js` Will test `/signup` and`/signin`
-   `npm run test article.test.js` Will test `/articles` and `/articles/:id`

**👨🏽‍💻 Links 👨🏽‍💻**

-   API => https://news-api.eastus.cloudapp.azure.com
-   API Documentation => https://amitgit217.github.io/news-explorer-api-docs/
