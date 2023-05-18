import { View, Text } from "react-native";
import React from "react";
import { Link, useSearchParams } from "expo-router";

const index = () => {
  const { userId } = useSearchParams();
  return (
    <View>
      <Text>User Profile page: {userId} </Text>

      <Link href={`/UserProfile/${userId}/(network)`}>Go to user network</Link>
    
      
    </View>
  );
};

export default index;
