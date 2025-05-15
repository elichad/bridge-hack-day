import React from "react";
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/elichad/bridge-hack-day/tree/main/website',
  project: {
    link: "https://github.com/elichad/bridge-hack-day",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: (
    <span
      style={{
        display: "flex",
      }}
    >
      <img
        style={{
          display: "flex",
          height: "1.3rem",
          marginRight: "0.5rem",
        }}
        src="/logo.svg"
        alt="logo"
      />
      Documentation
    </span>
  ),
  head() {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'UI/UX Driven Development'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'UI/UX Driven Development'}
        />
        <title>{frontMatter.title || 'UI/UX Driven Development'}</title>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </>
    )
  },
  footer: false
};