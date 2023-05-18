import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="(feed)" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
