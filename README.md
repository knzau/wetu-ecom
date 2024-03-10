# E-Commerce App

This is a full-stack e-commerce application built with React, Strapi, and various other modern technologies. It provides a seamless shopping experience with features like secure checkout, user authentication, caching, responsiveness, and powerful search and filtering capabilities.
- **Live App**: https://wetu-frontend.onrender.com/ (initial load takes around 5 minutes);


## Features

-   **Secure Checkout**: Seamless integration with Stripe for safe and secure payments.
-   **User Authentication**: Robust authentication system powered by Clerk, allowing users to create accounts, log in, and manage their profiles.
-   **React Query with Caching**: Efficient data fetching and caching with React Query, ensuring lightning-fast load times and a smooth user experience.
-   **Fully Responsive**: Optimized for all screen sizes, ensuring a consistent and user-friendly experience across desktops, tablets, and mobile devices.
-   **Product Search**: Powerful search functionality that allows users to quickly find the products they need.
-   **Product Filtering**: Advanced filtering options that enable users to narrow down their search results based on various criteria such as price, category, brand, and more.
-   **User Profile**: A dedicated profile page where users can view and manage their orders, update personal information, and more.
-   **Optimized Images**: Integration with Cloudinary for optimized image delivery, ensuring fast load times and a better user experience.

## Technologies Used

-   **Frontend**: React, React Router, React Query, Sass, Redux
-   **Backend**: Strapi (Headless CMS)
-   **Authentication**: Clerk
-   **Payments**: Stripe
-   **Caching**: React Query
-   **Deployment**: Render (Frontend), Render (Backend), DB (Render)

  ![screencapture-wetu-frontend-onrender-2024-03-10-02_56_03](https://github.com/knzau/wetu-ecom/assets/57972610/2e76ab14-7876-4837-8aed-50046bd8b577)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-repo-url.git`
2. Install dependencies for both the frontend and backend:
    - Frontend: `cd client && yarn install`
    - Backend: `cd api && yarn install`
3. Set up environment variables for Stripe, Clerk, and any other required services.
4. Start the development servers:
    - Frontend: `yarn start`
    - Backend: `yarn develop`
5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request. Make sure to follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to Oleh Chabanov (https://www.behance.net/shamandesign) for the figma design.
