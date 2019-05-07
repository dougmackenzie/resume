import * as React from "react";
import styled from "styled-components";
import Swiper from "swiper";

import Section from "../../components/Section/Section";

import michelle from "../../images/michelle.jpeg";
import megan from "../../images/megan.jpeg";

const SliderWrapper = styled.div`
  padding: 50px 20px;

  @media (min-width: 769px) {
    padding: 100px 140px;
  }
`;

const Endorsements = props => {
  React.useEffect(() => {
    // Init slider
    new Swiper("[data-slider]", {
      navigation: {
        nextEl: "[data-slider-next]",
        prevEl: "[data-slider-prev]"
      }
      // pagination: {
      //   el: "[data-swiper-pagination]",
      //   clickable: true
      // }
    });
  });

  return (
    <Section
      id={props.id}
      style={{
        backgroundColor: "#071737cc",
        color: "#ccc",
        padding: 0
      }}
    >
      <div data-slider className="swiper-container">
        <SliderWrapper className="swiper-wrapper">
          <div className="swiper-slide">
            <Endorsement>
              <PortraitImage>
                <img src={michelle} />
              </PortraitImage>

              <Quote>
                Doug was always very good at moving data back into Synergetic.
                <footer>
                  <div>Michelle Lazarow</div>
                  <div>
                    Director of Learning Technologies and Innovation &mdash; The
                    King David School
                  </div>
                </footer>
              </Quote>
            </Endorsement>
          </div>

          <div className="swiper-slide">
            <Endorsement>
              <PortraitImage>
                <img src={megan} />
              </PortraitImage>

              <Quote>
                He was a great guy to work with!
                <footer>
                  <div>Megan Conley</div>
                  <div>
                    Online Learning &amp; Education Consultant &mdash; Schoolbox
                    (Previously)
                  </div>
                </footer>
              </Quote>
            </Endorsement>
          </div>
        </SliderWrapper>
        <div
          className="swiper-button-prev swiper-button-white"
          data-slider-prev
          style={{ left: "2rem" }}
        />
        <div
          className="swiper-button-next swiper-button-white"
          data-slider-next
          style={{ right: "2rem" }}
        />
      </div>
    </Section>
  );
};

const Endorsement = styled.div`
  display: flex;
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  color: #fff;

  :before {
    color: ${props => props.theme.color.highlight};
    content: open-quote;
    font-size: 4rem;
    line-height: 0.1rem;
    margin-right: 0.25rem;
    vertical-align: -0.4rem;
  }

  footer {
    font-size: 1rem;
    color: #ccc;
  }
`;

const PortraitImage = styled.div`
  max-width: 120px;

  > img {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 50%;
  }
`;

export default Endorsements;
