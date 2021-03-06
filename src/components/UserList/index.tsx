import React from 'react';
import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? "bot" : ""} />

            <strong>{nickname}</strong>

            {isBot && <span>BOT</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Chiwu" />

            <Role>Bot - 1</Role>
            <UserRow nickname="Rythm" isBot />

            <Role>Offline - 1</Role>
            <UserRow nickname="Riven" />
        </Container>
    )
};

export default UserList;