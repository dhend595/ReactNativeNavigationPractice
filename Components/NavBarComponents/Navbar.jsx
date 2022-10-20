import * as NavigationBar from 'expo-navigation-bar';
import { View, Text, StyleSheet, styles } from 'react-native';


export default function Navbar() {
    return (
        <View >
            <NavigationBar title="My App" />
        </View>
    );
}