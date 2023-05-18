import { useSearchParams } from "expo-router";
import { View, Text } from "react-native";

const followers = () => {
  const { userId } = useSearchParams();

  return (
    <View>
      <Text>followers of user: {userId}</Text>
    </View>
  );
};

export default followers;
