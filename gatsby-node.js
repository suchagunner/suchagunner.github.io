const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query allMdx {
      allMdx {
        nodes {
          id
          slug
          fileAbsolutePath
        }
      }
    }
  `)

  const postTemplate = path.resolve(__dirname, `src/templates/post.js`);
  queryResults.data.allMdx.nodes.forEach(node => {
    if (node.fileAbsolutePath.includes("/log/")) pathPrefix = `/log`
    else if (node.fileAbsolutePath.includes("/til/")) pathPrefix = `/til`

    createPage({
      path: `${pathPrefix}/${node.id}`,
      component: postTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id
      },
    })
  })
}
