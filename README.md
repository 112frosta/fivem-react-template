# React Template with TypeScript and TailwindCSS

This project is a React template configured with TypeScript and TailwindCSS. It includes a custom hook, `useNUIMessage`, designed for handling NUI messages in a FiveM application. Just basic template for FiveM with React

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **Custom Hook (`useNUIMessage`)**: A React hook for handling NUI messages in FiveM applications.
- **Utility cn**: A cn utility for better DX with tailwind className merging

## Getting Started

To get started with this template, clone the repository and install the dependencies.

```bash
git clone https://your-repository-url.git
cd your-project-directory
npm install
```

## Usage

### Running the Development Server

To start the development server `cd your-project-directory/ui`, then run:

```bash
npm run dev
```

This will launch the application on `http://localhost:3000`.

### Customizing Import Paths

If you need to customize or change the configured import path alias, you can do so by modifying the `paths` in your `tsconfig.app.json`. This allows for flexibility in structuring your project's directories and import statements. Remember, any changes made here should also be reflected in your `vite.config.ts` to maintain consistency across your development environment.

In `tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Building for Production

To build the application for production, `cd your-project-directory/ui`, then run:

```bash
npm run build
```

This command will generate a `build` directory with your compiled application.

### Custom Hook: `useNUIMessage`

The `useNUIMessage` hook is designed to handle NUI messages from FiveM. It listens for messages with a specified action and executes a callback function when such messages are received.

#### Usage

```tsx
import { useNUIMessage } from "@/hooks/useNUIMessage";

type NUIPayload = { someData: string };

useNUIMessage<NUIPayload>("hud:Toggle", (payload) => {
  // do stuff...
});
```

Define your NUI actions for type safety:

```tsx
type NUIAction = "hud:Toggle" | "update:Health";
```

### Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

### License

who cares
