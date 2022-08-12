import React from 'react';
import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'eliezergarbin'}
                        name={'Eliezer Nascimento'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/59988262?v=4'}
                        followers={18}
                        following={16}
                        company={'me'}
                        location={'SP, Brazil'}
                        email={'eliezergarbin1@gmail.com'}
                        blog={'linkedin.com/in/eliezergarbin'}
                    />

                </LeftSide>
                <RightSide></RightSide>
            </Main>
        </Container>
    );
}

export default Profile;