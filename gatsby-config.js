module.exports = {
    siteMetadata: {
        title: 'Chassis.css',
        description: 'A minimalistic grid & typography CSS framework',
        author: '@joeleisner',
        version: '4.0.7',
        siteUrl: 'https://chassis.joeleisner.com',
        defaultImage: '/images/thumbnail.png',
        navigation: [
            {
                name: 'Reset',
                path: '/reset'
            },
            {
                name: 'Grid',
                path: '/grid'
            },
            {
                name: 'Utilities',
                path: '/utilities'
            }
        ]
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
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: require('sass'),
                sassOptions: {
                    includePaths: ['node_modules']
                }
            }
        },
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
    ],
    flags: {
        DEV_SSR: true,
        FAST_DEV: true
    }
};