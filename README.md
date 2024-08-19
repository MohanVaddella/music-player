# Music Player Application

## Frontend Assessment: Task Music Player UI

This is a responsive music player application built using React JS as part of a frontend assessment. The application interface is designed to match a given Figma design and is fully responsive, featuring music controls, a dynamic background gradient, and smooth animations.

## Design Link
- [Figma Design](https://www.figma.com/file/RtKhzEeeuD2FtRsg2dxSep/Front-end-Assessment?type=design&node-id=1-2&mode=design&t=zEkwOdYyaeNx0z7m-4)

## API Information
- [API Endpoint](https://cms.samespace.com/items/songs)
- The API returns different titles, artists, cover images, and durations, but the URL of every song will be the same.

## Features

1. **React JS**: The application is built using React JS.
2. **Design Matching**: The interface matches the provided Figma design closely.
3. **Responsiveness**: The application is responsive. On smaller screens, the player component becomes the main interface with a menu button to show the list of songs.
4. **REST API Integration**: The application uses REST API to load the list of songs.
5. **Dynamic Background Gradient**: The background gradient color changes according to the cover image of the currently playing song.
6. **Persistent Music Playback**: Music continues playing even if the user switches to another tab.
7. **Fluid and Interactive Interface**: The interface includes animations/transitions, such as list loading animations and background color change animations.
8. **Search Functionality**: Users can search for songs.
9. **Music Control**: Users can control the music with play/pause, next/previous buttons, and a seeker to control the song's playback.
10. **Tab Navigation**: Users can switch between tabs (e.g., "For You" and "Top Tracks").
11. **Deployment**: The application is deployable on platforms like Vercel or Netlify.

### Project Structure

- **src/**: Contains all the source code files.
  - **components/**: Reusable React components such as Player, SongList, Header, etc.
  - **styles/**: CSS files for styling the components.
  - **utils/**: Utility functions for common tasks like API calls.
  - **App.js**: The main application component that contains routing and main logic.
  - **index.js**: The entry point of the application.

## Installation and Running the Application

### Prerequisites

- Node.js and npm must be installed on your system.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MohanVaddella/music-player.git

2. **Navigate to the Project Directory**
   ```bash
   cd music-player

3. **Install Dependencies**
   ```bash
   npm install

### Running the Application

1. **Start the Development Server**
   ```bash
   npm start

This will start the application on `http://localhost:3000/`.

2. **Build the Application for Production**
   ```bash
   npm run build

This will create an optimized production `build` in the build folder.

### Deployment

To deploy the application on Vercel or Netlify:

- **Vercel**: Push the repository to GitHub, and link it to a new Vercel project.
  
- **Netlify**: Push the repository to GitHub, and link it to a new Netlify project.



