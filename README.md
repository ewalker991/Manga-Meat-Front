# Welcome to Manga Meat!

Manga Meat is the HOTTEST new anime food restaurant on the block! This app manages the online menu and database, so guests can explore our cartoonishly delicious dining options.

## About Manga Meat

### Backend

Manga Meat uses a MongoDB Atlas API for the backend. Express is used to simplify the server creation process. This backend has full CRUD functionality using ```POST```, ```GET```, ```PUT```, and ```DELETE``` requests. The backend is deployed using MongoDB Atlas and Heroku.

### Frontend

The frontend was created as a react app. React was chosen for its component centered build process.  React's use of a virtual DOM also makes for a speedy web app. React router allows for seamless movement between different views.

Methods written in the App.js allow individual components to make CRUD requests to the backend. This allows for menu and chef database information to be updated from the front end. This process in turn triggers a new fetch call, and the updated state causes a re-render showing the new collection of information on the live web app.

## Installation

You will need the proper node packages installed to contribute to this project. Use the CLI to install the proper node packages in the directory where you have cloned the repository. The necessary dev dependencies can always be found in the package.json.

```bash
npm install react-router react-router-dom react-dom
```

To start the react app in your browser run
```npm start```

## Usage

The nav menu at the top of the page allows for selection of views between the home page, Chefs page, and food page. When you are in the Chefs view you can click on an individual chef and stage that chef for editing or deletion. The create inputs can be used to create a new chef. The same actions can be taken with food on the Food view.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This app is licensed.