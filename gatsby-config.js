/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Accelerator Hub`,
    description: 'A toolkit for Data Engineering Tasks',
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/src/content`
      },
      __key: "content"
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images"
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
  
  ]
};