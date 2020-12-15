exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `GoogleSpreadsheetMain`) {
      console.log(node)
      const slug = `/review/${node.id}`
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }


  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const path = require(`path`)


    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
      query {
        allGoogleSpreadsheetMain {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    console.log(JSON.stringify(result, null, 4))

    result.data.allGoogleSpreadsheetMain.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/review.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  }