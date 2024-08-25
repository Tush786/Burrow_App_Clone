# Burrow-App Clone

A MERN E-Commerce application .
<h1>Demo Email and Password For Check the Functionality</h1>
<h3>Email : johndoe@example.com</h3>
<h3>Pass : securepassword123</h3>


<h2>Deployed URL Frontend</h2> https://burrow-app-clone.vercel.app/
<h2>Deployed URL Backend</h2> https://burrow-app-database.onrender.com/

<div style="display: flex;">
    <div>
        <h1>Home Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723910342/Landing_Page_ktblus.png" alt="Home Page" width="400" border="0">
    </div>
    <div>
        <h1>Login Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723912865/Login_Page_idkidt.png" alt="Login Page" width="400" border="0">
    </div>
    <div>
        <h1>Product Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723912361/Product_Page_mjdl21.png" alt="Product Page" width="400" border="0">
    </div>
    <div>
        <h1>Product Details Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723912348/Product_Details_wl6eca.png" alt="Product Details Page" width="400" border="0">
    </div>
     
   
   <div>
      <h1>Address Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723911867/Address_Page_mwalaw.png" alt="Address Page" width="400" border="0">
      </div>
      <div>
      <h1>Chekout Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723911868/Chekout_Page-2_tfanpb.png" alt="Chekout Page" width="400" border="0">
        </div>
      <div>
      <h1>Cart Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723911867/Chekout_Page_mgtrcr.png" alt="Cart Page" width="400" border="0">
          </div>
      <div>
      <h1>Empty Cart Page</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723911879/Empty_Cart_wxapy1.png" alt="Cart-Empty Page" width="400" border="0">
   </div>
      <div>
      <h1>Mega Menu</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723912081/Mega_Menu_a1luyf.png" alt="Mega Menu" width="400" border="0">
   </div>
      <div>
      <h1>Order History</h1>
      <img src="https://res.cloudinary.com/dz2hoghhp/image/upload/v1723912082/Order_History_aptdcx.png" alt="Order History" width="400" border="0">
   </div>
      
   
</div>


## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

### User-side features

- Signup
- Login
- Logout
- Home Page
- Product Page
- Product Details Page
- Cart Page
- Checkout Page
- Address Page
- Order Details Page
- Payment Page
- Profile Page
- Implemented Cookies to store token

### Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- No external CSS files needed (made using Tailwind CSS)
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed
- Cloudinary for images upload on backend
- Razorpay for payment integration
- Nodemailer for forget password url and Order Summery Sent on email

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Chakra Ui
- Node.js
- Express.js
- React
- Redux
- Mongodb
- Firebase Authentication (Oauth)
- Cloudinary
- Razorpay
- Render
- Vercel
- Nodemailer

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- react-icon
- Chakra ui
- Tailwind Css
- Nodemailer
- cookie-parser
- js-cookie

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB/Atlas database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run start
   ```

4. Go to http://localhost:3000 -- Frontend Local Server
5. Got to http://localhost:9090 --- Backend Local Server

## Backend API

<pre>
- POST     /user/signip
- POST     /user/login
- GET     /user
- PATCH    /user/editUser/:id
- POST    /product/add
- DELETE  /product/:_id
- GET     /products
- GET     /product/:_id
- PATCH   /product/update/:__id
- PUT  /user/changepassword/:id
- PATCH   /user/avatar/:id
- GET     /cart/get
- POST    /cart/create/:id
- DELETE  /cart/delete/:productId
- DELETE  /cart/deletecart/:cartId
- GET     /address/get
- POST    /address/add
- PUT     /address/activeAddress/:addressId
- PUT     /address/edit/:addressId
- DELETE  /address/delete/:addressId
- GET     /order/get
- POST    /order/create
- PUT     /order/update-status/:orderId
- POST    /order/paymentSuccess
</pre>

## Frontend pages

<pre>
- /                      Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /admin                 Admin Route
- /product               All Product Page (Lazy Loaded)
- /product/:id           Product Details Page (Private Route)
- /login                 Login Page
- /signup                Signup Page
- /profile/order         Order Page (Private Route)
- /profile/account       Account Page (Private Route)
- /checkout              Checkout Page (Private Route)
- /cart                  Cart Page (Private Route)
- /profile               Profile Page (Private Route)
- /Seating/Loveseats/Sectional Sofas   Sectional Sofas Product Page (Lazy Loaded)
- *                      Error Page (Wildcard route for undefined paths)
</pre>


## npm scripts

At root:

- `npm run start`: Starts frontend
- `npm run server`: Starts only backend
- `nodemon index.js`: Starts local server of backend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder

Inside backend folder:

- `npm run server`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links



- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world

- Download links

  - Nodejs download: https://nodejs.org/
  - VS Code download: https://code.visualstudio.com/

- Cheatsheets
  - Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
  - VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
  - CSS Selectors Cheatsheet: https://frontend30.com/css-selectors-cheatsheet/

## Contact

- Email: tusharsapate34@gmail.com.com
- Linkedin: https://www.linkedin.com/in/tushar-sapate/
