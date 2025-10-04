# 🪶 React Native User App

A modern React Native (CLI) app built with **Redux Toolkit**, **Redux Persist**, **Axios**, and **React Navigation**, showcasing best practices in authentication, API integration, and state management.

---

## 🚀 Features

✅ **Authentication**
- Email and password validation on login
- Redux Toolkit for managing auth state
- Redux Persist for session persistence (user stays logged in after restart)

✅ **Networking**
- Axios for REST API calls
- Custom hook `useNetworkStatus` using `@react-native-community/netinfo` to detect online/offline status
- Displays real-time connection status on Home Screen

✅ **User Management**
- Fetches users via API using async thunk
- Lists all users in a modern dark-themed FlatList
- Navigate to Detail Screen to view selected user info

✅ **Logout**
- Clears persisted state and navigates back to Login Screen

✅ **UI & Navigation**
- Built with React Navigation (Native Stack + Bottom Tabs ready)
- Uses dark theme with `#181928` background
- Clean and responsive UI using `react-native-size-matters`
- Icons powered by `react-native-vector-icons`

---

## 🧠 Tech Stack

| Category | Library |
|-----------|----------|
| Core | React Native CLI (v0.81.4) |
| State Management | Redux Toolkit, Redux Persist |
| API Calls | Axios |
| Navigation | React Navigation (v7) |
| Storage | Async Storage |
| Network | @react-native-community/netinfo |
| Icons | react-native-vector-icons |
| UI Scaling | react-native-size-matters |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Masood97/test_app.git
cd test_app
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Install pods (for iOS only)
```bash
cd ios && pod install && cd ..
```

### 4️⃣ Run the app
```bash
cd ios && pod install && cd ..
```

### 5️⃣ Start Metro bundler (if not already running)
```bash
npx react-native start
```

## 📁 Folder Structure
```bash
src/
 ├─ api/
 ├─ assets/
 ├─ components/
 │   └─ Button/
 │       └─ index.jsx
 ├─ hooks/
 │   └─ useNetworkStatus.js
 ├─ navigation/
 │   ├─ AppNavigator.jsx
 │   ├─ AuthNavigator.jsx
 │   └─ index.js
 ├─ redux/
 │   ├─ apiHelpers/
 │   │   └─ index.js
 │   ├─ featureActions/
 │   │   └─ index.js
 │   ├─ persistConfig/
 │   │   └─ index.js
 │   ├─ slices/
 │   │   └─ authSlice.js
 │   └─ store/
 │       ├─ store.js
 │       └─ index.js
 ├─ screens/
 │   ├─ Auth/
 │   │   └─ Login/
 │   │       └─ index.jsx
 │   └─ Main/
 │       ├─ DetailScreen/
 │       │   └─ index.jsx
 │       └─ HomeScreen/
 │           └─ index.jsx
 ├─ theme/
 └─ utils/
```
 ---

## 🔐 Authentication Flow

1️⃣ User opens app → redirected to **Login Screen**  
2️⃣ Enters valid email & password → validation handled locally  
3️⃣ On success → navigates to **Home Screen**  
4️⃣ **Home Screen**  
   - Fetches user list using Redux Thunk (`fetchUsers`)  
   - Displays network status (Online/Offline)  
   - Renders users in FlatList  
5️⃣ On tapping a user → navigates to **Detail Screen**  
6️⃣ Press Logout → clears persisted state → navigates back to **Login**  

---

## 🧩 Custom Hook: useNetworkStatus

```js
import NetInfo from '@react-native-community/netinfo';
import { useState, useEffect } from 'react';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return isOnline;
};
```
---
### 🧰 Dependencies
```bash
"@react-native-async-storage/async-storage": "^2.2.0",
"@react-native-community/netinfo": "^11.4.1",
"@react-navigation/native": "^7.1.17",
"@react-navigation/native-stack": "^7.3.26",
"@reduxjs/toolkit": "^2.9.0",
"axios": "^1.12.2",
"react": "19.1.0",
"react-native": "0.81.4",
"react-native-gesture-handler": "^2.28.0",
"react-native-safe-area-context": "^5.5.2",
"react-native-screens": "^4.16.0",
"react-native-size-matters": "^0.4.2",
"react-native-vector-icons": "^10.3.0",
"react-redux": "^9.2.0",
"redux-persist": "^6.0.0"
```
---
## 🧑‍💻 Author

**Masood Ahmed**  
React Native Developer (2.5+ years experience)  
Passionate about clean architecture, state management, and performance optimization.  

🔗 [GitHub Profile](https://github.com/Masood97)
---

### 🏁 License

This project is licensed under the MIT License — feel free to use and modify.
