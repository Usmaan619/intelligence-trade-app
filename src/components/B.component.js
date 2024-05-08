import { Text } from "react-native";

const B = (props) => (
  <Text
    style={{
      fontWeight: "bold",
      color: "#263238",
    }}
  >
    {props.children}
  </Text>
);

export default B;
