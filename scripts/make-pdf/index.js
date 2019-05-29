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
  summary,
  workHistory,
  location,
  website,
  email,
  phone,
  skills,
  educationHistory
} from "../../src/content/pdf";

Font.register({
  family: "Lora",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/lora/v13/0QIvMX1D_JOuMwr7JvFMl_E.ttf"
    },
    {
      src: "http://fonts.gstatic.com/s/lora/v13/0QIhMX1D_JOuMw_LIftOtfOm8w.ttf",
      fontStyle: "italic"
    },
    {
      src:
        "http://fonts.gstatic.com/s/lora/v13/0QIgMX1D_JOuO7HeNtxun9us-7w.ttf",
      fontWeight: 700
    }
  ]
});

// Font.register({
//   family: "Merriweather",
//   fonts: [
//     {
//       src:
//         "http://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-fCZJdeX3rg.ttf"
//     },
//     {
//       src:
//         "http://fonts.gstatic.com/s/merriweather/v20/u-4m0qyriQwlOrhSvowK_l5-eRZOf-fVrPHp.ttf",
//       fontStyle: "italic"
//     },
//     {
//       src:
//         "http://fonts.gstatic.com/s/merriweather/v20/u-4n0qyriQwlOrhSvowK_l52xwNZWMf_hPvhPQ.ttf",
//       fontWeight: 700
//     }
//   ]
// });

Font.register({
  family: "Oswald",
  fonts: [
    {
      src:
        "http://fonts.gstatic.com/s/oswald/v17/TK3iWkUHHAIjg752GT8Dl-1PKw.ttf",
      fontWeight: 400
    },
    {
      src:
        "http://fonts.gstatic.com/s/oswald/v17/TK3hWkUHHAIjg75-6hwTus9HAZek1w.ttf",
      fontWeight: 700 // it's actually 500, but react-pdf is a bit buggy in this area
    }
  ]
});

Font.registerHyphenationCallback(word => [word]);

const pageStyles = StyleSheet.create({
  fontFamily: "Lora",
  flexDirection: "row",
  fontSize: 10,
  color: "#333",
  lineHeight: "1.5"
});

const Resume = () => (
  <Document>
    <Page size="A4" style={pageStyles} wrap={false}>
      <Side>
        <Section
          style={{
            paddingLeft: "8pt",
            paddingRight: "8pt"
          }}
        >
          <Image
            src={{ data: portraitImage, format: "png" }}
            style={{ borderRadius: "1000pt" }}
          />
        </Section>

        <Section>
          <SectionHeading dark>@dougmacknz</SectionHeading>
          <SectionContent>
            <ContactItem>
              <ContactItemLabel>Location</ContactItemLabel>
              <ContactItemValue>{location}</ContactItemValue>
            </ContactItem>
            <ContactItem>
              <ContactItemLabel>Phone</ContactItemLabel>
              <ContactItemValue>{phone}</ContactItemValue>
            </ContactItem>
            <ContactItem>
              <ContactItemLabel>Email</ContactItemLabel>
              <ContactItemValue>{email}</ContactItemValue>
            </ContactItem>
            <ContactItem>
              <ContactItemLabel>Website</ContactItemLabel>
              <ContactItemValue>
                <Link src="http://www.dougmack.nz">{website}</Link>
              </ContactItemValue>
            </ContactItem>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeading dark>Specialties</SectionHeading>
          <SectionContent>
            {skills.map((skill, index) => (
              <Skill key={index}>
                <SkillHeading>{skill.title}</SkillHeading>
                {skill.list.map((listItem, index2) => (
                  <Text
                    key={index2}
                    style={{ paddingLeft: "6pt", color: "#aaa" }}
                  >
                    {listItem}
                  </Text>
                ))}
              </Skill>
            ))}
          </SectionContent>
        </Section>
      </Side>

      <Main>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>

        <Section>
          <SectionHeading>Summary</SectionHeading>
          <SectionContent>
            <Paragraph style={{ fontSize: 10 }}>{summary}</Paragraph>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeading>Experience</SectionHeading>
          <SectionContent>
            {workHistory.map((workHistoryItem, index) => (
              <HistorySection
                key={index}
                style={index && { padding: "16pt 0 0" }}
              >
                <View style={{ width: "15%" }}>
                  <Image
                    src={{ data: workHistoryItem.logo, format: "png" }}
                    style={{
                      width: "35pt",
                      height: "35pt"
                    }}
                  />
                </View>

                <View style={{ width: "85%" }}>
                  <HistoryHeader>
                    <View
                      style={{ flexDirection: "row", alignItems: "flex-start" }}
                    >
                      <HistoryTitle>{workHistoryItem.company}</HistoryTitle>
                      <Text style={{ margin: "0 5pt", color: "#666" }}>/</Text>
                      <HistorySubtitle>
                        {workHistoryItem.position}
                      </HistorySubtitle>
                    </View>
                    <HistoryDate>
                      {workHistoryItem.dateStart} - {workHistoryItem.dateEnd}
                    </HistoryDate>
                  </HistoryHeader>

                  {workHistoryItem.summary.map((paragraph, index) => (
                    <HistorySummary
                      key={index}
                      style={index && { marginTop: 10 }}
                    >
                      {paragraph}
                    </HistorySummary>
                  ))}
                </View>
              </HistorySection>
            ))}
          </SectionContent>
        </Section>

        <Section>
          <SectionHeading>Education</SectionHeading>
          <SectionContent>
            <View style={{ flexDirection: "row" }}>
              {educationHistory.map((educationItem, index) => (
                <View key={index} style={{ width: "50%" }}>
                  <HistoryTitle>{educationItem.course}</HistoryTitle>
                  <HistorySubtitle>{educationItem.school}</HistorySubtitle>
                  <HistoryDate>{educationItem.period}</HistoryDate>
                </View>
              ))}
            </View>
          </SectionContent>
        </Section>
      </Main>
    </Page>
  </Document>
);

