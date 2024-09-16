import self from "../img/self.png"
import mock2 from "../img/21kschool.png"
import mock4 from "../img/Instablood.png"
import mock5 from "../img/Korero.png"
import mock3 from "../img/Wekare.png"
import mock6 from "../img/Oly.png"
import mock7 from "../img/Remserv.png"
import mock8 from "../img/Maxxia.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgba(255,99,98,255)", "rgba(255,99,98,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Santos",
    lastName: "Das",
    initials: "SD", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Team Lead",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Powered by caffeine, driven by code'
        },
        {
            emoji: '📍',
            text: 'Coding my way from Bhubaneswar to the world'
        },
        {
            emoji: "👨‍💻",
            text: "Leading frontend teams to success @ Metafic"
        },
        {
            emoji: "📬",
            text: "Let’s connect: santoshd561@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/santoshdas561/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/iamsantosdas/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Santoshd561",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/santoshdas561",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/Santosh07292859",
            icon: "fa-brands fa-x-twitter",
            label: 'x'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Santos. I'm team lead at Metafic. I studied MCA at VSSUT,Burla, I enjoy long drive on the bike, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'outsystems', 'aws']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Oly",
            live: "https://mcmillanllptrial-dev.outsystemsenterprise.com/OlyWeb/",
            image: mock6
        },
        {
            title: "Maxxia",
            live: "https://mcmillanllptrial-dev.outsystemsenterprise.com/MaxxiaOnline/",
            image: mock8
        },
        {
            title: "Remserv",
            live: "https://mcmillanllptrial-dev.outsystemsenterprise.com/RemservOnline/",
            image: mock7
        },
        {
            title: "21Kschool",
            live: "https://b21k-mvp-91002-web.b91002.stage.us-east-1.aws.svc.builder.ai/EmailAccountLoginBlock",
            image: mock2
        },
        {
            title: "Wekare",
            live: "https://clinic.wekare.sg/#/",
            image: mock3
        },
        {
            title: "Korero",
            live: "https://www.tekorero.com/",
            image: mock5
        },
        {
            title: "Instablood",
            live: "https://www.instablood.org/#home",
            image: mock4
        }
    ]
}