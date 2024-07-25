# ASCII Art Generator

This project is a simple web application that converts text input into ASCII art using the Figlet library. The application is built with Node.js, Express, and JavaScript, providing both frontend and backend components.

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js**: The JavaScript runtime for running the server.
- **npm**: Node Package Manager for managing dependencies.
- **Figlet**: Check [here](https://www.npmjs.com/package/figlet) to get info about this package.

## Project Structure

- `index.html`: The main HTML file containing the frontend layout.
- `style.css` :Styles for HTML structure.
- `app.js`: The frontend JavaScript file for handling user input and interacting with the server.
- `server.js`: The backend server file using Express to handle requests and generate ASCII art.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shreekant-04/Ascii-Generator.git
   cd ascii-art-generator

2. **Install Dependencies**:
   Make sure you have Node.js installed, then install the required npm packages.
   ```bash
   npm install
   npm install figlet express body-parser
   
3. **Run the Server**:
   Start the Node.js server to serve the application.
   ```bash
   node server.js

 The server will be running at http://localhost:3000.




## How It Works
   **Frontend (app.js)**
      The frontend includes a text input field where users can enter text.
      The input is sent to the server via a POST request to the /generate endpoint.
      The server processes the text and returns the ASCII art, which is then displayed on the page.

   **Backend (server.js)**
      The backend is powered by Express and uses the Figlet library to generate ASCII art.
      It includes a single endpoint, /generate, which accepts a text input and returns the corresponding ASCII art.

