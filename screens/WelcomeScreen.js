import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#7B68EE",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      <View style={{ justifyContent: "space-around", flex: 1 }}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: 50,
            textAlign: "center",
          }}
        >
          Let's get started!
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../assets/study.png")}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <TouchableOpacity
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            backgroundColor: "#FBBF24",
            marginLeft: 28,
            marginRight: 28,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
              fontSize: 25,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "500" }}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: "700", color: "yellow" }}>Login In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
