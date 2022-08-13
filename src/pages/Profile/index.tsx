import React from "react";
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
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
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
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
