# gatsby-source-giphy-trending
[![](https://img.shields.io/npm/v/gatsby-source-giphy-trending.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-source-giphy-trending)
[![](https://img.shields.io/npm/dt/gatsby-source-giphy-trending.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-source-giphy-trending)

Source plugin for pulling data into Gatsby from [Giphy](https://giphy.com/) trending API. 

## Prerequisites
- [create giphy app to get an API key](https://developers.giphy.com/dashboard/?create=true) 

## Install 
```
npm install --save gatsby-source-giphy-trending
```

## How to use
```
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-source-giphy-trending',
      options: {
        api_key: '',
        rating: 'G',
      },
  },
]
```
## Options 

#### api_key (REQUIRED)
API key from Giphy Developer dashboard

#### rating (OPTIONAL)
Filters results by rating 
- Y
- G
- PG
- PG-13
- R

## How to query
```
{
  allGiphyGif(limit: 10) {
    edges {
      node {
        id
        url
        title
        images {
          original {
            url
          }
        }
      }
    }
  }
}
```
