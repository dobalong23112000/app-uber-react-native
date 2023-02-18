import React, { useEffect, useState, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../../context/AuthContext";


export function Login({ navigation }) {
    const { setAuthData, authData } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        if (email && password) {
            setIsLogin(false);
        } else {
            setIsLogin(true)
        }
    }, [email, password])


    return (
        <>
            <View style={styles.container} >
                <Text style={styles.headerText}>Login</Text>
                {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <Text style={{ position: "absolute", left: 20, top: 10 }}>
                        <FontAwesome name="user" size={25} color="black" />
                    </Text>
                </View>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Mật khẩu"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <Text style={{ position: "absolute", left: 20, top: 10 }}>
                        <FontAwesome name="lock" size={25} />
                    </Text>
                    <TouchableOpacity style={{ position: "absolute", right: 12, top: 10 }}>
                        <FontAwesome name="eye-slash" size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.loginBtn, { backgroundColor: isLogin ? "#b3dbff" : "blue" }]} disabled={isLogin} onPress={() =>
                    setAuthData(true)
                }>
                    <Text style={styles.loginText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginBtn, { backgroundColor: "blue" }]} disabled={isLogin} onPress={() =>
                    setAuthData(true)
                }>
                    <Text style={styles.loginText}>Đăng ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginGG}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assests/images/GoogleLogo.png')}
                    />
                    <Text style={styles.loginTextGG}>Đăng nhập bằng Google</Text>
                </TouchableOpacity>
                <View style={styles.textOR

                }>
                    <Text style={styles.lineStyle}></Text>
                    <Text style={{ paddingLeft: 20, paddingRight: 20 }}>OR</Text>
                    <Text style={styles.lineStyle}></Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        // fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,
        fontStyle: "italic",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        // backgroundColor: "#f5f5f5",
        borderRadius: 30,
        width: "80%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "#dbdbdb",
        borderWidth: 1
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 30,
        width: "90%"
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginTop: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,

    },
    loginText: {
        color: "white",
        fontWeight: '600',
    },
    loginTextGG: {
        color: "#b3dbff",
        fontWeight: '600',
    },
    lineStyle: {
        height: 1,
        backgroundColor: "#d1d1d1",
        width: "70%",
        position: "relative",
        top: 7
    },
    textOR: { marginTop: 30, flexDirection: "row" },
    loginGG: {
        width: "80%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderColor: "#b3dbff",
        borderWidth: 1,
        flexDirection: "row"
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginRight: 10
    },
});