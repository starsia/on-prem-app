Pointers

1. The build process will be responsible for adding the required scripts to the body in the index.html file.
2. `ReactDOM.render(<App />, document.getElementById("root"));` in main.jsx associates the React App component inside the app module with the HTML element with the id of "root" in the index.html file. This is where the React app will be rendered in the DOM.
3. registerServiceWorker() function import and invocation allows support for offline behaviour, inline with PWA.
4. I noticed running `npm run dev` opens localhost:5173 instead of port 3000. Which traditionally is the webserver port. I believe it's because we're using Vite.
5.
