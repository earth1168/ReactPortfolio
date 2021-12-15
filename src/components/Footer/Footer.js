import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillFacebook, AiFillHighlight } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(+66)840724199">(+66)840724199</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pimanus1234@gmail.com">pimanus1234@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's use this magic to make this world a better place!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/earth1168">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/blacklotus1168">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/earthgy.pimanus">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.artstation.com/earthgee">
            <AiFillHighlight size="3rem" />
          </SocialIcons>
        </SocialContainer> 
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;


