import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function FloatingLabelInput({
    label,
    containerStyle,
    labelColor = "#919EAB",
    error,
    surfaceColor,
    ...props
}) {

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.labelWrap, { backgroundColor: "black" }]}>
                <View style={[styles.labelMask]} />
                <Text style={[styles.labelText, { color: labelColor }]}>
                    {label}
                </Text>
            </View>
            <TextInput
                {...props}
                placeholder={props.placeholder}
                placeholderTextColor="#919EAB"
                onFocus={(e) => {
                    setIsFocused(true);
                    props.onFocus?.(e);
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    props.onBlur?.(e);
                }}
                style={[styles.input, error && { borderColor: "#FF5630" }]} // ← red border on error
            />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: moderateScale(8),
        width: "100%",
    },
    labelWrap: {
        position: "absolute",
        top: -moderateScale(11),
        left: moderateScale(14),
        height: moderateScale(20),
        justifyContent: "center",
        zIndex: 1,
    },
    labelMask: {
        position: "absolute",
        left: 0,
        right: 0,
        top: moderateScale(6), // thin strip to cover the input border under text
        height: moderateScale(2),
        borderRadius: 2,
    },
    labelText: {
        paddingHorizontal: moderateScale(4),
        fontSize: moderateScale(12),
        color: "#919EAB",
        fontFamily: "DM-Sans-SemiBold",
    },

    input: {
        height: moderateScale(54),
        paddingHorizontal: moderateScale(14),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: "rgba(145, 158, 171, 0.2)",
        color: "#fff",
        fontFamily: "DM-Sans-Regular",
    },
    error: {
        marginTop: moderateScale(6),
        color: "#FF5630",
        fontSize: moderateScale(12),
        fontFamily: "DM-Sans-Regular",
    },
});
