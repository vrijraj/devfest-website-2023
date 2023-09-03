# DevFest India 2023
Standard Web App for DevFest India's Communties. <br>


## List Your DevFest
```json
{
    "City":"Jammu",
    "CommunityName":"GDG Jammu",
    "DevFestName":"DevFest Jammu",
    "Days":"1",
    "StartingDate":"2022-10-16",
    "EndingDate":"2022-10-16",
    "Venue":"Jammu Venue Name",
    "Description":"This DevFest will be an achievement for the GDG Jammu Team as we are all set to host the 1000+ developers by connecting the dots which we have started since a month. We started with the theme of Building Developers at DevCommunity Roadshow, then Guiding Developers at DevCreate Hackathon and now, ready with the theme - Supporting Developers.",
    "EventLink":"https://devfest.Jammu.com",
    "CommunityPage":"https://gdg.community.dev/gdg-Jammu",
    "Visible":"true",
    "State":"Jammu",
    "CFP":{
        "Status":"1",
        "Link":"https://devfestindia.com",
        "LastDate":"2022-10-16"
    }
}
```
1. Add your DevFest Information [here](https://github.com/devfestindia/devfest-india-data-2023/blob/main/data/events.json)
  1. Use `YYYY-MM-DD` format for the Date
  2. Apply `Visible` status to `true`
  3. Add your `CFP`
    1.  `Status`: 1-> If you have a CFP for the DevFest | Otherwise 0

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

### Project setup
1. Clone the repo and `npm install`
1. Compiles and hot-reloads for development use `npm run serve`
1. Compiles and minifies for production use `npm run build`
1. Lints and fixes files use `npm run lint`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## LICENSE
Check out the developer [LICENSE](https://github.com/gdg-x/aura/blob/master/LICENSE)