const theme = {
  font: {
    serif: "Lora"
  }
};

const sectionSidePadding = "6pt";

const Paragraph = styled.Text`
  line-height: 1.7;
  color: #444;
  font-family: ${theme.font.serif};
  font-size: 9pt;
`;

const Side = styled.View`
  padding: 24pt;
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
  font-size: 11pt;
  margin-bottom: 15pt;
  color: ${props => (props.dark ? "#58afd1" : "#1c1e26")};
  text-transform: uppercase;
  letter-spacing: 1pt;
  line-height: 1.5;
  padding: 4pt 0 4pt ${sectionSidePadding};

  ${props => !props.dark && "background: #f5f5f5;"}
  ${props => props.dark && " border-bottom: 1pt solid #555;"}
`;

/*border-top: 1pt solid ${props => (props.dark ? "#555" : "#ddd")};
  border-bottom: 1pt solid ${props => (props.dark ? "#555" : "#ddd")};
  */

const SectionContent = styled.View`
  padding: 0 ${sectionSidePadding};
`;

const Header = styled.View`
  margin-bottom: 30pt;
`;

const Title = styled.Text`
  font-family: "Oswald";
  font-size: 28pt;
  font-weight: bold;
  color: #1c1e26;
`;

const Subtitle = styled.Text`
  font-family: ${theme.font.serif};
  font-size: 14pt;
  //font-style: italic;
  text-transform: lowercase;
  color: #999;
`;

const ContactItem = styled.View`
  margin-bottom: 6pt;
`;

const ContactItemLabel = styled.Text`
  font-weight: bold;
  font-size: 11pt;
  margin-bottom: 1pt;
`;

const ContactItemValue = styled.Text`
  color: #aaa;
  font-size: 10pt;
  font-family: ${theme.font.serif};
`;

const HistorySection = styled.View`
  flex-direction: row;
`;

const HistoryHeader = styled.View`
  padding: 5pt 0 8pt;
`;

const HistoryTitle = styled.Text`
  font-weight: bold;
`;

const HistorySubtitle = styled.Text`
  font-style: italic;
  color: #666;
`;

const HistoryDate = styled.Text`
  font-size: 8pt;
  text-transform: uppercase;
`;

const HistorySummary = styled(Paragraph)`
  font-size: 9pt;
  // line-height: 1.6;
`;

const Skill = styled.View`
  margin-bottom: 12pt;
`;

const SkillHeading = styled.Text`
  font-size: 11pt;
  margin-bottom: 4pt;
  font-weight: bold;
`;

const SkillBar = styled.View`
  height: 4pt;
  background: #333;
  border-radius: 3pt;
`;

const SkillBarInsert = styled.View`
  position: absolute;
  width: ${props => props.width};
  height: 100%;
  border-radius: 3pt;
  background: #f6921e;
`;

const portraitImage = fs.readFileSync(
  path.join(__dirname, "../../src/images/portrait.png")
);

const defaultPath = path.resolve(
  __dirname,
  "../../src/files/resume-doug-mackenzie.pdf"
);

ReactPDF.render(<Resume />, defaultPath);
