# Fitness Tracker

Click here for the live page: [https://fitness-tracker-jihad.netlify.app/]

Here are at least five or more bullet points mentioning different features and functionalities of my website:

# 1. Authentication and Authorization::
   - Utilizes PrivateRoute, TrainerRoute, and AdminRoute components to control access to various sections based on user roles (user, trainer, admin).Includes login and registration pages (/login, /register) for user authentication.

# 2. Dashboard Functionality:
   - Provides a comprehensive dashboard experience with various sections for different user roles (normal user, trainer, admin).Features functionalities like user profile management, activity logs, managing slots, members (for trainers), forums creation, adding new classes, managing subscribers, etc.

# 3. Password Visibility Toggle:
   - In the login and registration forms, there is an option for users to toggle the visibility of the password by clicking the eye icon, allowing them to see the password they are entering.
   there is also a toggole for go to login or register.

# 4. Error Handling and Alerts:
   - The website handles errors during the login and registration processes and displays error messages to the user. It also provides success alerts using the Swal (SweetAlert2) and react hot toast library.

# 5. Content and Interaction Sections:
   - Offers diverse sections for content consumption and interaction.Includes pages for the homepage, gallery, trainer details, class details, forums, blogs, and recommended classes.Allows users to view trainer details, book trainers, explore classes, engage in forums, and read blogs.

# 6. Role-Based Access Control (RBAC):
    Implements role-based access control mechanisms to restrict and permit access to specific routes and functionalities based on user roles (user, trainer, admin).Users with different roles have access to tailored functionalities and features within the application.

# 7. Error Handling and Page Not Found:
   Incorporates an ErrorPage component to handle routes that do not match any defined paths.Ensures a user-friendly experience by redirecting users to an error page when they attempt to access invalid routes or pages that don’t exist.

# 8. Private Routes:
   Some routes are protected and can only be accessed by authenticated users. The PrivateRoute component ensures that only authenticated users can access specific sections of the website.

# 9. JWT (JSON Web Tokens) Token-Based Authentication:
    When a user registers or logs into your website, the authentication process involves generating a JWT (JSON Web Token).After successful authentication, the JWT is issued to the user as a means of identifying and authenticating them for subsequent requests.The JWT is used as an authentication token, and it is included and stored in a secure client-side storage (local storage).The server checks the validity of the JWT for each protected endpoint or route to ensure that the user has the necessary permissions to access the resource.

These are the key features and functionalities of my website.