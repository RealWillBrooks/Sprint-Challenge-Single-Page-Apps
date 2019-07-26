import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './Character/CharacterList';
import WelcomePage from './WelcomePage';
import EpisodesList from './Episodes/EpisodesList';
import LocationsList from './Locations/LocationsList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path="/episodes" component={EpisodesList} />
      <Route component={WelcomePage} />
    </Switch>
  </div>

}
