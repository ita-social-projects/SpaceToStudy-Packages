# SpaceToStudy-Packages

This monorepo manages multiple packages (components, utils, and styles) using Lerna for dependency management and Webpack for bundling and optimization.

## Project structure

<ul>
  <li>packages - Monorepo root folder containing all packages
    <ul>
      <li>/components - Contains reusable UI components
        <ul>
          <li>/__tests__ - Unit tests for components</li>
          <li>/lib - Source code for all components</li>
          <li>package.json - Configuration for the components package</li>
        </ul>
      </li>
      <li>/styles - Contains shared styles and SCSS utilities
        <ul>
          <li>/lib - Source code for styles (SCSS/CSS files)</li>
          <li>package.json - Configuration for the styles package</li>
        </ul>
      </li>
      <li>/utils - Shared utility functions for components and other packages
        <ul>
          <li>/__tests__ - Unit tests for utility functions</li>
          <li>/lib - Source code for utility functions</li>
          <li>package.json - Configuration for the utils package</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

## Installation

1. **Clone the repository:**

   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**

   npm install

## Adding a new package

    npx lerna create <package-name>

## Adding a dependency to a package

    cd packages/<package-name>
    npm install <dependency-name>

## Testing components locally in another repo

    cd packages/components
    npm link

    cd another/repo
    npm link <components>
