import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import classnames from 'classnames';

export interface AdornedText {
    text?: string;
    StartAdornment?: React.ReactNode;
    EndAdornment?: React.ReactNode;
    variant?: Variant;
    padAdornment?: number;
    textClassName?: string;
    containerClassName?: string;
    fontVariant?: 'primary' | 'secondary';
}

export const AdornedText = ({
    text,
    variant = 'body1',
    fontVariant = 'primary',
    StartAdornment,
    EndAdornment,
    padAdornment,
    textClassName,
    containerClassName,

}: AdornedText) => {
    const adornmentStyle = {
        verticalAlign: 'middle',
        marginRight: padAdornment ? `${padAdornment}rem` : '0rem',
        marginLeft: padAdornment ? `${padAdornment}rem` : '0rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
    };

    return (
        <div className={classnames('flex flex-row justify-around h-full', containerClassName)}>
            {StartAdornment && <div style={adornmentStyle}>{StartAdornment}</div>}
            <Typography
                fontFamily={fontVariant === 'primary' ? 'Fjalla One' : 'Source Sans Pro'}
                justifyItems="center"
                justifyContent="middle"
                className={classnames('pt-1', textClassName)}
                alignItems="middle"
                variant={variant}
            >
                {text}
            </Typography>
            {EndAdornment && <div style={adornmentStyle}>{EndAdornment}</div>}
        </div>
    );
};
