import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNetworkStatus } from '../../../hooks/useNetworkStatus';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, logout } from '../../../redux/slices/authSlice'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);
  const isOnline = useNetworkStatus();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // 🧠 Logout handler
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {/* Header Row (Status + Logout) */}
      <View style={styles.headerRow}>
        <View
          style={[
            styles.statusContainer,
            { backgroundColor: isOnline ? '#0E8F4B' : '#B71C1C' },
          ]}
        >
          <Text style={styles.statusText}>
            {isOnline ? '🟢 Online' : '🔴 Offline'}
          </Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.8}>
          <Ionicons name="log-out-outline" size={22} color="#FF5252" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Loader or Error */}
      {loading && <ActivityIndicator size="large" color="#00C6FB" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* User list */}
      {!loading && !error && (
        <FlatList
          data={users?.data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: moderateScale(20) }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('DetailScreen', { user: item })}
              activeOpacity={0.8}
            >
              <View style={styles.row}>
                <Ionicons name="person-circle-outline" size={30} color="#00C6FB" />
                <View style={{ marginLeft: moderateScale(10) }}>
                  <Text style={styles.username}>{item?.username}</Text>
                  <Text style={styles.email}>{item?.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181928', // Dark theme background
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(20),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  statusContainer: {
    alignSelf: 'flex-start',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(20),
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: moderateScale(13),
    textTransform: 'uppercase',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222338',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  logoutText: {
    color: '#FF5252',
    marginLeft: moderateScale(4),
    fontWeight: '600',
    fontSize: moderateScale(13),
  },
  card: {
    backgroundColor: '#222338',
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(12),
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  email: {
    color: '#919EAB',
    fontSize: moderateScale(13),
    marginTop: moderateScale(2),
  },
  errorText: {
    color: '#FF5252',
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
});
