# 🫂social-network-API 
Project related to mongoDB and mongoose.

## Description
This project, titled "Social-Network-API", is a backend application built with Express.js, and MongoDB, a NoSQL database. The use of MongoDB allows the application to efficiently handle large amounts of unstructured data, making it ideal for a social networking web application. The application also uses Mongoose ODM for powerful data modeling and schema enforcement. It's designed to provide API endpoints where users can share their thoughts, react to friends’ thoughts, and create a friend list.

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Walthrough video of the application:
[DEMONSTRATION](https://drive.google.com/file/d/1Fb0cD6gtEeaf1ADbBAiTy7Nc1VQQJ6Yc/view?usp=sharing)

## Table of Contents
- [🫂social-network-API](#social-network-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
    - [📚Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [❔Questions](#questions)

## Installation

To install this application, you'll need Node.js and npm installed on your computer. Follow these steps:

1. Clone this repository to your local machine using `git clone <https://github.com/NathaliaReyes/social-network-API.git>` or `git clone <git@github.com:NathaliaReyes/social-network-API.git>`.
2. Navigate to the cloned repository in your terminal `cd social-network-API`.
3. Be sure to have MongoDB installed on your machine.
4. Install the necessary npm packages by running `npm install`.
5. Seed the database, `npm run seed`.
6. Start the application by running `npm run start` in your terminal.

Please refer to the `Usage` section for more details on how to use the application.

## Usage

This application is a backend server and does not have a frontend UI. To test and interact with this application, you will need to use an API testing tool like Postman.

A Postman collection that includes all the API endpoints for this application is provided in the `assets` folder. Here's how you can use it:

1. Install [Postman](https://www.postman.com/downloads/) on your local machine.
2. Run the server for this application.
3. Open Postman and click on 'Import' to import the collection file from the `assets` folder.
4. Once the collection is imported, you can click on each request to see the details and send the request to the server.

Remember to replace `<port>` in the request URLs with the actual port number where your server is running.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

### 📚Acknowledgements

- **Node.js** 
- **Express.js**
- **MongoDB**
- **MongoDB Compass**
- **Mongoose** 
- **Postman**

## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.

## Features

- **CRUD Operations for Users:** (Create, Read, Update, Delete) operations on all users.
- **CRUD Operations for Thoughts:** (Create, Read, Update, Delete) operations on thoughts.
- **Friend List Management:** Users can add and remove other users from their friend list.
- **Reactions to Thoughts:** Users can react to thoughts posted by other users. They can also update or delete their own reactions.
- **API Endpoints:** The application provides API endpoints for all the above features, which can be used to build a frontend application.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

n/a

## ❔Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com
LinkedIn 👩🏻‍💻: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***
