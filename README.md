# PCAT - Photo Catalog Application
PCAT is a dynamic photo catalog application built using Node.js, Express, MongoDB, and EJS template engine. This project demonstrates key aspects of modern web development, including CRUD operations, file uploads, pagination, and deployment in a cloud environment. Below are the core topics and technologies implemented throughout the project.

## Key Features and Technologies
1. Prettier - Code Formatting
To maintain consistent code style and readability across the project, Prettier is utilized for automated code formatting. This ensures clean, well-structured code that adheres to industry best practices.

2. Git & GitHub - Version Control
Version control is managed using Git and hosted on GitHub. All project changes are tracked with proper commits, ensuring clear documentation of development history. Contributions and version management are simplified using branching and pull requests.

3. Nodemon - Development Automation
During development, Nodemon is used to automatically restart the server upon detecting changes in the source files. This greatly enhances development speed and efficiency by eliminating the need for manual server restarts.

4. Static File Management
Static assets such as CSS files, JavaScript, and images are managed within the public directory and served through Express. These static resources are crucial for handling the visual and interactive aspects of the application.

5. Template Engine - EJS
EJS (Embedded JavaScript) is employed as the template engine for rendering dynamic HTML content. By separating logic from presentation, EJS facilitates a clean and maintainable user interface, making it easy to embed server-side data into client-side views.

6. Middleware - Express.js
Middleware functions are extensively utilized in the project to handle tasks such as parsing request bodies, handling file uploads, and overriding HTTP methods. Notable middlewares include:

express.urlencoded() for form data handling
express.json() for JSON body parsing
express.static() for serving static files
express-fileupload for managing file uploads
method-override for supporting HTTP PUT and DELETE methods in forms

7. Express.js - Server-Side Framework
Express.js is the backbone of the application, handling routing, middleware integration, and overall server-side logic. It provides a flexible and powerful platform for building the application's backend, enabling efficient request handling and resource management.

8. MongoDB - NoSQL Database
MongoDB is used as the primary database to store photo metadata and other related data. Its document-oriented structure provides flexibility in handling dynamic and unstructured data, making it ideal for this application.

9. Mongoose - MongoDB ORM
To interact with MongoDB, Mongoose is used for schema-based data modeling. It allows for defining data schemas and provides built-in methods to perform CRUD operations with ease. Validation and data relationship management are also handled seamlessly through Mongoose.

10. CRUD Operations - Create, Read, Update, Delete
PCAT implements full CRUD functionality:

Create: Users can upload new photos with associated titles and descriptions.
Read: Photos are displayed in a paginated view, and users can view individual photo details.
Update: Users can edit existing photo metadata.
Delete: Photos can be deleted, removing both the database entry and the corresponding image file from the server.

11. MVC Architecture
The project follows the Model-View-Controller (MVC) design pattern, ensuring a clean separation of concerns:

Model: Represents the data and business logic using Mongoose models.
View: Utilizes EJS templates to render dynamic content.
Controller: Handles user input and interacts with models to fetch and manipulate data.
12. Pagination
The photo listing page implements pagination to display content in an organized and user-friendly manner. This improves the performance and usability of the application when dealing with large datasets.

13. MongoDB Atlas - Cloud Database
The application uses MongoDB Atlas as a cloud-based database service, providing high availability, security, and scalability. This allows for seamless data management across different environments without the need for local database setup.

14. Render Deployment - Cloud Hosting
The application is deployed using Render, a cloud-based platform that simplifies the deployment of Node.js applications. Render automatically handles server management, ensuring that the application is accessible via the web with proper scaling and monitoring.

