import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const TopTabsNavigator = createMaterialTopTabNavigator().Navigator;

const TopTabs = withLayoutContext(TopTabsNavigator);

const _layout = () => {
  return <TopTabs />;
};

export default _layout;
