interface Links {
    text: string,
    link: string,
}

interface FooterData {
    title: string,
    links: Links[];
}

interface Contact {
    text: string,
    svgContent: string,
}

export const footerData: FooterData[] = [
    {
        title: "About Us",
        links: [
            {
                text: "Company History",
                link: "",
            },
            {
                text: "Meet the Team",
                link: "",
            },
            {
                text: "Employee Handbook",
                link: "",
            },
            {
                text: "Careers",
                link: "",
            },
        ],
    },
    {
        title: "Our Services",
        links: [
            {
                text: "Web Development",
                link: "",
            },
            {
                text: "Web Design",
                link: "",
            },
            {
                text: "Marketing",
                link: "",
            },
            {
                text: "Google Ads",
                link: "",
            },
        ],
    },
    {
        title: "Helpful Links",
        links: [
            {
                text: "FAQs",
                link: "",
            },
            {
                text: "Support",
                link: "",
            },
            {
                text: "Policy Privacy",
                link: "",
            },
        ],
    },
];

export const contactData: Contact[] = [
    {
        text: "lakayanm@gmail.com",
        svgContent: '/icons/email.svg',
    },
    {
        text: "0123456789",
        svgContent: '/icons/phone.svg',
    },
    {
        text: "213 Saint-Marc Haiti",
        svgContent: '/icons/adress.svg',
    },
];

export const socialMediaData: Contact[] = [
    {
        text: "",
        svgContent: '/icons/facebook.svg',
    },
    {
        text: "",
        svgContent: '/icons/instagram.svg',
    },
    {
        text: "",
        svgContent: '/icons/twitter.svg',
    },
    {
        text: "",
        svgContent: '/icons/github.svg',
    },
    {
        text: "",
        svgContent: '/icons/tiktok.svg',
    },
];