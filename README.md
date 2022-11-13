# News Explorer 📝

**Full stack web service for exploring news articles and saving them.**

**[Live app](https://news-explorer-frontend-dqeunyzpf-amitgit217.vercel.app/)**

## Back-End

### ⚒ Technology stack ⚒

-   Testing: Jest + Supertest.
-   Development: Node, Express, and MongoDB.
-   Deployment: Microsoft Azure with Ubuntu 18.04 LTS VM.

### 📥 📤 Routes & Features 📥 📤

-   `/signup` POST request for creating a user.
-   `/signin` POST request for receiving a Json-Web-Token.
-   `/users/me` GET request for receiving the current user using Json-Web-Token.
-   `/articles` GET request for getting all the current user saved articles.
-   `/articles` POST request for saving a new article to the current user.
-   `/articles/:id` DELETE request for deleting an article by id.

### 👨🏼‍🔬 Testing 👨🏼‍🔬

-   `npm run test user.test.js` Will test `/users/me`
-   `npm run test auth.test.js` Will test `/signup` and`/signin`
-   `npm run test article.test.js` Will test `/articles` and `/articles/:id`

### 👨🏽‍💻 Links 👨🏽‍💻

-   API => https://news-api.eastus.cloudapp.azure.com
-   API Documentation => https://amitgit217.github.io/news-explorer-api-docs/

#

## Front-End

### ⚒ Technology stack ⚒

-   React
-   HTML5
-   CSS3

### 🏗 Software Architecture 🏗

**Services**

    Services stand for the communication between the front end and the back api.
    Which will include the specific routing, headers, type of request etc.

-   `/utils/MainApi` - The main api of the application for auth and user actions.
-   `/utils/NewsApi` - The api for the news themselves.

**Store and hooks by entities**

    The api for the clinet actions and the app state is the hooks that has been developed using
    Context API. The hook will get an "injection" of the api service for example:

    const useCardsFromNewsApi = () => {
        const [cards, setcards] = useState(false)
        const getCards = async () => {
            try {
                const res = await newsApiService.getCards()
                setcards(res.data)
                return res
            }catch(err){
                console.log(err)
            }
        }
    }

    With this kind of easy to use hook I can access to the cards state and manipulate it in any way I want.

-   `/store/entities/user.hooks` - All the needed hooks for user actions.
-   `/store/entities/cards.hooks` - All the needed hooks for 3rd party api actions.

### Deployment & Cloud

-   Microsoft azure, Ubuntu 18.04 LTS.

### 👨🏼‍🏫 Implementations 👨🏼‍🏫

-   Object-Oriented-Programming.
-   Test-Driven-Development.
-   Semantic HTML and BEM methodology.
-   Responsive user interface.
-   Global state managment using Context API.
