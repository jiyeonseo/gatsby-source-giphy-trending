const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processGif = gif => {
    const nodeId = createNodeId(`giphy-tending-gif-${gif.id}`)
    const nodeContent = JSON.stringify(gif)
    const nodeData = Object.assign({}, gif, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `GiphyGif`,
        content: nodeContent,
        contentDigest: createContentDigest(gif)
      }
    })

    return nodeData
  }
  const apiOptions = queryString.stringify(configOptions)
  const apiUrl = `https://api.giphy.com/v1/gifs/trending?${apiOptions}`

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.data.forEach(gif => {
        const nodeData = processGif(gif)
        createNode(nodeData)
      })
    })
}
