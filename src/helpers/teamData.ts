interface SocialMedia {
    facebook: string,
    twiter: string,
    github: string,
    dribble: string,
}

interface TeamData {
    avatar: string,
    name: string,
    occupation: string,
    socialMedia: SocialMedia,
}

export const teamData: TeamData[] = [
    {
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        name: "Bonnie Green",
        occupation: "CEO/Co-founder",
        socialMedia: {
            facebook: "",
            twiter: "",
            github: "",
            dribble: "",
        }
    },
    {
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
        name: "Helene Engels",
        occupation: "CTO/Co-founder",
        socialMedia: {
            facebook: "",
            twiter: "",
            github: "",
            dribble: "",
        }
    },
    {
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        name: "Jese Leos",
        occupation: "SEO & Marketing",
        socialMedia: {
            facebook: "",
            twiter: "",
            github: "",
            dribble: "",
        }
    },
    {
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        name: "Joseph Mcfall",
        occupation: "Sales",
        socialMedia: {
            facebook: "",
            twiter: "",
            github: "",
            dribble: "",
        }
    },
];