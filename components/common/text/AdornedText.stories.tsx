
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AdornedText } from './AdornedText';
import FlareIcon from '@mui/icons-material/Flare';

export default {
    title: 'components/common/strips/AdornedText',
    argTypes: {
        text: {
            control: 'text',
        },
        variant: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'button', 'overline'],
            },
        },
        StartAdornment: {
            control: {
                type: 'object',
            },
        },
        EndAdornment: {
            control: {
                type: 'object',
            },
        },
        padAdornment: {
            control: {
                type: 'number',
                options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
        },
    },
} as ComponentMeta<typeof AdornedText>;

const Template: ComponentStory<typeof AdornedText> = (args) => <AdornedText {...args} />;

export const UnAdorned = Template.bind({});
UnAdorned.args = {
    text: 'Get A Free Quote Today',
    variant: 'h5',
    StartAdornment: <></>,
    EndAdornment: <></>,
};

export const WithStartAdornment = Template.bind({});
WithStartAdornment.args = {
    text: UnAdorned.args.text,
    variant: UnAdorned.args.variant,
    StartAdornment: <FlareIcon />,
    EndAdornment: <></>,
};

export const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
    text: UnAdorned.args.text,
    variant: UnAdorned.args.variant,
    StartAdornment: <></>,
    EndAdornment: <FlareIcon />,
};

export const WithStartAndEndAdornment = Template.bind({});
WithStartAndEndAdornment.args = {
    text: UnAdorned.args.text,
    variant: UnAdorned.args.variant,
    StartAdornment: WithStartAdornment.args.StartAdornment,
    EndAdornment: WithEndAdornment.args.EndAdornment,
    padAdornment: 1,
};

export const WithPaddedAdornment = Template.bind({});
WithPaddedAdornment.args = {
    text: UnAdorned.args.text,
    variant: UnAdorned.args.variant,
    StartAdornment: WithStartAdornment.args.StartAdornment,
    EndAdornment: WithEndAdornment.args.EndAdornment,
    padAdornment: 1,
};
