import classnames from 'classnames';
import cls from './DividerWithText.module.scss';
import { Text } from './Text';
export interface DividerWithTextProps {
    text?: string;
    textComponent?: React.ReactElement;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export const DividerWithText = ({ text, textComponent, variant }: DividerWithTextProps) => {
    return (
        <div className={cls.separator}>
            <div className={classnames(cls.line, cls.left)} />
            {text && (
                <Text
                    style={{ flexGrow: 1, transform: 'translate(0px, 7px) scale(1)' }}
                    display="inline"
                    variant={variant}
                >
                    {text}
                </Text>
            )}
            {textComponent}
            <div className={classnames(cls.line, cls.right)} />
        </div>
    );
};
