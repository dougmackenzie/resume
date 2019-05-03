import * as path from "path";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link
} from "@react-pdf/renderer";

import { title, subtitle, workHistory } from "../../src/content/pdf";

Font.register({
  family: "Playfair Display",
  src:
    "http://fonts.gstatic.com/s/playfairdisplay/v14/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk-yRZrPA.ttf",
  fontStyle: "italic"
});

Font.register({
  family: "Lato",
  src: "http://fonts.gstatic.com/s/lato/v15/S6uyw4BMUTPHjx4wWyWtFCc.ttf"
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Lato",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    fontSize: 11,
    color: "#333",
    letterSpacing: 0.5
  },
  side: {
    padding: 30,
    backgroundColor: "#1c1e26",
    width: 200,
    color: "#ccc"
  },
  brand: {
    marginBottom: 70
  },
  main: {
    background: "#fff",
    padding: 30,
    flexGrow: 1
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 24,
    fontStyle: "italic",
    color: "#fff",
    marginBottom: 8,
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#ccc"
  },
  heading: {
    fontSize: 14,
    marginBottom: 8,
    color: "#58afd1"
  },
  contactItem: {
    marginBottom: 3
  },
  historySection: {
    marginBottom: 8
  },
  historySubheading: {
    fontSize: 9,
    textTransform: "uppercase",
    marginBottom: 5
  }
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.side}>
        <View style={styles.brand}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.contactItem}>+61 413 620 431</Text>
          <Text style={styles.contactItem}>dougmacknz@gmail.com</Text>
          <Link src="http://www.dougmack.nz" style={styles.contactItem}>
            dougmack.nz
          </Link>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text>
            I'm passionate about creating and improving software on the web. Ten
            years ago I studied design &amp; web development &mdash; since then
            I have worked on numerous commerical and personal projects to
            improve user experience, internal processes, and coding standards.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text>asdasdasd</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Work Experience</Text>

          {workHistory.map((workHistoryItem, index) => (
            <View key={index} style={styles.historySection}>
              <Text>{workHistoryItem.company},</Text>
              <Text> {workHistoryItem.position}</Text>

              <Text style={styles.historySubheading}>
                {workHistoryItem.period}
              </Text>

              <Text>{workHistoryItem.summary}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text>asdasdasd</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const defaultPath = path.resolve(
  __dirname,
  "../../src/files/resume-doug-mackenzie.pdf"
);

ReactPDF.render(<Resume />, defaultPath);
