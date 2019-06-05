import * as React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import Section, { SectionContainer } from "../../components/Section/Section";

import { testimonal } from "../../content/content";

const Endorsements = props => {
  return (
    <Section id={props.id} backgroundColor="#f5f5f5">
      <SectionContainer condensed>
        <Endorsement>
          <PortraitImage>
            <Img fixed={props.mattPortrait} alt="" />
          </PortraitImage>

          <Quote>
            {testimonal.recommendation}
            <footer>
              <div style={{ fontWeight: "700" }}>{testimonal.person.name}</div>
              <div>
                {testimonal.person.position} &mdash;
                {testimonal.person.company}
              </div>
            </footer>
          </Quote>
        </Endorsement>
      </SectionContainer>
    </Section>
  );
};

const Endorsement = styled.div`
  display: flex;
`;

const PortraitImage = styled.div`
  flex: 0 0 125px;
  margin-right: 1.5rem;
  display: none;

  img {
    width: 100%;
    border-radius: 50%;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.125rem;
  position: relative;
  margin: 0;
  padding: 0.75rem 0.75rem;
  line-height: 1.75;
  font-weight: 400;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 4rem;
  }

  :before {
    position: absolute;
    left: 0;
    top: 0;
    font-family: ${props => props.theme.font.heading};
    color: ${props => props.theme.color.highdark};
    content: "“";
    font-size: 6rem;
    line-height: 1;
    opacity: 0.3;
    font-weight: 700;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 8rem;
    }
  }

  footer {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
    color: #666;
    margin-top: 1rem;
  }
`;

export default Endorsements;
