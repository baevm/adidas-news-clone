import React from 'react'
import Head from 'next/head'

const SEO = ({ title, ogtitle, description, ogdescription, type, url, image }) => (
  <Head>
    <title>{title}</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='description' content={description} />
    <meta property='og:site_name' content='adidas News Site | Press Resources for all Brands, Sports and Innovations' />
    <meta property='og:title' content={ogtitle} />
    <meta property='og:description' content={ogdescription} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={type} />
    {image && <meta property='og:image' content={image} />}
    <link rel='icon' href='/favicon.ico' />
    <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
  </Head>
)

export default SEO
