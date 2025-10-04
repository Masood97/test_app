import React, { useEffect, useState } from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import Button from "../../../components/Button";
import { moderateScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { signin } from "../../../redux/slices/authSlice";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    console.log("screen loaded")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});



    const validateEmail = (value) => {
        if (!value || value.trim() === "") {
            return "Email is required";
        } else if (
            !value.includes("@") ||
            value.startsWith("@") ||
            value.endsWith("@") ||
            !value.includes(".") ||
            value.indexOf("@") > value.lastIndexOf(".") - 1
        ) {
            return "Please enter a valid email address";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (!value || value.trim() === "") {
            return "Password is required";
        } else if (value.length < 6) {
            return "Password must be at least 6 characters";
        }
        return "";
    };

    const handleChangeEmail = (text) => {
        setEmail(text);
        const error = validateEmail(text);
        setErrors((prev) => ({ ...prev, email: error }));
    };

    const handleChangePassword = (text) => {
        setPassword(text);
        const error = validatePassword(text);
        setErrors((prev) => ({ ...prev, password: error }));
    };

    const handleSignin = async () => {
        if (loading) return;
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        if (emailError || passwordError) {
            // setErrors({ email: emailError, password: passwordError });
            return;
        }
        setLoading(true);
        try {
            await dispatch(signin(email));
        } catch (error) {
            console.log("🚀 ~ handleSignin ~ error:", error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
            >
                {/* Title */}
                <Text style={styles.title}>
                    Sign in to your account
                </Text>

                {/* Email */}
                <View style={{ marginBottom: moderateScale(24) }}>
                    <Text style={{ color: "white", marginBottom: moderateScale(8), fontWeight: "400", fontSize: 14 }}>Email:</Text>
                    <TextInput
                        label="Email"
                        placeholder="user@example.com"
                        value={email}
                        onChangeText={handleChangeEmail}
                        keyboardType="email-address"
                        style={styles?.input}
                    />
                    <Text style={styles.error}>{errors?.email}</Text>
                </View>

                <View
                    style={{ marginBottom: moderateScale(24), position: "relative" }}
                >
                    <View
                        style={{ marginBottom: moderateScale(24), position: "relative" }}
                    >
                        <Text style={{ color: "white", marginBottom: moderateScale(8), fontWeight: "400", fontSize: 14 }}>Password:</Text>
                        <TextInput
                            label="Password"
                            placeholder="minimum 6 characters"
                            value={password}
                            onChangeText={handleChangePassword}
                            secureTextEntry={!showPassword}
                            style={styles?.input}
                        />
                        <Text style={styles.error}>{errors?.password}</Text>
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword((prev) => !prev)}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name={showPassword ? "eye-off-outline" : "eye-outline"}
                                size={22}
                                color="#919EAB"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Submit */}


                <Button
                    title={loading ? 'Loading...!!!' : "Sign in"}
                    onPress={handleSignin}
                    loading={loading}
                    disabled={loading}
                />
            </ScrollView>
            {/* )}
                </Formik>
            </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#181928" },
    scroll: {
        paddingHorizontal: moderateScale(24),
        paddingBottom: moderateScale(60),
        paddingTop: moderateScale(50),
    },
    title: {
        textAlign: "center",
        marginBottom: moderateScale(18),
        color: "#FFFFFF",
        fontSize: moderateScale(16),
        fontWeight: "600",

    },
    subtitle: {
        textAlign: "center",
        marginBottom: moderateScale(40),
        color: "#919EAB",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: moderateScale(10),
    },

    error: {
        color: "#FF4D4F",
        marginTop: moderateScale(1),
        fontSize: moderateScale(12),
        alignSelf: "flex-start",
    },

    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: moderateScale(24),
    },
    divider: {
        flex: 1,
        height: 1,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "rgba(145, 158, 171, 0.2)",
    },
    orText: {
        marginHorizontal: moderateScale(10),
        fontWeight: "600",
        textTransform: "uppercase",
    },
    eyeIcon: {
        position: "absolute",
        right: moderateScale(16),
        top: moderateScale(40),
    },
    icon: {
        width: moderateScale(22),
        height: moderateScale(20),
        resizeMode: "contain",
    },
    forgotPassword: {
        textAlign: "right",
        color: "#FFFFFF",
        marginBottom: moderateScale(8),
    },
    input: {
        height: moderateScale(54),
        paddingHorizontal: moderateScale(14),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: "rgba(145, 158, 171, 0.2)",
        color: "#fff",
        fontFamily: "DM-Sans-Regular",
    }
});
