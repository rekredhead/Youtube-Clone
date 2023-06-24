# See Launched App here
- https://rekredhead.github.io/Youtube-Clone/

- Add search function to search the data present only in this webpage

# Youtube Clone
- I built this app out of curiosity about React.js and Vite and I have never used these tools before.
- Along the way, I ended up using Redux as well for the project.
- This YouTube Clone is similar to the Official YouTube Webpage. It only shows the homepage.
- It is responsive and has a dark mode feature.
- It renders the data from json files instead of using an API.

# How to Setup
- Clone this repository
- Initialize the project as a node.js project using
   ```
   npm init -y
   ```
- Setup the app using Vite and select React with Typescript. Use the following commands to setup the project.
   ```
   npm create vite@latest .
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install redux react-redux @reduxjs/toolkit
   ```
- Run the following command to launch the app:
   ```
   npm run dev
   ```

# Tech Stack
- React.js => As the JavaScript Framework
- Vite => A very fast and easy-to-use module bundler
- Tailwindcss => Easy and faster to style the webpages
- Typescript => Personal preference since I want to learn more about TypeScript
- Redux => For state management - to prevent passing props to several components