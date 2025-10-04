import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,  
    whitelist:["users"],
    blacklist: [],
};

export default persistConfig;