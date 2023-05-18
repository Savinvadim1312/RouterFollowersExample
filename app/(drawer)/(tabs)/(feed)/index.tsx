import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  const userId = "TestUserId";
  return (
    <View>
      <Text>Feed page</Text>

      <Link href={`/UserProfile/${userId}`}>Go to user profile with id</Link>
    </View>
  );
};

export default index;
