import { Image, View, Text, StyleSheet, Pressable } from "react-native";

function PlaceItem({ place , onPress}) {
  return (
    <Pressable onPress={onPress} >
      <Image source={{uri: place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
});
