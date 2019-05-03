import * as path from "path";
import fs from "fs";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
  Image
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import {
  title,
  subtitle,
  workHistory,
  location,
  website,
  email,
  phone,
  mainSkills
} from "../../src/content/pdf";

Font.register({
  family: "Playfair Display",
  src:
    "http://fonts.gstatic.com/s/playfairdisplay/v14/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk-yRZrPA.ttf",
  fontStyle: "italic"
});

Font.register({
  family: "Lato",
  fonts: [
    { src: "http://fonts.gstatic.com/s/lato/v15/S6uyw4BMUTPHjx4wWyWtFCc.ttf" },
    {
      src:
        "http://fonts.gstatic.com/s/lato/v15/S6u9w4BMUTPHh6UVSwiPHA3q5d0.ttf",
      fontWeight: 700
    }
  ]
});

Font.register({
  family: "Oswald",
  fonts: [
    {
      src:
        "http://fonts.gstatic.com/s/oswald/v17/TK3iWkUHHAIjg752GT8Dl-1PKw.ttf",
      fontWeight: 400
    },
    // {
    //   src:
    //     "http://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-6hwTus9HAZek1w.ttf",
    //   fontWeight: 500
    // },
    {
      src:
        "http://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-xhsTus9HAZek1w.ttf",
      fontStyle: "normal",
      fontWeight: 600
    }
    // {
    //   src:
    //     "http://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-ohoTus9HAZek1w.ttf",
    //   fontWeight: 700
    // }
  ]
});

const pageStyles = StyleSheet.create({
  fontFamily: "Lato",
  flexDirection: "row",
  backgroundColor: "#E4E4E4",
  fontSize: 11,
  color: "#444"
  //letterSpacing: 0
});

const Side = styled.View`
  padding: 30pt;
  background-color: #1c1e26;
  width: 30%;
  color: #ccc;
`;

const Main = styled.View`
  background: #fff;
  padding: 30pt;
  width: 70%;
`;

const Section = styled.View`
  margin-bottom: 25pt;
`;

const SectionHeading = styled.Text`
  font-family: "Oswald";
  font-size: 12pt;
  margin-bottom: 8;
  color: #58afd1;
  text-transform: uppercase;
`;

const Brand = styled.View`
  margin-bottom: 70;
`;

const Header = styled.View`
  margin-bottom: 30pt;
`;

const Title = styled.Text`
  font-family: "Oswald";
  font-size: 28pt;
  font-weight: 600;
  //text-transform: uppercase;
  color: #1c1e26;
  margin-bottom: 3pt;
`;

const Subtitle = styled.Text`
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 2pt;
  color: #aaa;
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
  color: #aaa;
`;

const portraitImage = fs.readFileSync(
  path.join(__dirname, "../../src/images/portrait.png")
);

const Resume = () => (
  <Document>
    <Page size="A4" style={pageStyles}>
      <Side>
        <Brand>
          <Image
            src={{ data: portraitImage, format: "png" }}
            style={{ border: "2pt solid #ccc", borderRadius: "1000pt" }}
          />
        </Brand>

        <Section>
          <ContactItem>{location}</ContactItem>
          <ContactItem>{phone}</ContactItem>
          <ContactItem>{email}</ContactItem>
          <ContactItem>
            <Link src="http://www.dougmack.nz">{website}</Link>
          </ContactItem>
        </Section>

        <Section>
          <SectionHeading>Skills</SectionHeading>
          {mainSkills.map(skill => (
            <Text>{skill.title}</Text>
          ))}
        </Section>
      </Side>

      <Main>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>

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
