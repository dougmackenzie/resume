import * as React from "react";
import styled from "styled-components";

import Section, {
  SectionHeader,
  SectionContainer,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";

import Timeline, {
  TimelineHeading,
  TimelineMain,
  TimelineSide,
  TimelineSideHeading,
  TimelineSideImage
} from "../../components/Timeline/Timeline";

import Title from "../../components/Title/Title";

import { workHistory } from "../../content/content";

const History = props => {
  return (
    <Section id={props.id}>
      <SectionContainer>
        {/* <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        </SectionHeader> */}

        {/* <Title>Work Experience</Title> */}

        <ExperienceTimeline className="wow">
          {workHistory.map((historyItem, index) => (
            <React.Fragment key={index}>
              <TimelineSide>
                <TimelineSideHeading>{historyItem.period}</TimelineSideHeading>
                <TimelineSideImage>
                  <img src={historyItem.logo} alt="" />
                </TimelineSideImage>
              </TimelineSide>
              <TimelineMain>
                <TimelineHeading>{historyItem.company}</TimelineHeading>
                {historyItem.summary.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </TimelineMain>
            </React.Fragment>
          ))}
        </ExperienceTimeline>

        <ExperienceMobile>
          {workHistory.map((historyItem, index) => (
            <HistoryItem key={index}>
              <HistoryHeading>
                <HistoryImage>
                  <img src={historyItem.logo} alt="" />
                </HistoryImage>
                <div>
                  <HistoryCompany>{historyItem.company}</HistoryCompany>
                  <HistoryPeriod>{historyItem.period}</HistoryPeriod>
                </div>
              </HistoryHeading>
              <HistoryMain>
                {historyItem.summary.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </HistoryMain>
            </HistoryItem>
          ))}
        </ExperienceMobile>
      </SectionContainer>
    </Section>
  );
};

const ExperienceTimeline = styled(Timeline)`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: -ms-grid;
    display: grid;
  }
`;

const ExperienceMobile = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const HistoryItem = styled.div`
  //border-bottom: 1px solid #eee;
  margin-bottom: 3rem;
`;

const HistoryHeading = styled.div`
  display: flex;
  align-items: center;
`;

const HistoryCompany = styled.div`
  font-weight: 400;
  //font-size: 1rem;
`;

const HistoryPeriod = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  color: ${props => props.theme.color.bodyText};
  font-family: ${props => props.theme.font.heading};
`;

const HistoryMain = styled.div``;
const HistoryImage = styled.div`
  width: 75px;
  margin-right: 1rem;

  > img {
    max-width: 100%;
`;

export default History;
