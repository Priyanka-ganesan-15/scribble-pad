# Scribbler
<img width="1438" alt="image" src="https://github.com/Priyanka-ganesan-15/scribble-pad/assets/77360232/48210383-7756-4479-8466-ec5aa544343d">
<img width="1438" alt="image" src="https://github.com/Priyanka-ganesan-15/scribble-pad/assets/77360232/0715019d-94c3-4520-bba3-cab719ade585">



Link to Scribe for a walk through! : (https://scribehow.com/shared/Organizing_Notes_with_Labels_in_Note-taking_App__2IBJ--neTYStAmkOqyvyrw)

<<<<<<< HEAD
Welcome to Scribble, created with ReactJS and Firebase.
=======
Wecome to scribble-pad, created with ReactJS and Firebase.
>>>>>>> 9ab112d94c539d76de73ca8ce995fb9183ffccde


## Key Features

- User Authentication --> Using Firebase
- Create, edit, delete, and archive notes
- Search notes
- Filter notes by label name
- Pin and Unpin notes
- Add, update, and delete multiple labels
- Toggle Layout
- Change note background
- Fully responsive design

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)

## Getting Started

### Project setup

```bash
# clone repo
git clone https://github.com/Priyanka-ganesan-15/scribble-pad.git

# changing directory
cd scribbler

# installing dependencies
npm install
```

### Firebase Setup

1. Create a Firebase project:
   - Go to Firebase → Get Started → Add project
2. Register your app:
   - Go to Project overview → Choose </> (Web App)
3. Enable Google Authentication:
   - Go to Authentication → Get Started → Sign-in method → Enable Google
4. Enable Firestore:
   - Go to Firestore Database → Create database
5. Create .env File:
   - Create a .env file in project's root
   - Go to Project settings → General → Your apps → SDK setup and configuration → Config
   - Paste code below in .env and provide your keys found in Config

```bash
REACT_APP_API_KEY={apiKey}
REACT_APP_AUTH_DOMAIN={authDomain}
REACT_APP_PROJECT_ID={projectId}
REACT_APP_STORAGE_BUCKET={storageBucket}
REACT_APP_MESSAGING_SENDER_ID={senderId}
REACT_APP_APP_ID={appId}
```

### Start the application

```bash
# starting the server
npm start

# testing with Jest
npm run test
```

## License

Scribble is [MIT licensed](./LICENSE).
