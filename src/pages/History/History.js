import * as React from "react";

import Section, {
  SectionHeader,
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

import { workHistory } from "../../content/content";

const History = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
      </SectionHeader>
      <Timeline>
        {workHistory.map((historyItem, index) => (
          <>
            <TimelineSide>
              <TimelineSideHeading>{historyItem.period}</TimelineSideHeading>
              <TimelineSideImage>
                <img src={historyItem.logo} />
              </TimelineSideImage>
            </TimelineSide>
            <TimelineMain>
              <TimelineHeading>{historyItem.company}</TimelineHeading>
              {historyItem.summary.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </TimelineMain>
          </>
        ))}
      </Timeline>
    </Section>
  );
};

export default History;
