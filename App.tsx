import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreens';
import HomeScreen from './screens/HomeScreen';
import ProFileScreen from './screens/ProfileScreen';
import ListBK from './screens/ListBK';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyOTPScreen from './screens/VerifyOTPScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ProductReviewScreen from './screens/ProductReviewScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProFileScreen" component= {ProFileScreen}/>
                <Stack.Screen name="ListBK" component={ListBK}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
                <Stack.Screen name="VerifyOTPScreen" component={VerifyOTPScreen}/>
                <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
                <Stack.Screen name="ProductReviewScreen" component={ProductReviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="ProductReviewScreen">
        //         <Stack.Screen 
        //             name="ProductReviewScreen" 
        //             component={ProductReviewScreen}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default App;
