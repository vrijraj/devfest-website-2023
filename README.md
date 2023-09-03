# DevFest Web App 2023
Standard Web App for DevFest's Events. <br>
Show some ❤️ and star the repo to support the project


## Getting Started
1. Fork the repo
1. Setup Environment
    - Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
    - Install vue cli: `npm install -g @vue/cli`
1. Install project dependencies: `npm install` 
1. Compiles and hot-reloads for development use `npm run serve`
1. Update JSON files from `src/assets/data` directory
1. Upload all the images related to Speakers, Team and Sponsors in `src/assets/img` with their respective directory
1. Update meta tags, Google Analytics and other info in `public/index.html` file.
1. For the production: `npm run build` and then one dir will be created dist


## Deployment on Firebase
1. Install required tools for performing Firebase deployment
    - Install Firebase CLI: `npm i -g firebase-tools`
1. Login into Firebase CLI using the following command -  `firebase login`
1. Open Terminal/CMD/Powershell in the root directory of your clone of the aura-admin repository.
1. Now type `firebase login` command in your Terminal/CMD/Powershell
1. Update the `Firebase Project ID` in `.firebasesrc` file. This value should match the project ID in your Project Settings of the Firebase project you created in the previous section.
1. Go to the Firebase Console Dashboard and Click on Hosting in the left navigation.
1. Click on Get Started
1. Click through all steps till you’re taken to the Hosting page in the console.
1. You’ll be provided with a ready domain with your project ID. It should look like - `<project-id>.web.app or <project-id>.firebaseapp.com`
1. Copy the sub-domain name of the URL provided. In this case, it will be the project ID. However, to be precise, you have to copy the part before .web.aap or .firebaseapp.com. This is your Site ID
1. Update `Firebase.json` file, set the site key to Site ID
    ```js
        {
            "hosting": {
                "site":"Your_Firebase_Hosting_id",
                "public": "dist",
                "rewrites": [ {
                    "source": "**",
                    "destination": "/index.html"
                } ],
                "ignore": [
                    "firebase.json",
                    "**/.*",
                    "**/node_modules/**"
                ]
            }
        }
    ```
1. In your terminal at the root directory of the project,  build and deploy using the following command     
    - `firebase deploy`

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | PWA on Lighthouse |
| **Works offline** | Can work offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |

## Technology Stack

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
* [Workbox](https://developers.google.com/web/tools/workbox)
* [Google Cloud Platform](https://cloud.google.com/)

## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Using GitHub Issues

- Feel free to use GitHub issues for questions, bug reports, and feature requests
- Use the search feature to check for an existing issue
- Include as much information as possible and provide any relevant resources (Eg. screenshots)
- For bug reports ensure you have a reproducible test case
 - A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request

- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions
- Pull requests _must_ be made against `develop` branch. Any other branch (unless specified by the maintainers) will get rejected.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Contributors
<b>Maintainer:</b> [Vrijraj Singh](https://github.com/vrijraj) <br>

### View Website Built with Projects

| Community Name | Web App Link |
| --- | --- |
| GDG X| [View Now](https://gdg.community.dev) |

## LICENSE
Check out the developer [LICENSE](https://github.com/gdg-x/aura/blob/master/LICENSE)

## Facing Any Problem or need any Help?
Write us in [issues](https://github.com/vrijraj/devfest-website-2023/issues) section. Our team will try solve your issue within 10-12 hours.<br>