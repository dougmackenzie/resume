import * as React from "react";
import styled from "styled-components";

import Section, { SectionContainer } from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Title from "../../components/Title/Title";

import { mainSkills } from "../../content/content";

const Skills = props => {
  return (
    <Section id={props.id} backgroundColor="#342b56" color="#eee">
      <SectionContainer>
        <Title
          style={{
            fontSize: "1.625rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#eee"
          }}
        >
          Where I'm good
        </Title>

        <Grid threes>
          {mainSkills.map((mainSkill, index) => {
            const content = (
              <Column key={index}>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <img
                        src={mainSkill.icon}
                        alt=""
                        style={{ maxWidth: "75px", marginRight: "1rem" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: `"Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
                          fontSize: "1.5rem",
                          fontWeight: 400,
                          margin: "0.35rem 0 0.75rem",
                          color: "#eee"
                        }}
                      >
                        {mainSkill.title}
                      </div>
                    </div>
                  </div>
                  <SkillList>
                    {mainSkill.list.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </SkillList>
                </div>
              </Column>
            );

            return content;
          })}
        </Grid>
      </SectionContainer>
    </Section>
  );
};

const SkillList = styled.ul`
  padding-left: 1.75rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  list-style-type: none;
  color: #ccc;

  > li {
    padding: 0 0.5rem 0 1.5rem;

    :before {
      content: "-";
      position: absolute;
      margin-left: -1.5rem;
    }
  }
`;

export default Skills;
