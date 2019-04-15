import * as React from "react";
import styled from "styled-components";

import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";

const ContactCard = styled.div`
  text-align: center;
  font-size: 14px;
`;

const Contact = props => {
  return (
    <Section id={props.id}>
      {/* <SectionHeader>Contact me</SectionHeader> */}
      <ContactCard>
        <p style={{ marginBottom: "30px" }}>The best way to contact me is at</p>
        <Button href="mailto:dougmacknz@gmail.com">dougmacknz@gmail.com</Button>
      </ContactCard>
    </Section>
  );
};

export default Contact;
