import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const COLORS =
{
    primary: { bg: "#00C6FB", text: "#FFFFFF", border: "#00C6FB" },
    warning: { bg: "#FFAB00", text: "#1C252E", border: "#FFAB00" },
    error: { bg: "#FF5630", text: "#FFFFFF", border: "#FF5630" },
    light: { bg: "#FFFFFF", text: "#1C252E", border: "#FFFFFF" },
};

export default function Button({
    title,
    type = "primary",
    height,
    onPress,
    loading,
    disabled,
    style,
}) {
    const { bg, text, border } = COLORS[type];

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    height: height ?? moderateScale(48),
                    backgroundColor: bg,
                    borderColor: border,
                },
                disabled && { opacity: 0.6 },
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={text} size={28} />
            ) : (
                <Text style={[styles.text, { color: text }]} type="button">
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: moderateScale(8),
        alignItems: "center",
        justifyContent: "center",
        marginTop: moderateScale(8),
        width: "100%",
        borderWidth: 1,
    },
    text: {
        fontWeight: "600",
    },
});
