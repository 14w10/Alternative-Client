# Alternative Client for Reddit

This project is a web app designed to fetch all posts and comments from a Reddit page and display them using the **MUI** theme and **React** framework.

## Design Decisions

This project is built using **TypeScript** and **React** to leverage type safety and server-side rendering, ensuring a scalable and efficient development experience.

### Key Design Elements

- **Router**: Utilizes **`react-router-dom`** for configuring routes, navigation, and page reloading.
- **Material UI Component**: Uses the **`MUI`** package as the primary UI library to display posts and comments.
- **Component-based Structure**: Each feature is implemented as an independent component (`Post`, `Comment`, `Layout`).
- **Error Handling, Searching, and Loading**: Includes an error handler, a search bar for navigation, and a spinner to indicate loading states.
- **API Service Layer**: A service layer (`api.ts`) fetches posts and comments from Reddit using the **`Axios`** package.

### Key Packages

- **`react`**: Core library for building the React app.
- **`typescript`**: Adds static typing to JavaScript, enhancing code quality.
- **`axios`**: For making HTTP requests to fetch data from Reddit.
- **`@mui/icons-material`**: Provides Material UI icons for UI enhancement.
- **`@mui/material`**: Main Material UI package for components and theming.
- **`react-router-dom`**: For handling routing in the application.
- **`he`**: Used to decode HTML entities.

## Challenges and Solutions

### UI Design

Initially, the website used basic CSS for styling, resulting in an unattractive design. After researching, I found the **Material UI** library, which greatly improved the UI design.

### Search Bar

At first, the app could only fetch data from the default subreddit (`all`). To provide users with more flexibility, I implemented a **search bar** that allows easy navigation to any subreddit by simply entering the subreddit name.

### Title Display

Posts and comments initially displayed encoded characters like `&amp` in their titles because the data fetched from Reddit's JSON was in **HTML format**. To solve this, I used the **`he`** package to decode the HTML content properly.

### Markdown Display in Comments

Markdown comments were initially displayed incorrectly, showing raw HTML elements like `<div class='md'>`. I first tried using the **`marked`** package to solve this issue, but it did not handle certain elements like titles (`#`), subtitles (`##`, `###`), and unordered lists (`-`) properly. I realized that the comments were also in **HTML format** and needed decoding, similar to the titles. I resolved this issue by using the **`he`** package to decode the comments as well.

### Picture Display in Posts and Comments

Most Reddit posts include images, but initially, they were not being fetched or displayed. Upon reviewing the JSON data, I found that image sources were located in `post.preview.images`. However, when using the **`CardMedia`** component from **`MUI`** to display these images, they appeared broken or contained alt text. The root cause was that the source URL was also encoded in **HTML format**, which required decoding. Again, I used the **`he`** package to decode the URLs, and the images were then displayed correctly.

### Error Handler

Initially, error handling involved a button that redirected users back to the home page when an invalid subreddit was entered. However, this button did not reliably reload the page. To address this, I replaced the button with a **timer** that automatically redirects users back to the home page after 3 seconds, ensuring a smoother experience without manual interaction.
