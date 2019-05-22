import * as React from "react";
import styled from "styled-components";
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
  CardContent,
  CardTitle,
  CardSubtitle
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
    date: "December 2018",
    blurb:
      "I introduced a new standard for front-end development and started moving development towards it."
  },
  {
    title: "Audience Selector",
    date: "August 2018",
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
          <Grid fours>
            {workExamples.map((workExample, index) => (
              <Column key={index}>
                <Card grey>
                  <CardImage>
                    <img src="https://placeimg.com/400/200/any" alt="" />
                  </CardImage>
                  <CardContent>
                    <CardTitle>{workExample.title}</CardTitle>
                    <CardSubtitle>{workExample.date}</CardSubtitle>
                    <p>{workExample.blurb}</p>
                    <button data-micromodal-trigger="modal-1">Read More</button>
                  </CardContent>
                </Card>
              </Column>
            ))}
          </Grid>
        </SectionContainer>
      </Section>
      <Modal id="modal-1" aria-hidden="true">
        <ModalContainer tabindex="-1" data-micromodal-close>
          <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <ModalHeader>
              <ModalTitle id="modal-1-title">Open Source Work</ModalTitle>
              <ModalSubtitle>Feb 2019</ModalSubtitle>
              <ModalClose />
            </ModalHeader>

            <ModalContent>
              <img src="https://placeimg.com/700/300/any" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rhoncus justo tortor, quis pretium velit convallis sit amet. Sed
                hendrerit justo elementum neque condimentum, quis iaculis dolor
                vestibulum. Donec felis dui, elementum ac pretium nec, mattis
                consectetur tortor. Proin a sem vel tellus pretium posuere in ut
                metus. Vestibulum luctus varius dui eget vulputate. Quisque in
                pharetra ante. Suspendisse potenti.
              </p>

              <p>
                Donec eget sem eu purus posuere placerat in non massa. Ut
                elementum dolor eget fermentum pharetra. Maecenas congue lectus
                eu volutpat tempus. Duis aliquam faucibus dolor nec porta. Donec
                vestibulum laoreet egestas. Fusce rhoncus placerat aliquet. Sed
                ac lectus dui. Vestibulum vitae imperdiet risus. Phasellus vitae
                elit laoreet, aliquet elit vel, tincidunt sem. Proin condimentum
                cursus imperdiet. Morbi est sem, maximus elementum turpis ut,
                scelerisque cursus lectus. Suspendisse porta dui non tellus
                congue vestibulum.
              </p>

              <p>
                Pellentesque varius metus sed odio pellentesque aliquet. Morbi
                in odio pellentesque, posuere arcu sit amet, congue neque.
                Maecenas vitae lorem sagittis sapien pharetra rutrum.
                Suspendisse id enim lorem. Morbi pellentesque cursus odio, in
                lobortis dolor elementum rutrum. Suspendisse sagittis, turpis id
                congue accumsan, tortor felis tincidunt libero, at posuere
                tellus metus non lectus. Sed tincidunt maximus risus quis
                suscipit. Vivamus tempus semper ligula, mollis tempus est
                hendrerit eu. Mauris sed est eget augue condimentum egestas
                dignissim ac lacus.
              </p>

              <p>
                Duis nunc mauris, convallis quis interdum nec, lacinia eget
                ligula. Cras interdum neque sit amet molestie tempus. Vestibulum
                in justo id tellus luctus ultrices et vitae arcu. Mauris ut
                elementum risus, eget sagittis turpis. In in viverra massa.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Quisque gravida, velit a congue
                congue, odio velit facilisis dolor, at pharetra dolor dui ut
                risus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. In hac habitasse platea dictumst. Curabitur porttitor,
                augue id laoreet sagittis, lectus massa pharetra lectus, sit
                amet sodales dui nisl id enim. Vivamus sit amet lobortis tortor.
                Vivamus interdum ligula accumsan rutrum sollicitudin.
              </p>
            </ModalContent>
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Work;
