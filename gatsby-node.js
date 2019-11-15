const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions 
  const AboutPage = path.resolve('src/templates/about-page.js')
  const HomePage = path.resolve('src/templates/index-page.js')
  createPage({ path: `/about`, component: AboutPage, context: {} })
  createPage({path: `/`, component: HomePage, context: {}})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
