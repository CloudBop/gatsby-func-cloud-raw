require("dotenv").config({
  // using envs 
  // https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  // potential way around HTTP NODEv18 errors CONN REFUSED
  // set host to something different. Didn't seem to work. 
  // developMiddleware: (app) => {
  //   app.set('host', '127.0.0.1');
  // },
  plugins: [
    //
    // the order of these could potentially cause very nasty and hard to track build errors. 
    //
    `gatsby-theme-minimal`,
    // removed for clarity
    // `gatsby-theme-pokedex`,
    // `gatsby-theme-redux-toolkit-cra`,
  ],
}
