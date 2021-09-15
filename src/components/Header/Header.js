import React from 'react';

export function Header ({
  headerBackgroundClassName,
  headerBackgroundSRC,
  headerLogoClassName,
  headerLogoSRC
}) {
  return (
    <header data-testid='header'>
      <img className={headerBackgroundClassName} src={headerBackgroundSRC} alt='Ilustração de Background'/>
      <img className={headerLogoClassName} src={headerLogoSRC} alt='Logo Combos Burguer'/>
    </header>
  )
}