import {
    type ExpressiveCodeConfig,
    type LicenseConfig,
    LinkPreset,
    type NavBarConfig,
    type ProfileConfig,
    type SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
    title: "Dsqrwym",
    subtitle: "Full-Stack Software Engineer",
    lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
    themeColor: {
        hue: 216, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
        fixed: false, // Hide the theme color picker for visitors
    },
    banner: {
        enable: true,
        src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
        position: "top", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
        credit: {
            enable: true, // Display the credit text of the banner image
            text: "", // Credit text to be displayed
            url: "https://huaban.com/pins/6535792175", // (Optional) URL link to the original artwork or artist's page
        },
    },
    toc: {
        enable: true, // Display the table of contents on the right side of the post
        depth: 2, // Maximum heading depth to show in the table, from 1 to 3
    },
    favicon: [
        {
            src: "/favicon/favicon-32x32.png",
            sizes: "32x32",
        },
        {
            src: "/favicon/favicon-16x16.png",
            sizes: "16x16",
        },
        {
            src: "/favicon/android-chrome-192x192.png",
            sizes: "192x192",
        },
        {
            src: "/favicon/android-chrome-512x512.png",
            sizes: "512x512",
        },
        {
            src: "/favicon/apple-touch-icon.png",
            sizes: "180x180",
        },
    ],
};

export const navBarConfig: NavBarConfig = {
    links: [
        LinkPreset.Home,
        LinkPreset.Archive,
        LinkPreset.Project,
        LinkPreset.About,
        {
            name: "GitHub",
            url: "https://github.com/dsqrwym",
            external: true,
        },
    ],
};

export const profileConfig: ProfileConfig = {
    avatar: "assets/images/demo-avatar.png",
    name: "Yu Zhang",
    bio: "Full-Stack Developer based in Spain · Vue/React, NestJS & Spring Boot, Kotlin Multiplatform · EU Work Permit",
    links: [
        {
            name: "GitHub",
            icon: "fa6-brands:github",
            url: "https://github.com/dsqrwym",
        },
        {
            name: 'LinkedIn',
            icon: 'fa6-brands:linkedin',
            url: 'https://www.linkedin.com/in/yu-zhang-90b024435/',
        },
        {
            name: 'Email',
            icon: 'material-symbols:mail-outline',
            url: 'mailto:yu.zhang.lu.job@gmail.com',
        },
    ],
};

export const licenseConfig: LicenseConfig = {
    enable: true,
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
    // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
    // Please select a dark theme, as this blog theme currently only supports dark background color
    theme: "github-dark",
};
