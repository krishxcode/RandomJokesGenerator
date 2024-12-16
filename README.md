# Random Jokes Generator

## Overview
This project is a **Random Jokes Generator** web application built with React and Axios. The application allows users to fetch random jokes or multiple jokes at a time, offering a simple and fun user experience. The backend is assumed to have endpoints to serve single random jokes and multiple jokes.

---

## Features

1. **Fetch Random Joke**:
   - A button fetches a single random joke from the backend.
   
2. **Fetch All Jokes**:
   - A button fetches multiple jokes at once from the backend.
   
3. **Dynamic Rendering**:
   - Displays either a single joke or a list of jokes depending on the button clicked.

4. **Error Handling**:
   - Graceful handling of errors when the API fails to respond.

---

## Technologies Used

- **Frontend**: React, Axios
- **Styling**: CSS

---

## Installation

### Prerequisites
- Node.js and npm installed.
- Backend API with endpoints for jokes (`/jokes/random` and `/jokes/ten`).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-jokes-generator.git
   cd random-jokes-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Ensure the backend API is running and accessible.

---

## API Endpoints

The project relies on the following backend API endpoints:

- `GET /jokes/ten`: Fetches multiple jokes at once.
- `GET /jokes/random`: Fetches a single random joke.

---

## Project Structure

```
random-jokes-generator/
├── public/
├── src/
│   ├── components/
│   │   └── JokesApp.jsx
│   ├── styles/
│   │   └── JokesApp.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

---

## Usage

1. Open the application in your browser.
2. Click on **Get Random Joke** to fetch and display a single random joke.
3. Click on **Get All Jokes** to fetch and display multiple jokes.

---

## Screenshots

### Final Output

(public/JokesApp.png)

> Replace `image-path` with the actual path to the final screenshot.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any inquiries, please contact:
- **Name**: Kishan pandit
- **Email**: kishanpanditcode.com
- **GitHub**:https://github.com/krishxcode

