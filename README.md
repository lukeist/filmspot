# FilmSpot - Movie Tracking Web Application

Introducing my visually stunning movie app that transforms how you manage movie recommendations. Search for movies by title, bookmark them, and review at your convenience.

I created this app from scratch, using NextJS and Chakra UI to build a functional and visually appealing app. The app uses a free RapidAPI movies endpoint to search for movies by title, and bookmarked movies are stored in local storage.

Optional features include moving bookmarks to a 'watched' section and removing movies from your saved list. The app seamlessly works on desktop and mobile browsers.

Take control of your movie recommendations with this app. Try it now and you won't regret it!

**Link to FilmSpot:** https://filmspot.vercel.app/

**Link to the repo:** https://github.com/hiluan/filmspot

## Interactions

Here's what you can expect from your interaction with my app:

![alt tag](https://i.ibb.co/V97MYYg/filmspot.gif)

1. As soon as you land on the front page, I'll introduce you to the latest movie trailers. This way, you can easily find the newest and most exciting releases and add them to your bookmarked list for future viewing.

2. To find a specific movie, my search bar is prominently placed on the screen in a welcoming color that's hard to miss. It's my way of saying "Hey, click on me, let me help you find what you're looking for!"

3. After submitting your search, my search bar slides up like a stage curtain to reveal 10 results, each displayed on its own movie card. To keep you focused on your search results, I remove the trailer section from view.

4. Each movie card has a movie poster, the movie's name, and a star icon button that lets you save the movie to your bookmarked list. It's a simple and elegant design that follows the "less is more" philosophy. When you click on the star icon, it turns golden and a notification pops up to let you know that the movie has been added to your list. If you've already watched a movie, it will be covered with a thin layer of black to help you quickly identify which movies you've already seen.

5. My navbar has two sides: the left side has my logo, which takes you back to the trailers when clicked, and the right side has four buttons. The star icon button opens a sidebar that displays your bookmarked movies, the view off icon button opens a sidebar that shows your watched movies, the sun/moon icon button toggles the light/dark mode, and the last button opens your user profile.

6. When you open a sidebar, a blurry layer covers the rest of the screen to create a seamless interaction. The bookmarked movie sidebar lets you remove a movie from your list or move it to your watched list, and the watched movie sidebar lets you remove a movie from your list. Each time you move or remove a movie, the remaining cards slide up smoothly to maintain a clean and organized design.

7. My app is perfectly responsive, so you can enjoy it on any device, big or small. Whether you're using a desktop or a mobile device, my app will adapt to your screen size for an optimal viewing experience.

## Features

- **Efficient movie search** using The Movie Database (TMDB) API.
- **Detailed movie information page** with all essential details like ratings, release date, and plot summary.
- **Bookmarked List** and **Watched List** to manage your personal movie collection with the ability to mark movies as bookmarked/unbookmarked and watched/unwatched.
- **Toggle** between dark mode and light mode for comfortable viewing.
- **Chakra UI Sidebar** that you can toggle on/off for easy navigation and organization.
- **Fully responsive design** with engaging animated effects.
- **Deployed on Vercel** for seamless use.

  <!-- ![alt tag](https://i.postimg.cc/QxJ12CQL/hiluan-datanexus-admin-dashboard-breakdown-piechart.jpg)
  _Breakdown Pie Chart_ -->

# How It's Made:

**Technologies used:**

1. **Front-end**:

- Next.JS: Used for front-end development.
- Chakra UI: Used for styling.

2. **Back-end**:

- The Movie Database (TMDB) API: used for querying movie database.

## Navigation:

1. **Navbar**

   The Navbar component is a fixed navigation bar that appears at the top of your screen. It contains buttons that allow you to open the bookmarked movies list, watched movies list, toggle the color mode, and access your profile. The Navbar also includes a logo that resets the movie list to its initial state when clicked.

2. **Sidebar**

   The Sidebar component is a drawer that opens from the right side of your screen when triggered by the Navbar. It displays either the bookmarked or watched movies list, depending on which button you clicked in the Navbar. The Sidebar allows you to browse, manage, and interact with your bookmarked or watched movies effortlessly.

3. **Home Page**

   The Home component makes use of the custom hooks and other components to create the overall application structure and functionality. It manages the state of the displayed movies, handles user interactions like searching for movies, marking movies as watched, and managing bookmarks and watched lists. The app also makes use of Chakra UI components and hooks, such as useMediaQuery and useToast, to create a responsive and visually appealing interface.

   The movie app consists of several components that work together to provide a user-friendly interface and a smooth user experience. Let's discuss the components and their functionalities, as well as the custom hooks used in the app.

   **Custom Hooks**: The app uses two custom hooks, `useBookmarks` and `useWatched`, to manage the state of bookmarked and watched movies, respectively.

   **`useBookmarks`**: This hook manages the state of bookmarked movies. It stores the list of bookmarked movies in the bookmarkedMovies state and synchronizes it with the local storage. The hook provides functions addBookmark and removeBookmark to add and remove movies from the bookmarked list, respectively. It also displays toasts to notify users when a movie is added or removed from the bookmarks.

   **`useWatched`**: This hook manages the state of watched movies. It stores the list of watched movies in the watchedMovies state and synchronizes it with the local storage. The hook provides functions addWatched and removeWatched to add and remove movies from the watched list, respectively.

   **`useMovieActions`**: This hook is a custom hook that handles state and logic related to the Home component, making it more modular and easier to maintain. It manages movie data, bookmarks, watched movies, and the visibility of bookmarked and watched movie lists. It provides utility functions for adding, removing, checking bookmarks and watched movies, searching for movies, marking them as watched, and opening/closing bookmarked and watched lists. This separation of logic and state management from the presentation layer results in cleaner and more maintainable code, improving reusability.

   Custom hooks are used in the app to separate the concerns of managing bookmarked and watched movies from the main component, making the code more modular and easier to maintain. Each hook is focused on a specific functionality, promoting a clean and modular design. This separation of concerns allows for easy locating and addressing of any issues, and implementation of new features without impacting unrelated parts of the application. The hooks also make use of the React useState and useEffect hooks to manage state and side effects, such as synchronizing with local storage.

   **Main Components**

   **`MovieList`** component is an important part of the application, as it is used in multiple places throughout the app. It takes a list of movies and displays them in a responsive grid layout using SimpleGrid from the Chakra UI library. Each movie is rendered as a MovieCard component, which includes relevant information and interaction buttons. The `MovieList` component is customizable with various props, allowing it to be reused in different contexts.

   **`Trailers`** component adds an engaging background video to the main page of the application. This component is designed to immediately catch the user's attention, making the page more interesting and visually appealing. The trailer is set to autoplay and loop, creating a seamless and immersive experience. However, once the user submits their search, the trailer disappears to avoid distractions and to focus on the search results.

4. **Responsiveness**

   and **smooth animated effects** are crucial for providing a pleasant user experience on various devices. The app uses CSS media queries to adjust the size and position of the trailer based on the aspect ratio and screen size. The app also incorporates smooth animations for entering and exiting elements using CSS keyframes, providing visual feedback and creating a polished user interface.

5. **Light/Dark Modes**

   The app supports both light and dark modes, making it adaptable to the user's preferences. The `ChakraProvider` and `ColorModeScript` components from the Chakra UI library are used to set the initial color mode and to allow switching between modes. The theme object is used to configure the color mode settings and is passed to the `ChakraProvider`.

## Optimizations

1. CSS Animations: I utilized CSS animations for entrance and exit effects to provide a smooth and visually appealing user experience.

2. Media Queries: I incorporated media queries to adjust the design based on the screen size, ensuring a responsive and visually pleasing layout on different devices.

3. useState and useEffect hooks: I used React hooks to manage local state and side effects, such as managing the scroll effect for the Navbar background and adjusting the position of the search bar based on movie results.

4. Lazy loading: I imported the Image component from the Next.js library to enable automatic lazy loading for the images, which helps improve the app's loading time.

5. Component modularity: I structured the app with reusable components, making it easier to maintain and scale.

6. Conditional rendering: I implemented conditional rendering to display content depending on the current state, such as showing the removal animation only when a movie is being removed.

These optimizations contribute to a more efficient and user-friendly app experience.

## Lessons Learned:

Using Chakra UI for building your app can teach you how to improve the UI design, code reusability, styling simplicity, and accessibility. With Chakra UI's pre-built components and customization options, you can create a visually appealing, consistent, and accessible user interface. This can save you time and effort while improving the user experience.

# Other Examples:

Take a look at these examples that I have in my portfolio:

**https://nurbier.vercel.app - Fullstack Ecommerce WebApp** https://github.com/hiluan/nurbier-ecommerce-webapp-frontend

**https://hiluan.dev - Portfolio Page** https://github.com/hiluan/hiluan-frontend

**https://datanexus.vercel.app - Full Stack Data Management Application** https://github.com/hiluan/datanexus-fullstack-data-management

**https://skizzenhaus.com - Full Stack AI Image Generator Application** https://github.com/hiluan/skizzenhaus-AI-image-generator-frontend

**https://starlite.netlify.app - Online Trading Platform** https://github.com/hiluan/starlite-frontend
