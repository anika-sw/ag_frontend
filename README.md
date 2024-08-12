# automated_groove_frontend
Streaming services automatically scan audio for copyrighted content, and mute or block uploads featuring this content. This makes it difficult for content creators to find appropriate background music. Our app automatically generates royalty-free music for content creators saving them time and money. 

<!-- LOCAL START UP QUICK INSTRUCTIONS

- make sure the back end is started with flask
- start on local machine with:
    npm run dev -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation
1. **Clone the repository:**

    ```bash
    git clone https://github.com/anika-sw/ag_frontend.git
    cd ag_frontend
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Development Server:**

    To start the development server, run:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

2. **Building for Production:**

    To build the project for production, run:

    ```bash
    npm run build
    ```
3. **Preview Production Build:**

    To preview the production build, run:

    ```bash
    npm run serve
    ```

## Project Structure

```plaintext
automatedGroove/
├── dist/                   # Contains production build
├── node_modules/           # Dependency storage
├── public/                 # Static assets
│   ├── mockServiceWorker.js# Required file for testing in browser
│   └── assets/             # Images, fonts, etc.
├── src/
│   ├── components/         # Reusable components and related CSS
│   ├── mocks/              # Server, handlers, browser, and mock data files
│   ├── App.tsx             # Main application component
│   └── ...
├── tests/
├── utils/                  # Holds API routes and supplementary types file
├── .gitignore              # Files and directories to ignore in Git
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation

## Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run test`: Runs the tests.


## Technologies Used
- **Vite**: For fast and efficient bundling and development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For static type-checking and better developer tooling.
- **ESLint**: For linting TypeScript and JavaScript files.
- **Prettier**: For code formatting.
- **Mock Service Worker**: Used for mocking network requests.
- **reCAPTCHA**: Used to verify a user is human.
- **OpenAI API**: Used for AI text generation based on user prompts.
- **MusicFy AI API**: Used for AI song generation based on user prompts.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


## Creators
- [**Shelby Willis**](https://www.linkedin.com/in/shelby-willis-57004a234/)
- [**Sunny Muniz**](https://www.linkedin.com/in/sunny-muniz-4838b8235/)
- [**Kit Sutliff**](https://www.linkedin.com/in/kit-sutliff/)
- [**Anika Stephen Wilbur**](https://www.linkedin.com/in/anika-stephen-wilbur/)

