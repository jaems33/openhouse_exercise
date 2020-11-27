# Openhouse Test

Viewable on Heroku: https://frozen-gorge-64955.herokuapp.com/

For local installation:

```
npm install
npm start
````

## Project Structure

The Models folder has representations of Home, Homes, Community, and Communities. While I could've use Array prototype functions to transform the data from the API, I wanted to allow for future reuse of the functionality in the case of re-using these types in other parts of the app.

Components contain re-usable React function components, while pages contain React function components that tend to have many components.

API contains a client class using Axios, and the folder contains seperate files specific to calling particular end points.

I wrote the SCSS mostly using BEM methodology.

## If given more time, how would you improve the quality of your application?

I'd implement unit testing in Jest to make sure that it handles missing communities, ids, groups, etc. Right now it handles missing photos, and not enough data for average home price for a community.

I'd also add something related to loading, such as a loading animation. I put the loading states in the Communities page as placeholder for potentially tackling that.

I'd also want to explore a way of not loading large images when it's not required. One of the test cases loaded a giant image in part because of the settings within the image path. 

I'd also want more seperation of logic between the UI and logic that's happening in the Card component and Communities page.

## Would you implement anything differently?

I'd break 'Card' into more modular parts so that it could be re-used depending on the type of content. 

I'd also use a library for the responsive nature of the website.

I'd looked into a better design pattern for keeping track of the average price based on community. The constructor of HomesModel always calculates the totals because getAverage() doesn't work properly without that step. But those methods aren't always going to be needed every time HomesModel needs to be used.

## Miscellaenous
**Mountview - Winston Heights in North East Calgary** has an unusually long name and looks inconsistent to other community names, so it potentially could've been reduced to Mountview - Winston Heights. However, I didn't think that decision was strictly a developer's call since it's entirely possible there's a valid reason why the original data source kept that label. 

Likewise, the test called for the developer to tally the average homeprice for each community. I considered omitting the cents portion so that there'd be slightly less 'clutter' on the page. But for the purposes of accuracy I kept it in.

