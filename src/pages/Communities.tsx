import React, { useState, useEffect } from 'react';
import { getCommunities } from '../api/communities';
import { getHomes } from '../api/homes';
import { CommunitiesModel } from '../model/CommunitiesModel';
import { CommunityModel } from '../model/CommunityModel'
import { Card } from '../components/Card';
import { HomesModel } from '../model/HomesModel';

export const Communities = (props: any) => {
  const [communitiesData, setData] = useState(new CommunitiesModel());
  const [isFetchingCommunitiesData, setIsFetchingCommunitiesData] = useState(false);

  const [homesData, setHomesData] = useState(new HomesModel());
  const [isFetchingHomesData, setIsFetchingHomesData] = useState(false);

  const [errorOccured, setErrorOccured] = useState(false);

  async function loadAndSortCommunities() {
    const responseData = await getCommunities();
    const communityData = new CommunitiesModel(responseData);
    communityData.sortByName();
    setData(communityData);
  }

  async function loadHomes() {
    const responseHome = await getHomes();
    const tempHomesData = new HomesModel(responseHome);
    setHomesData(tempHomesData);
  }

  useEffect(() => {
    const populateData = async () => {
      try {
        setIsFetchingHomesData(true);
        setIsFetchingCommunitiesData(true);

        await loadHomes();
        await loadAndSortCommunities();

        setIsFetchingHomesData(false);
        setIsFetchingCommunitiesData(false);
      } catch (exception) {
        setIsFetchingHomesData(false);
        setIsFetchingCommunitiesData(false);
        setErrorOccured(true);
      }
    };
    populateData();
  }, []);

  if (errorOccured) {
    return <section className="centerAlignContainer">
      <div>There was an issue loading information from the server.<br />Please try reloading the page.</div>
    </section>;
  }

  return (
    <section className="gridContainer">
      <div className="sectionHeader">
        <span className="h1">Communities</span>
        <img src="bg_community.jpg" alt="Community" />
      </div>
      <div className="grid">
        {
          communitiesData.entries.map((community: CommunityModel) =>
            <Card
              key={community.id}
              name={community.name}
              imgUrl={community.imgUrl}
              group={community.group}
              average={homesData.getAverage(community.id)} />)
        }
      </div>
    </section>
  );
}