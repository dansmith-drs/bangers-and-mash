/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 //Make env vars available in this config
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    "@chakra-ui/gatsby-plugin",
  {
    resolve: 'gatsby-source-google-spreadsheet',
    options: {
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        worksheetTitle: 'Main',
        typePrefix: "GoogleSpreadsheet",
        credentials: JSON.parse(`${process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS}`),
    }
  },
  
  ],
}
