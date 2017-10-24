import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  height: 7rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  

  //perhaps pass props in to switch between 50% and 100%
  width: 100%;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  list-style: none;

  //keeping the width rem for now as it's suitably 
  //responsive for when the div % needs to be 50%
  //in the event that a logo is used to the left of it
  width: 24rem;

  //and perhaps the width can be a prop value as well
  height: 100%;

  // @media (min-width: 480px) {
    
	// }
`

const Li = styled.li`
  color: #828489;

  &:hover {
    color: #d0ccd0;
  }
`


const navbar = ({ logo, menuItems }) => {
  const active = {
    'color': '#274156'
  }

  return(
    <Div>
      <Ul>      
        { menuItems.map(menuItem => 
          {
            return <Link key={ menuItem.name } style={{ 'textDecoration': 'none' }} to={ menuItem.path }><Li style={ menuItem.active ? active : null }>{ menuItem.name }</Li></Link>
          } 
        )}
      </Ul>
    </Div>
  )
}

export default navbar

