import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage author="Chiwu" date="08/03/2021" content="!play" />

                <ChannelMessage author="Rythm" date="08/03/2021" content={
                    <>
                        <Mention>@Chiwu</Mention> Music
                    </>
                }
                    hasMention
                    isBot
                />

                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
                <ChannelMessage author="Chiwu" date="08/03/2021" content="Mensagem de teste" />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #geral" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;