import * as React from 'react'
import styled from 'styled-components'

import Section from '../../components/Section/Section'

const ContactCard = styled.div`
  text-align: center;
  font-size: 14px;
`

const LinkButton = styled.a`
  padding: 10px;
  border: 2px solid #f6921e;
  color: #ccc;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.1s;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.1em;

  :hover {
    background: #f6921e;
    color: black;
  }
`

const Contact = () => {
  return (
    <Section backgroundColor={'#1c1e26'} color={'#ccc'}>
      {/* <SectionHeader>Contact me</SectionHeader> */}
      <ContactCard>
        <p style={{ marginBottom: '30px' }}>The best way to contact me is at</p>
        <LinkButton href="mailto:dougmacknz@gmail.com">
          dougmacknz@gmail.com
        </LinkButton>
      </ContactCard>
    </Section>
  )
}

export default Contact
