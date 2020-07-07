import React from "react";
import {
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    border: 3,
  },

  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
    textAlign: "center",
  },
});

// Create Document Component
const WorkshopView = ({ workshop }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Title: {workshop && workshop.title}</Text>
        <Text>Room: {workshop && workshop.room} attendees</Text>
        <Text>Capacity: {workshop && workshop.room_capacity}</Text>
        <Text>Starting hour: {workshop && workshop.starting_hour}</Text>
        <Text>Speaker: {workshop && workshop.workshop_speaker}</Text>
        <Text>Room Manager: {workshop && workshop.room_manager}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default WorkshopView;
