import { Text } from '../text/Text';
import cls from './Quote.module.scss';

export interface QuoteProps {
    children: React.ReactNode;
}

export const Quote = ({ children }: QuoteProps) => {
    return (
        <div className={cls.quoteContainer}>
            <Text className={cls.text}>{children}</Text>
        </div>
    );
};
