         - Mona Lisa Page<br></br>
            - make home and about the same page just about<br></br>

            - To Do Important<br></br>
            - Star rating component for things we want to do most<br></br>
            - add heart rating?<br></br>

            - in blog, include form for entering photos and comments under photos<br></br>
            - error handling - I have none!<br></br>
            <br></br>
            *** Questions<br></br>
            - how come I have to refresh the browser to get data from choosing label<br></br>
            - How many css files should you have?<br></br>
            - Get app to start up on home page<br></br>
            <br></br>
            *** Stretch Goals<br></br>
            - food wine<br></br>
            - search by name<br></br>
            - Use the itinerary tags to go to that day in the blog<br></br>

# Here API info

# platform.here.com
# API name is Paris Trip

### https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-discover-brief.html

### https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-api/code-discover-category.html

# categories
### https://developer.here.com/documentation/places/dev_guide/topics/place_categories/places-category-system.html

# specific search - use in for radius
https://places.ls.hereapi.com/places/v1/discover/search
?apiKey={YOUR_API_KEY}
&at=52.531,13.3843
&q=Brandenburg+Gate


Example
GET https://discover.search.hereapi.com/v1/
    discover
    ?in=circle:48.864716,2.349014;r=150
    &q=hotels
    &apiKey={YOUR_API_KEY}

Paris, France
Latitude and longitude coordinates are: 48.864716, 2.349014.

The following parameters are used:

in - Search within a geographic area. Results will be returned if they are located within the specified area.
q - Enter a free-text query.
apiKey - Your API key.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
