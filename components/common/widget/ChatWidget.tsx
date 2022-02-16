import PalavyrChatWidget from 'palavyr-chat-widget';
import cls from './ChatWidget.module.scss';

const iframeId = 'chatDemoIframe';

export const ChatWidget = () => {
    const apiKey = process.env.NEXT_PUBLIC_WIDGET_API_KEY as string;
    const widgetUrl = process.env.NEXT_PUBLIC_WIDGET_URL as string;

    const url = `${widgetUrl}/widget?key=${apiKey}&demo=${false}`;

    return (
        <PalavyrChatWidget
            containerClassName={cls.frame}
            IframeProps={{ id: iframeId }}
            startOpen={true}
            fixedPosition={false}
            src={url}
        />
    );
};
