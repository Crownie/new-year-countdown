import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components';

interface Props {
  targetDate: Date;
}

const CountdownNav: FunctionComponent<Props> = ({ targetDate }) => {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetYear = targetDate.getFullYear();

  const handleClick = useCallback(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, [setOpen, open]);

  const links = [];
  for (let i = 0; i <= 2; i++) {
    links.push({
      url: `?date=${currentYear + i}-01-01`,
      label: currentYear + i,
      active: targetYear === currentYear + i,
    });
  }
  return (
    <StyledWrapper>
      {open && (
        <StyledNav>
          {links.map(({ url, label, active }) => {
            const activeClass = active ? 'active' : undefined;
            return (
              <a key={url} href={url} className={activeClass}>
                {label}
              </a>
            );
          })}
        </StyledNav>
      )}

      {!open && (
        <StyledHamburgerIcon onClick={handleClick}>
          <span />
          <span />
          <span />
        </StyledHamburgerIcon>
      )}
    </StyledWrapper>
  );
};

export default CountdownNav;
const StyledWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
`;
const StyledNav = styled.nav`
  display: flex;
  a {
    padding: 15px;
    text-decoration: none;
    transition: 0.3s ease;
    color: #5a5a5a;
    opacity: 0.5;
    :hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
    &.active {
      opacity: 1;
    }
  }
`;

const StyledHamburgerIcon = styled.div`
  cursor: pointer;
  padding: 15px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  span {
    display: block;
    width: 28px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 4;
  }
`;
