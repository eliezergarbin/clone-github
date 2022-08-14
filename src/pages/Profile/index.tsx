import React from "react";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">21</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"eliezergarbin"}
            name={"Eliezer Nascimento"}
            avatarUrl={"https://avatars.githubusercontent.com/u/59988262?v=4"}
            followers={18}
            following={16}
            company={"me"}
            location={"SP, Brazil"}
            email={"eliezergarbin1@gmail.com"}
            blog={"linkedin.com/in/eliezergarbin"}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"eliezergarbin"}
                  reponame={"Ecoleta"}
                  description={
                    "Ecoleta Project: instructed by Diego Fernandes CTO at Rocketseat"
                  }
                  language={n % 3 === 0 ? "JavaScript" : "JavaScript"}
                  stars={3}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
