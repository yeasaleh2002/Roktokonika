# Getting Started with Roktokonika

# Live Website: https://roktokonika-e8bd3.web.app/

# Website Feature

1. Must be a volunteer type website.
2. Home page will have a header (simple navbar), banner, volunteers, team, and footer.
3. Make the website responsive. Make sure the site looks different on desktop and mobile responsive. 
4. use .env file on the server, .env.local file on the client to hide db user and password, etc. Also use .gitignore file
5. Add some animation while applicable.
6. Make the footer little more realistic.
7. Use a database to store information. It could be mongodb atlas or any other noSQL database.
8. For  testing purpose please add one admin with the email address: roktokonika707@gmail.com  with password: roktokonikaadmin
9. Implement email/ password (login/Register) based login system. The registration form should have the name and once a user is logged in, the user name, and the logout button should appear on the header which will log out the user once clicked. Displaying username on the header  is must.
10. You must be logged in to go to the Volunteers component.
11. If user logs in, then he can go to dashboard component and see write post, register support, register clean, register donor route.
12. Will show roktokonika team members on team route.
13. If you register from register donor route, data will be added to blood donor nested route. If you register from register clean route, data will be added to clean team nested route. If you register from register support route, data will be added to support team nested route.
14. If admin logs in then he can go to dashboard component write post, register support, register clean, register donor, make admin, manage all post, add team member, manage team, manage blood donor, manage clean team, manage supporters.













#
#
#
#
# Front End
  ----  total Installed: -----
1. npx create-react-app roktokonika
2. npm install react-router-dom
3. npm install @mui/material @emotion/react @emotion/styled
4. npm install @mui/icons-material
5. npm i react-hook-form
6. npm i axios
7. npm install @mui/icons-material
8. 


#
# Back-End

-- Total Installed ----- 
1. npm init -y 
   * After this, we use in package.json(node-file) > script এর মধ্যে,
      "start" : "node index.js",
      "start-dev" : "nodemon index.js", => nodemon global install করা আছে।
      * index.js নামে একটা ফাইল create করতে হবে।

2. npm install express

3. npm install cors 
   * এইটা কোডের মধ্যে লিখতে হবে। 
     const cors = require('cors')
     app.use(cors())
     app.use(express.json()) ==> middleware অবশ্যই use করতে হবে।

4. npm install dotenv 
   * এইটা কোডের মধ্যে লিখতে হবে। 
     require('dotenv').config()

5. npm install mongodb

6. Mongodb atlas থেকে backend(node.js) এর সাথে database connect করাতে হবে।

7. Mongodb atlas এ গিয়ে database>connect>Connect your application> database connect করার কোড কপি করে index.js file এ paste করতে হবে। অথবা nodeMonge docs( https://docs.mongodb.com/drivers/node/current/quick-start/ ) এ গিয়ে async -await function use করা যেতে পারে। সেইটা থেকে পুরো code copy করে, index.js file এর মধ্যে use করতে  হবে। And copy করার সময় finally {} এর মধ্যে যেটা থাকবে সেটা comment  করে দিতে হবে।


8. এরপর .gitignore and .env name এ file create করতে হবে। .gitignore file এ node_modules use করতে হবে। অ্যান্ড .env use করতে হবে। যেন .env file এ যে userName and password use করা হইছে, সেটা গোপন থাকে। And .env file এর মধ্যে database এর userName and Password রাখতে হবে। যেভাবে লিখতে হবে সেটা হল 
DB_USER=USERNAME(add user করার সময় যে ইউজার name পাইছি সেটা লিখতে হবে)।
DB_PASS=USERPASSWORD(add user করার সময় যে ইউজার password পাইছি সেটা লিখতে হবে)।
এরপর এর কাজ হল database এ এই userName and password add করা। সে জন্য index.js ফাইল এ গিয়ে connect with database থেকে যে uri পেয়েছি সেখানে <password> এর পরিবর্তে ${process.env.DB_PASS} এইটা ব্যবহার করতে হবে। And যে userName থাকবে তার পরিবর্তে ${process.env.DB_USER} use করতে হবে। তাহলে কাজ হবে। তবে অবশ্যই uri dynamic কোটের(``) এর মধ্যে রাখতে হবে। 

* এই কোড গুলো use করলে অ্যান্ড import , install করলে node mongo connect set হবে।

* * ------- node mongo connection ------- 

const express = require('express');

const { MongoClient } = require('mongodb');

const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//middlware

app.use(cors());

app.use(express.json());

// using connection uri and connection client

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0fdsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {

  try {

    await client.connect();

    console.log('Server and Database connection succesfully!!')

  } 

  finally {
    // await client.close();
  }
  
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('RoktoKonika!')
  })


app.listen(port, () => {
    console.log(`Roktokonika at http://localhost:${port}`)
  })

* * -------- node mongo connection --------


* এরপর database and collection set করে দিতে হবে। 

* কোন data objectId(singleID) দিয়ে access করতে চাইলে আগে objectId import করে নিতে হবে। 
  * const { ObjectID } = require('bson'); এরপর objectId দিয়ে singleId বা একটা নিদিষ্ট কিছুকে access করা যাবে।










#

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
