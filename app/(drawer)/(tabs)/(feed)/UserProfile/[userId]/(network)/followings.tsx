import { useSearchParams } from "expo-router";
import { View, Text } from "react-native";

const followings = () => {
  const { userId } = useSearchParams();

  return (
    <View>
      <Text>followings of user: {userId}</Text>
    </View>
  );
};

export default followings;
