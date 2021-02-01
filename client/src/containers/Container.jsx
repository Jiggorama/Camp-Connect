import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Landing from "../screens/landing/Landing";
import SiteDetail from "../screens/siteDetail/SiteDetail";
import Sites from "../screens/sites/Sites";
import { getSites } from "../services/campsites";

export default function MainContainer(props) {
  const [sites, setSites] = useState([]);
  const { user } = props;
  useEffect(() => {
    const fetchSites = async () => {
      const allSites = await getSites();
      setSites(allSites)
    }
    fetchSites();
  }, []);
  return (
    <Switch>   
      <Route path='/sites/:id'>
        <SiteDetail
          user={user}
        />
      </Route>
      <Route path='/sites'>
        <Sites sites={sites} />
      </Route>
      <Route path='/'>
        <Landing/>
      </Route>
    </Switch>
  )
}
