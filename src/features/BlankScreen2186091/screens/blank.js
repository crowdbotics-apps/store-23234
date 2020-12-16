import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_14: "", TextInput_10: "" }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/flooop_rbz1A7z.png"
        }}
      />
      <View style={styles.View_5}>
        <Text>Usuario</Text>
        <TextInput
          placeholder="Usuario"
          value={this.state.TextInput_14}
          onChangeText={nextValue => this.setState({ TextInput_14: nextValue })}
        />
        <Text>Contraseña</Text>
        <TextInput
          placeholder="Password"
          value={this.state.TextInput_10}
          onChangeText={nextValue => this.setState({ TextInput_10: nextValue })}
        />
        <Button title="Press me!" onPress={() => alert("Pressed!")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {},
  View_5: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 60,
    paddingBottom: 0,
    alignSelf: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  },
  Text_8: {},
  TextInput_14: {},
  Text_12: {},
  TextInput_10: {},
  Button_16: {}
})
