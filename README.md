My Supermarket List

Description
My Supermarket List is a web application that allows users to create and manage shopping lists easily and intuitively. Users can select products from different categories, specify the quantity and unit type for each product, and generate a printable or downloadable summary of their shopping list.

Features
Product Selection: Browse and select products from various categories such as Food, Beverages, Hygiene, Cleaning, and more.
Quick Search: Use the search bar to quickly find the products you need.

Quantity and Unit Management: Specify the quantity and unit type for each selected product.
Shopping List Summary: Generate a summary of the selected products that you can print or download.
Intuitive Interface: Modern and responsive design using React and Material-UI.

Local Storage: Automatically save your shopping list in the browser's local storage.

Technologies Used
React: JavaScript library for building interactive user interfaces.
Material-UI (@mui): UI component library for React.
Vite: Frontend development tool for fast and efficient builds.
ESLint: Static code analysis tool to maintain code quality.
@react-pdf/renderer: Library for generating PDF documents in React.

Project Structure

my-supermarket-list/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   └── images/
├── README.md
├── src/
│   ├── App.jsx
│   ├── App.module.css
│   ├── controllers/
│   │   ├── CategoryController.js
│   │   └── ProductController.js
│   ├── index.css
│   ├── main.jsx
│   ├── models/
│   │   ├── CategoryModel.js
│   │   └── ProductModel.js
│   ├── utils/
│   │   └── imageUtils.js
│   └── views/
│       ├── CategoryMenu.jsx
│       ├── CategoryMenu.module.css
│       ├── handlePrint.js
│       ├── ProductItem.jsx
│       ├── ProductItem.module.css
│       ├── ProductList.jsx
│       ├── ProductList.module.css
│       ├── ProductSummary.jsx
│       └── ProductSummary.module.css
└── vite.config.js

Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher)
Installation
Clone the repository:

git clone https://github.com/your-username/my-supermarket-list.git
cd my-supermarket-list

Install dependencies:
npm install

Usage
Development Mode
To start the application in development mode with live reloading:

npm run dev
The application will run on http://localhost:3000 or the port assigned by Vite. You can access it from your browser.

Build for Production
To generate an optimized version of the application:

npm run build
The build files will be generated in the dist directory.

Preview the Build
To preview the application after building it:
npm run preview


Available Scripts
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run preview: Previews the built application.
npm run lint: Runs ESLint to analyze the code.

Main Features
Category Navigation
Open the side menu by clicking the menu icon in the top left corner.
Select a category to filter the displayed products.
Product Search
Use the search bar at the top to find products by name.
Product Selection and Configuration
Click on a product to view details and adjust the quantity and unit type.
Changes are saved automatically and reflected in the summary.

Shopping List Summary
Click the "Summary" button to view all selected products.
From the summary, you can print or download the shopping list.
The "Summary" shows the quantity and unit of each selected product.

Reset the List
In the side menu, there is an option to reset all products to their initial values.
Resetting clears the selections saved in local storage.

Customization
Add New Products: You can add more products by editing the src/models/ProductModel.js file.
Modify Categories: Categories can be adjusted in the src/models/CategoryModel.js file.
Custom Styles: Styles are managed with CSS modules and can be modified in the .module.css files in the src/views directory.
Contribution
If you want to contribute to the project:

Fork the repository.
Create a branch for your new feature (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push your changes to your fork (git push origin feature/new-feature).
Open a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For questions or suggestions, you can contact me at pmmachadov@gmail.com

Thank you for using My Supermarket List! We hope this application makes your shopping list creation experience easier.