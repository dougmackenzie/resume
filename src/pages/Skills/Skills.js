import * as React from "react";
import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Card, { CardContent, CardTitle } from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

const Skills = props => (
  <Section id={props.id} style={{ backgroundColor: "#f5f5f5" }}>
    <SectionHeader>
      <SectionTitle>Skills</SectionTitle>
      <SectionSubTitle>What I can do</SectionSubTitle>
    </SectionHeader>

    <h5>Specialties</h5>
    <Grid>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>JavaScript</CardTitle>
            <p>
              I've been working with JavaScript for my entire career, however
              like many developers in my era- I didn't take the time to learn
              the language properly. In the past year I have been focusing on
              understanding the core of the language.
            </p>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardContent>
            <CardTitle>React</CardTitle>
            <p>
              I was a bit late to the party with React, I only picked it up a
              year ago. However I've been working with it heavily since that
              point.
            </p>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardContent>
            <CardTitle>UI Design</CardTitle>
            <p>
              Creating intuitive interfaces for users has long been a passion of
              mine. I am often called upon when there is a creative solution
              required for a user need or problem.
            </p>
          </CardContent>
        </Card>
      </Column>

      <Column>
        <Card>
          <CardContent>
            <CardTitle>CSS &amp; Scoped Styling</CardTitle>
            <p>
              Dealing with CSS quirks has long been a speciality of mine. More
              recently I have been working with Styled Components for scoped
              styling.
            </p>
          </CardContent>
        </Card>
      </Column>
    </Grid>

    <h5>Additional Skills</h5>
    <Grid>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>TypeScript</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>Accessibility</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>Vue.js</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>Scrum</CardTitle>
          </CardContent>
        </Card>
      </Column>
    </Grid>
    <Grid>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>jQuery</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>PHP</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>Laravel</CardTitle>
          </CardContent>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardContent>
            <CardTitle>SQL</CardTitle>
          </CardContent>
        </Card>
      </Column>
    </Grid>
  </Section>
);

export default Skills;
