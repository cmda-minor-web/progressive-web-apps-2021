# Progressive Web App

## 🔦 **Description**

In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.

Learning goals
You understand the difference between client side and server side rendering and you can apply server side rendering in your application
You understand how a Service Worker works and you can implement it in your application.
You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance.

---

## 🌐 **Live link**

---

## 🚀 **Features**

## 📈 **Datasets**

For this project I made use of the Unsplash API for Developers. The API gives access to the world largest open collection of high quality photos, totally free. With using different querys, like searching, popular, etc etc, the user can receive a lot of information about the image. All the available information contains:

### Used endpoints

To make use of my application I've used two differend

- `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
- `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${SEARCH_QUERY}&per_page=33&order_by=popular `
- `https://api.unsplash.com/photos/1gLdTsX3_70?client_id=${API_KEY}`

### API Response

After requesting the API you will receive an object with a lot of information about the photos. Below is described what all information means.

```js
image = {
  alt_description:  ,           // Second description
  blur_hash: ,                  // Hashed ID
  categories: ,                 // Image categories
  color: ,                      // Color ?
  created_at: ,                 // Created timestamp
  current_user_collections: [], // The current user collection
  description: ,                // Image description
  downloads: ,                  // Total downloads
  exif: ,                       // Camera Settings
  height: ,                     // Image height in PX
  id: ,                         // Image ID
  liked_by_user: ,              // Liked by user
  likes: ,                      // Total likes
  links: ,                      // Links to download information
  location: ,                   // Location of image
  meta: ,                       // Meta information
  promoted_at: ,                // Promoted timestamp
  related_collections: ,        // Related collections with this image
  sponsorship: ,                // Sponsored image
  tags: ,                       // Image tags
  updated_at: ,                 // Updated timestamp
  urls: {},                     // All image URLS, thumbs, small, regular, full, raw
  user: ,                       // Information about user
  views: ,                      // Total image views
  width: ,                      // Image width in PX
}
```

---

## 💻 **Installation**

### Clone the repository

```bash
  git clone https://github.com/joordy/progressive-web-apps-2021.git
```

### Navigate to the repository and nstall the packages

```bash
  npm install
```

### Start local dev environment

```bash
 // npm run dev
```

### Build export

```bash
 // npm run build
```

---

## 🔍 **Sources**

- npm: express-handlebars. (2021, February 16). Npm. https://www.npmjs.com/package/express-handlebars

To make APA:

- https://koderplace.com/code-samples/255/how-to-change-the-location-of-views-in-express-handlebars

---

## 🔐 **License**

This is a repository which is licensed as [MIT](https://github.com/joordy/progressive-web-apps-2021/blob/master/LICENSE). Developed by Jordy Fronik ©️ 2021.

---

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
