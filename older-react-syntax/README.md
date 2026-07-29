Pointers

1. The build process will be responsible for adding the required scripts to the body in the index.html file.
2. `ReactDOM.render(<App />, document.getElementById("root"));` in main.jsx associates the React App component inside the app module with the HTML element with the id of "root" in the index.html file. This is where the React app will be rendered in the DOM.
3. registerServiceWorker() function import and invocation allows support for offline behaviour, inline with PWA.
4. I noticed running `npm run dev` opens localhost:5173 instead of port 3000. Which traditionally is the webserver port. I believe it's because we're using Vite.
5.

Some troubles/mistakes

1. Installing an earlier version of react testing library due to me using React 17. At time of writing, it is React 19, but because I'm learning class components, I need to use React 17. So I installed with `npm install --save-dev @testing-library/react@12.1.5` instead of the latest version. I found the source here: [link](https://stackoverflow.com/questions/72264785/what-are-the-corresponding-testing-library-react-versions-for-react-16-8-6)
2. I learned the `@` in the import statement references the node_modules folder. I've always wondered why I needed it, until I opened the intimidating node_modules. However, I don't really see the babel-plugin-root-import. [link](https://stackoverflow.com/questions/42711175/what-does-the-symbol-do-in-javascript-imports)
