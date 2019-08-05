module.exports = {
    siteMetadata: {
        title: 'Chassis.css',
        description: 'A minimalistic grid & typography CSS framework',
        author: '@joeleisner',
        version: '4.0.0',
        siteUrl: 'https://chassis.joeleisner.com'
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
                icon: 'src/images/icon.png'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sitemap'
    ]
};