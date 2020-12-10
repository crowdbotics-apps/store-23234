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

  state = { TextInput_7: "" }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/flooop.png"
        }}
        style={styles.Image_3}
      />
      <Text>Ingrese el Codigo</Text>
      <TextInput
        placeholder="Codigo"
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <View style={styles.View_9}>
        <View style={styles.View_157}>
          <View style={styles.View_158}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/flooop.png"
              }}
            />
          </View>
          <View style={styles.View_159} />
        </View>
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: { height: 100 },
  Text_5: {},
  TextInput_7: {
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 4
  },
  View_9: { width: 304 },
  View_157: { flexDirection: "row" },
  View_158: { width: 150 },
  Image_162: {},
  View_159: { width: 150 },
  Button_164: {}
})
