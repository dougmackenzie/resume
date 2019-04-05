import * as React from "react";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";

import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Card, {
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle
} from "../../components/Card/Card";

import schoolboxLogo from "../../images/schoolbox-logo.png";
import kdsLogo from "../../images/kds-logo.png";
import etapLogo from "../../images/etap-logo.png";

const History = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>History</SectionTitle>
        <SectionSubTitle>My education and employment</SectionSubTitle>
      </SectionHeader>
      <Grid>
        <Column>
          <AlaressCard />
        </Column>

        <Column>
          <KDSCard />
        </Column>

        <Column>
          <EtapCard />
        </Column>
      </Grid>
    </Section>
  );
};

const AlaressCard = () => (
  <Card>
    <CardImage backgroundColor="#0066b0">
      <img src={schoolboxLogo} alt="" />
    </CardImage>
    <CardContent>
      <CardTitle>Alaress Schoolbox</CardTitle>
      <CardSubtitle>Sep 2016 - Current</CardSubtitle>
      <p>
        The last couple of years I've been working on a software suite for
        schools in an agile dev team.
      </p>
      <p>I've been leading the team in the front-end and agile spaces.</p>
    </CardContent>
  </Card>
);

const KDSCard = () => (
  <Card>
    <CardImage backgroundColor="#001F4B">
      <img src={kdsLogo} alt="" />
    </CardImage>
    <CardContent>
      <CardTitle>The King David School</CardTitle>
      <CardSubtitle>Sep 2012 - May 2016</CardSubtitle>
      <p>When I moved to Melbourne I worked in the IT team of a school.</p>
      <p>
        I built web apps to improve many processes and made life easier for much
        of the school community.
      </p>
    </CardContent>
  </Card>
);

const EtapCard = () => (
  <Card>
    <CardImage backgroundColor="#fff">
      <img src={etapLogo} alt="" />
    </CardImage>
    <CardContent>
      <CardTitle>ETAP School Management System</CardTitle>
      <CardSubtitle>May 2010 - Jul 2012</CardSubtitle>
      <p>
        In the homeland (NZ), I worked on a school management system used by
        ~800 schools.
      </p>
      <p>
        I delivered a whole lot of custom work for schools, and improved parts
        of the product.
      </p>
    </CardContent>
  </Card>
);

export default History;
