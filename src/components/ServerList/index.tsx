import React from 'react';
import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton mentions={10}/>
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton hasNotifications />
        </Container>
    )
};

export default ServerList;