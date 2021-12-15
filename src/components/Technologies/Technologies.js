import React from 'react';
import { DiCode, DiDatabase, DiFirebase, DiIllustrator, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a Technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, React.js, Blade
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Laravel, SQL, Node.js, MySQL, MariaDB, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, C++, Java, JavaScript, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Illustrator, Adobe After Effect, Blender
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
