# AutomatedGroove Frontend

Streaming services automatically scan audio for copyrighted content, and mute or block uploads featuring this content. This makes it difficult for content creators to find appropriate background music. Our app automatically generates royalty-free music for content creators saving them time and money. 

Find the backend repository here: [AutomatedGroove Backend](https://github.com/anika-sw/ag_backend)


## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Implementation](#implementation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Creators](#creators)

## Installation
1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/anika-sw/ag_frontend.git
    ```
2. Navigate into the repository:
	```sh
    cd ag_frontend
	```
3. Install dependencies:
    ```sh
    npm install
    ```


## Configuration

1. Set the following environment variable in a `.env` file:

-  `VITE_RECAPTCHA_SITE_KEY`

    >_Note: You need to obtain your own API key from **Google Cloud** to use in this project._


2. Add the following code to a `vite-env.d.ts` file:
    ```sh
    /// <reference types="vite/client" />

    interface ImportMetaEnv {
        // Add other environment variables here as needed
        readonly VITE_RECAPTCHA_SITE_KEY: string;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
    ```

## Implementation

1. Run the development server:
    ```sh
    npm run dev
    ```

2. To access the application locally, open a web browser and go to [http://localhost:5173](http://localhost:5173).

3. To build for production, run:
    ```sh
    npm run build
    ```

## Testing

- Run the `vitest` testing framework in your local IDE:
    ```sh
    npm run test
    ```

- Run the `Mock Service Worker` testing framework in your brower to mock API calls:
  1. Ensure all **code** is uncommented in the `main.tsx` file
  2. Open your local deployment of the project in a browser with `npm run dev`.
  3. Open your `Develeper Tools` and navigate to the `Console` tab.
  4. If `Mock Service Worker` is running properly, the message `[MSW] Mocking enabled.` should appear.
  5. To disable `Mock Service Worker` and resume sending calls to your APIs during local deployment, comment out the `Mock Service Worker` code in `main.tsx`. 


## Project Structure

```plaintext
ag_frontend/
├── dist/                       # Auto-populates production build files
├── node_modules/               # Dependency storage
├── public/                     # Static assets
│   ├── mockServiceWorker.js    # Required file for testing in browser
│   └── assets/                 # Images, fonts, etc.
├── src/
│   ├── components/             # Reusable components and related CSS
│   ├── mocks/                  # Server, handlers, browser, and mock data files
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Project root - toggle dev mode testing here
│   └── ...                     # App and index CSS files
├── tests/                      
│   ├── app.test.tsx            # Test file
│   └── setupTests.ts           # Mock Service Worker setup for vitest
├── utils/                      
│   ├── api.tsx                 # API functions
│   └── types.ts                # Supplementary types file
├── .env                        # Secret environment variables
├── .gitignore                  # Files and directories to ignore in Git
├── index.html                  # Main HTML file
├── LICENSE                     
├── package-lock.json           # Auto-populates on dependency install
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite-env.d.ts               # Vite-specific environment variables config
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run test`: Runs vitest in your local IDE.


## Technologies Used
- **Vite**: For fast and efficient bundling and development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For static type-checking and better developer tooling.
- **Vitest**: 
- **Mock Service Worker**: For mocking network requests in the browser.
- **reCAPTCHA**: To verify a user is human.
- **OpenAI API**: For AI text generation based on user prompts.
- **MusicFy AI API**: For AI song generation based on user prompts.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


## Creators
- [**Shelby Willis**](https://www.linkedin.com/in/shelby-willis-57004a234/)
- [**Sunny Muniz**](https://www.linkedin.com/in/sunny-muniz-4838b8235/)
- [**Kit Sutliff**](https://www.linkedin.com/in/kit-sutliff/)
- [**Anika Stephen Wilbur**](https://www.linkedin.com/in/anika-stephen-wilbur/)