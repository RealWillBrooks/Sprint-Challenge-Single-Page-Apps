import React from 'react'
import { Card } from 'semantic-ui-react'


export default function CharacterCard (props) {

  return (
    <Card className='character-card'
    image={props.img} alt='Fav Cartoon (Rick & Morty) characters'
    header={props.name}
    meta={props.status}
    description={props.species} 
    extra={props.gender}/>
  );
}
