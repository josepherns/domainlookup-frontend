# Domain Lookup Application

## Overview

This is a React application for looking up domain and contact information using a WHOIS API. It allows users to enter a domain name, select the type of information they want to retrieve, and view the results in a user-friendly format.

## Features

- **Domain Information Lookup**: Fetch and display domain information including registrant name, creation date, expiration date, and name servers.
- **Contact Information Lookup**: Fetch and display contact information including registrant, technical, and administrative contact names, as well as contact email.
- **Error Handling**: Provides error messages in case of failed requests.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components for React.
- **Fetch API**: To make HTTP requests to the backend.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:

   ```bash
   npm start
   ```

2. **Open the application**:

   Go to `http://localhost:5000` in your web browser.

3. **Enter a domain name**, select the type of information you want to retrieve, and click "Lookup" to see the results.

## API Endpoint

- **POST** `/whois`: The endpoint to request domain and contact information. The request body should be a JSON object with the following fields:
  - `domain` (string): The domain name to look up.
  - `type` (string): The type of information to retrieve. Can be "domain", "contact", or "both".

## Project Structure

- `src/` - Contains the source code of the application.
  - `App.js` - The main React component of the application.
  - `App.css` - The CSS file for styling the application.
- `public/` - Contains static assets and the main HTML file.
- `package.json` - Contains project metadata and dependencies.

## Contributing

If you want to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your changes.
3. **Make your changes** and test them.
4. **Submit a pull request** with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [Your Name](mailto:your-email@example.com).

