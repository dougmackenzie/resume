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
  mainSkills,
  additionalSkills
} from "../../src/content/pdf";

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
    }
  ]
});

const pageStyles = StyleSheet.create({
  fontFamily: "Lato",
  flexDirection: "row",
  backgroundColor: "#E4E4E4",
  fontSize: 11,
  color: "#555"
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

const Header = styled.View`
  margin-bottom: 30pt;
`;

const Title = styled.Text`
  font-family: "Oswald";
  font-size: 28pt;
  font-weight: normal;
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
  margin-bottom: 16pt;
`;

const ContactItem = styled.Text`
  margin-bottom: 3pt;
`;

const HistoryHeading = styled.View`
  flex-direction: row;
  margin-bottom: 2pt;
`;

const HistorySubheading = styled.Text`
  font-size: 9pt;
  text-transform: uppercase;
  margin-bottom: 5pt;
  color: #aaa;
  letter-spacing: 0.5pt;
`;

const Skill = styled.View`
  padding-left: 5pt;
  border-left: 1pt double #f6921e;
  margin-bottom: 8pt;
`;

const SkillSubtext = styled.Text`
  color: #666;
  font-size: 10pt;
`;

const portraitImage = fs.readFileSync(
  path.join(__dirname, "../../src/images/portrait.png")
);

const Resume = () => (
  <Document>
    <Page size="A4" style={pageStyles}>
      <Side>
        <Section>
          <Image
            src={{ data: portraitImage, format: "png" }}
            style={{ border: "2pt solid #ccc", borderRadius: "1000pt" }}
          />
        </Section>

        <Section>
          <SectionHeading>@dougmacknz</SectionHeading>
          <ContactItem>{location}</ContactItem>
          <ContactItem>{phone}</ContactItem>
          <ContactItem>{email}</ContactItem>
          <ContactItem>
            <Link src="http://www.dougmack.nz">{website}</Link>
          </ContactItem>
        </Section>

        <Section>
          <SectionHeading>Specialities</SectionHeading>
          {mainSkills.map(skill => (
            <Skill>
              <Text>{skill.title}</Text>
              <SkillSubtext>
                {skill.yearsExperience} years of experience
              </SkillSubtext>
            </Skill>
          ))}
        </Section>

        <Section>
          <SectionHeading>Additional Skills</SectionHeading>
          {additionalSkills.map(skill => (
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
          <SectionHeading>Experience</SectionHeading>

          {workHistory.map((workHistoryItem, index) => (
            <HistorySection key={index}>
              <HistoryHeading>
                <Text style={{ fontWeight: 700, marginRight: 3 }}>
                  {workHistoryItem.company},
                </Text>
                <Text>{workHistoryItem.position}</Text>
              </HistoryHeading>

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
