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
import styled from "@react-pdf/styled-components";

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

const pageStyles = StyleSheet.create({
  fontFamily: "Lato",
  flexDirection: "row",
  backgroundColor: "#E4E4E4",
  fontSize: 11,
  color: "#333",
  letterSpacing: 0.5
});

const Side = styled.View`
  padding: 30px;
  background-color: #1c1e26;
  width: 200;
  color: #ccc;
`;

const Main = styled.View`
  background: #fff;
  padding: 30px;
  flexgrow: 1;
`;

const Section = styled.View`
  margin-bottom: 10;
`;

const SectionHeading = styled.Text`
  font-size: 14;
  margin-bottom: 8;
  color: #58afd1;
`;

const Brand = styled.View`
  margin-bottom: 70;
`;

const Title = styled.Text`
  font-family: "Playfair Display";
  font-size: 24;
  font-style: italic;
  color: #fff;
  margin-bottom: 8;
  letter-spacing: 1;
`;

const Subtitle = styled.Text`
  font-size: 9;
  text-transform: uppercase;
  letter-spacing: 2;
  color: #ccc;
`;

const HistorySection = styled.View`
  margin-bottom: 8;
`;

const ContactItem = styled.Text`
  margin-bottom: 3;
`;

const HistorySubheading = styled.Text`
  font-size: 9;
  text-transform: uppercase;
  margin-bottom: 5;
`;

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={pageStyles}>
      <Side>
        <Brand>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Brand>

        <Section>
          <SectionHeading>Contact</SectionHeading>
          <ContactItem>+61 413 620 431</ContactItem>
          <ContactItem>dougmacknz@gmail.com</ContactItem>
          <ContactItem>
            <Link src="http://www.dougmack.nz">dougmack.nz</Link>
          </ContactItem>
        </Section>
      </Side>

      <Main>
        <Section>
          <SectionHeading>Summary</SectionHeading>
          <Text>
            I'm passionate about creating and improving software on the web. Ten
            years ago I studied design &amp; web development &mdash; since then
            I have worked on numerous commerical and personal projects to
            improve user experience, internal processes, and coding standards.
          </Text>
        </Section>

        <Section>
          <SectionHeading>Skills</SectionHeading>
          <Text>asdasdasd</Text>
        </Section>

        <Section>
          <SectionHeading>Work Experience</SectionHeading>

          {workHistory.map((workHistoryItem, index) => (
            <HistorySection key={index}>
              <Text>{workHistoryItem.company},</Text>
              <Text> {workHistoryItem.position}</Text>

              <HistorySubheading>{workHistoryItem.period}</HistorySubheading>

              <Text>{workHistoryItem.summary}</Text>
            </HistorySection>
          ))}
        </Section>

        <Section>
          <SectionHeading>Education</SectionHeading>
          <Text>asdasdasd</Text>
        </Section>
      </Main>
    </Page>
  </Document>
);

const defaultPath = path.resolve(
  __dirname,
  "../../src/files/resume-doug-mackenzie.pdf"
);

ReactPDF.render(<Resume />, defaultPath);
