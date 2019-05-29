import * as React from "react";
import MicroModal from "micromodal";

import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

import Section, {
  SectionHeader,
  SectionContainer,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";

import Card, {
  CardImage,
  CardImageTitle,
  CardImageSubtitle
} from "../../components/Card/Card";

import Modal, {
  ModalHeader,
  ModalContainer,
  ModalTitle,
  ModalSubtitle,
  ModalContent,
  ModalClose
} from "../../components/Modal/Modal";

const workExamples = [
  {
    title: "Open Source Work",
    date: "Feb 2019",
    blurb: "I have been contributing to some open source projects."
  },
  {
    title: "Integrating React & TypeScript",
    date: "Dec 2018",
    blurb:
      "I introduced a new standard for front-end development and started moving development towards it."
  },
  {
    title: "Audience Selector",
    date: "Aug 2018",
    blurb: "I created a new way of selecting audiences for Schoolbox."
  },
  {
    title: "Open Source Work",
    date: "Feb 2019",
    blurb: "I have been contributing to some open source projects."
  },
  {
    title: "Integrating React & TypeScript",
    date: "Dec 2018",
    blurb:
      "I introduced a new standard for front-end development and started moving development towards it."
  },
  {
    title: "Audience Selector",
    date: "Aug 2018",
    blurb: "I created a new way of selecting audiences for Schoolbox."
  }
];

const Work = props => {
  React.useEffect(() => {
    MicroModal.init();
  }, []);

  return (
    <>
      <Section id={props.id} style={{ backgroundColor: "#fff" }}>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionSubTitle>{props.subtitle}</SectionSubTitle>
          </SectionHeader>
          <Grid threes>
            {workExamples.map((workExample, index) => (
              <Column key={index}>
                <Card>
                  <CardImage as="button" data-micromodal-trigger="modal-1">
                    <img src="https://placeimg.com/350/300/any" alt="" />
                    <CardImageTitle>{workExample.title}</CardImageTitle>
                    <CardImageSubtitle>{workExample.date}</CardImageSubtitle>
                  </CardImage>
                  {/* <CardHover>{workExample.title}</CardHover> */}
                </Card>
              </Column>
            ))}
          </Grid>
        </SectionContainer>
      </Section>
    </>
  );
};

export default Work;
