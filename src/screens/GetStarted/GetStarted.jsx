import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./style";
import RightArrow from "../../assets/Icons/RightArrow";

const GetStartedScreen = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
               <View style={styles.illustration}>
                    <Image style={{
                        height:400
                    }} resizeMode="contain" source={require("../../assets/Images/getstarted.png")} />
                </View>
                <View>
                    <Text style={styles.primary_text}>Your Car, </Text>
                    <Text style={styles.primary_text}>Your Schedule</Text>
                    <Text style={styles.secondary_text}>Experience the convenience of a car wash service that comes to you.</Text>
                </View>
                <View style={styles.button_start_div}>
                    <Pressable style={styles.start_button} >
                        <Text style={styles.start_text}>Get Started</Text>
                        <RightArrow />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GetStartedScreen;