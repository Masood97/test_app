import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { moderateScale } from "react-native-size-matters";

export default function DetailsScreen() {
  const route = useRoute();
  const { user } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {/* Profile Image */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&background=0D8ABC&color=fff`,
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.row}>
          <Ionicons name="mail-outline" size={20} color="#00C6FB" />
          <Text style={styles.value}>{user.email}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={20} color="#00C6FB" />
          <Text style={styles.value}>{user.phone}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="globe-outline" size={20} color="#00C6FB" />
          <Text style={styles.value}>{user.website}</Text>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.detailText}>
          {user.address?.suite}, {user.address?.street}
        </Text>
        <Text style={styles.detailText}>
          {user.address?.city} - {user.address?.zipcode}
        </Text>
      </View>

      {/* Company Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <Text style={styles.detailText}>{user.company?.name}</Text>
        <Text style={styles.detailText}>"{user.company?.catchPhrase}"</Text>
        <Text style={styles.detailText}>{user.company?.bs}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181928", // your dark theme color
  },
  scroll: {
    padding: moderateScale(20),
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: moderateScale(30),
  },
  avatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 50,
    marginBottom: moderateScale(10),
    borderWidth: 2,
    borderColor: "#00C6FB",
  },
  name: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontWeight: "600",
  },
  username: {
    color: "#919EAB",
    fontSize: moderateScale(14),
  },
  infoCard: {
    backgroundColor: "#222338",
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
    marginBottom: moderateScale(20),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(10),
  },
  value: {
    color: "#FFFFFF",
    marginLeft: moderateScale(10),
    fontSize: moderateScale(14),
  },
  section: {
    marginBottom: moderateScale(20),
    backgroundColor: "#222338",
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
  },
  sectionTitle: {
    color: "#00C6FB",
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginBottom: moderateScale(8),
  },
  detailText: {
    color: "#E0E0E0",
    fontSize: moderateScale(14),
    marginBottom: moderateScale(4),
  },
});
