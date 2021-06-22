import { FC, useCallback, useState } from 'react';
import styled                        from 'styled-components';
import Image                         from 'next/image';
import Hamburger                     from '~/src/components/Header/hamburger';
import Menu                          from '~/src/components/Header/menu';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  
  const toggle = useCallback(() => setOpen(!open), [open]);
  
  return <Layout>
    <div>
      <Image src={process.env.basePath + '/images/logo.png'} width={ 64 } height={ 64 }/>
    </div>
    <div>
      <Title>桐朋祭</Title>
    </div>
    <div>
      <Hamburger open={ open } toggle={ toggle }/>
    </div>
    <Menu display={ open }/>
  </Layout>;
};

const Layout = styled.header`
  position: fixed;
  width: calc(100% - 2rem);
  height: 2rem;
  display: flex;
  align-items: stretch;

  z-index: 100;
  background-color: rgba(255,255,255, 0.8);
  padding: .5rem 1rem;

  > div {
    &:first-child {
      width: 2rem;
      height: 2rem;
    }

    &:nth-child(2) {
      margin: 0 1rem;
      flex-grow: 1;
    }

    &:nth-child(3) {
      z-index: 10;
    }
  }
`;

const Title = styled.a`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
`;

export default Header;