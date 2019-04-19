import * as React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/pro-light-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Separator from "../../components/Separator/Separator";

import FormControl from "../../components/Form/FormControl";
import Label from "../../components/Form/Label";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import SubmitButton from "../../components/Form/SubmitButton";

import { email, phone } from "../../content";

const Contact = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
      </SectionHeader>

      <Grid>
        <Column>
          <ContactCard>
            <ContactIcon className="fa-6x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="navy" />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  inverse
                  transform="shrink-6"
                />
              </span>
            </ContactIcon>
            <ContactCardSub>Send me an email</ContactCardSub>
            <ContactCardMain>{email}</ContactCardMain>
          </ContactCard>
        </Column>

        <Column>
          <ContactCard>
            <ContactIcon className="fa-6x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="orange" />
                <FontAwesomeIcon icon={faMobile} inverse transform="shrink-6" />
              </span>
            </ContactIcon>
            <ContactCardSub>Add me on WhatsApp</ContactCardSub>
            <ContactCardMain>{phone}</ContactCardMain>
          </ContactCard>
        </Column>
      </Grid>

      <Separator />

      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        <form>
          <Grid>
            <Column>
              <FormControl>
                <Label>Name:</Label>
                <Input type="text" name="name" required />
              </FormControl>
            </Column>

            <Column>
              <FormControl>
                <Label>Email:</Label>
                <Input type="email" name="email" required />
              </FormControl>
            </Column>
          </Grid>

          <FormControl>
            <Label>Message:</Label>
            <TextArea rows="5" name="message" required />
          </FormControl>

          <FormControl>
            <SubmitButton>Send</SubmitButton>
          </FormControl>
        </form>
      </div>
    </Section>
  );
};

const ContactCard = styled.div`
  text-align: center;
`;

const ContactIcon = styled.div``;

const ContactCardSub = styled.div`
  font-size: 14px;
  color: #777;
`;

const ContactCardMain = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
`;

export default Contact;
