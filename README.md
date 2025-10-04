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
