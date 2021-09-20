     
import React from 'react';
import './Table.scss';


import { Button } from '../Button/Button';

export const Table = ({Role, ButtonOnClick}) => { 

  return (
    <div className='room-table-div'>
      <Button Role={Role} ButtonOnClick={ButtonOnClick}/>
    </div>
    )
  }

