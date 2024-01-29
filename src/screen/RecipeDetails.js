import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "../helpers/image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

const RecipeDetails = (props) => {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      <View className="flex-row justify-center">
        <CachedImage
          uri={item.strMealThumb}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 50,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            marginTop: 4,
          }}
        />
      </View>
      {/* header buttons*/}

      <View className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf2f" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsFavourite(!isFavourite);
          }}
          className="p-2 rounded-full ml-5 bg-white mr-5"
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
