
# This is the Final Project for Promineo's Front End Developer Bootcamp
### These are the requirements
- Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
- Project must meet the following criteria:
- Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
- Contain at least 10 components
- Allow for all CRUD operations

# These are just notes for myself for when I come back to make changes
## Here API info
- platform.here.com
- API name is Paris Trip
- https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-discover-brief.html
- https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-api/code-discover-category.html

# categories
- https://developer.here.com/documentation/places/dev_guide/topics/place_categories/places-category-system.html

### Category Example
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

### specific search - use in for radius
https://places.ls.hereapi.com/places/v1/discover/search
?apiKey={YOUR_API_KEY}
&at=52.531,13.3843
&q=Brandenburg+Gate

To run locally:
type "npm start"

To push to GH-Pages:
Add, Push and Commit changes then 
type 'npm run deploy'