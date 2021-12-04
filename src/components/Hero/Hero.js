import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br />
        My name is Pimanus Kutragoon

      </SectionTitle>
      <SectionText>
        For me, coding is like a magic. One day, I want to use this magic to make this world a better place!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;