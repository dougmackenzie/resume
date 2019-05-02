import * as path from "path";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Doug MacKenzie</Text>
      </View>
      <View style={styles.section}>
        <Text>Yup</Text>
      </View>
    </Page>
  </Document>
);

const defaultPath = path.resolve(
  __dirname,
  "../../src/files/resume-doug-mackenzie.pdf"
);

ReactPDF.render(<Resume />, defaultPath);
