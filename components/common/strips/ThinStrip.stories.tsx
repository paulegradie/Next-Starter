
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThinStrip } from './ThinStrip';
import { WithStartAndEndAdornment } from '../text/AdornedText.stories';
import { Typography } from '@mui/material';

export default {
    title: 'components/common/strips/ThinStrip',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        backgroundColor: {
            control: { type: 'color' },
            defaultValue: '#fafafa',
        },

        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof ThinStrip>;

const Template: ComponentStory<typeof ThinStrip> = (args) => <ThinStrip {...args} />;

export const WithRawText = Template.bind({});
WithRawText.args = {
    children: (
        <Typography>
            This is a thin strip, the background color, content, and its alignment can be controlled via props.
        </Typography>
    ),
    align: 'center',
};

export const WithAdornment = Template.bind({});
WithAdornment.args = {
    children: <WithStartAndEndAdornment {...WithStartAndEndAdornment.args} />,
    align: 'center',
};
