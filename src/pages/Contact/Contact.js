import * as React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/pro-light-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium
} from "@fortawesome/fontawesome-free-brands";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Separator from "../../components/Separator/Separator";
import Card, {
  CardContent,
  CardTitle,
  CardSubtitle
} from "../../components/Card/Card";

import FormControl from "../../components/Form/FormControl";
import Label from "../../components/Form/Label";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import SubmitButton from "../../components/Form/SubmitButton";

import { email, phone, socialLinks } from "../../content/content";

const Contact = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
      </SectionHeader>

      <Grid>
        <Column>
          <ContactCard
            href="mailto:dougmacknz@gmail.com"
            className="wow animated fadeInUp"
          >
            <ContactIcon className="fa-4x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="navy" />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  inverse
                  transform="shrink-6"
                />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Send me an email</ContactCardSub>
              <ContactCardMain>{email}</ContactCardMain>
            </div>
          </ContactCard>
        </Column>

        <Column>
          <ContactCard className="wow animated fadeInUp">
            <ContactIcon className="fa-4x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="orange" />
                <FontAwesomeIcon icon={faMobile} inverse transform="shrink-6" />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Give me a call</ContactCardSub>
              <ContactCardMain>{phone}</ContactCardMain>
            </div>
          </ContactCard>
        </Column>
      </Grid>

      <Grid>
        <Column>
          <ContactCard
            href="https://github.com/dougmacknz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="wow animated fadeInUp"
            style={{ backgroundColor: "#333", color: "#ccc" }}
          >
            {/* <ContactIcon className="fa-3x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="#333" />
              </span>
            </ContactIcon> */}
            <FontAwesomeIcon icon={faGithub} inverse />
            <div>Check out my code</div>
          </ContactCard>
        </Column>

        <Column>
          <ContactCard
            href="https://www.linkedin.com/in/dougmacknz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="wow animated fadeInUp"
          >
            <ContactIcon className="fa-3x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="#0077b5" />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  inverse
                  transform="shrink-6"
                />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Connect with me</ContactCardSub>
              <ContactCardMain>linkedin.com/in/dougmacknz/</ContactCardMain>
            </div>
          </ContactCard>
        </Column>

        <Column>
          <ContactCard
            href="https://www.linkedin.com/in/dougmacknz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="wow animated fadeInUp"
          >
            <ContactIcon className="fa-3x">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle} color="#0077b5" />
                <FontAwesomeIcon icon={faMedium} inverse transform="shrink-6" />
              </span>
            </ContactIcon>
            <div>
              <ContactCardSub>Check out my writing</ContactCardSub>
              <ContactCardMain>medium.com/@dougmacknz/</ContactCardMain>
            </div>
          </ContactCard>
        </Column>
      </Grid>

      {/*<Separator />*/}

      {/* <div>
        <SocialList>
          {socialLinks.map((socialLink, index) => (
            <li key={index} className="wow animated flipInX">
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.name}
                className="fa-3x"
              >
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} color={socialLink.color} />
                  <FontAwesomeIcon
                    icon={socialLink.icon}
                    inverse
                    transform="shrink-7"
                  />
                </span>
              </a>
            </li>
          ))}
        </SocialList>
      </div> */}

      {/* <Column style={{ marginLeft: "1.5rem" }}> */}
      {/* <Card>
        <CardContent>
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
        </CardContent>
      </Card> */}
      {/* </Column> */}
      {/* </Grid> */}
    </Section>
  );
};

const ContactCard = styled.a`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding: 0.25rem 3rem 0.25rem 0.5rem;
  text-decoration: none;
  color: #333;
  //text-align: center;
  //max-width: 500px;
  //margin: 0 auto;
`;

const ContactIcon = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

const ContactCardSub = styled.div`
  font-size: 14px;
  color: #777;
`;

const ContactCardMain = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;

  > li {
    display: inline-block;
    margin: 0 0.1rem;
  }
`;

export default Contact;
