module.exports = {
    siteMetadata: {
        title: 'Chassis.css',
        description: 'A minimalistic grid & typography CSS framework',
        author: '@joeleisner'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'chassis-css',
                short_name: 'chassis',
                start_url: '/',
                background_color: 'rgb(120,50,255)',
                theme_color: 'rgb(120,50,255)',
                display: 'minimal-ui',
                icon: 'src/images/icon.png' // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ]
};