import * as React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/pro-light-svg-icons";

import Section, { SectionContainer } from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import StyledHeading from "../../components/StyledHeading/StyledHeading";
import ContactForm from "../../components/ContactForm/ContactForm";

import { email, phone, socialLinks } from "../../content/content";

const Contact = props => {
  return (
    <Section as="footer" id={props.id} backgroundColor="#1c1e26" color="#bbb">
      <SectionContainer>
        <Grid>
          <Column>
            <div style={{ marginBottom: "2.5rem" }}>
              <StyledHeading>Contact Details</StyledHeading>
              <FooterList>
                <li>
                  <a href={`mailto:${email}`}>
                    <ContactIcon>
                      <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                    </ContactIcon>
                    {email}
                  </a>
                </li>

                <li>
                  <ContactIcon>
                    <FontAwesomeIcon icon={faPhone} fixedWidth />
                  </ContactIcon>
                  {phone}
                </li>
              </FooterList>
            </div>

            <div>
              <StyledHeading>Social</StyledHeading>
              <FooterList>
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <a
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.name}
                    >
                      <ContactIcon>
                        <FontAwesomeIcon icon={socialLink.icon} fixedWidth />
                      </ContactIcon>
                      {socialLink.name}
                    </a>
                  </li>
                ))}
              </FooterList>
            </div>
          </Column>

          <Column>
            <StyledHeading>Send me a message</StyledHeading>
            <ContactForm />
          </Column>
        </Grid>
      </SectionContainer>
    </Section>
  );
};

const FooterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    display: block;
    padding: 0;

    a {
      text-decoration: none;
      display: inline-block;
      margin-bottom: 0.75rem;
      color: inherit;
      transition: color 0.2s;

      :hover {
        color: #eee;
      }
    }
  }
`;

const ContactIcon = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

export default Contact;
