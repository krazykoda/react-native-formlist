import React from "react";
import { View, FlatList } from "react-native";
import Contact from "../components/Contact";




export default function ContactsScreen() {
  const contacts = [
    { name: "Sam Bob", number: "043-565-7665" },
    { name: "John Mike", number: "023-543-2233" },
    { name: "Eunice Anderson", number: "098-765-4333" },
    { name: "Joseph Soup", number: "012-433-5666" },
    { name: "Ma", number: "084-775-5667" },
    { name: "Da", number: "054-675-9234" },
  ];

  return (
    <View style={{
      marginTop: 10,
    }}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}
