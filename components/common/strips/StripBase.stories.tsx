
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StripBase } from './StripBase';

export default {
    title: 'components/common/strips/StripBase',
    argTypes: {
        height: {
            options: ['40px', '500px'],
            defaultValue: '40px',
        },
        backgroundColor: {
            defaultValue: 'white',
        },
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof StripBase>;

const Template: ComponentStory<typeof StripBase> = (args) => <StripBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    align: 'left',
};

export const WithRawText = Template.bind({});
WithRawText.args = {
    children: 'Hello World',
    backgroundColor: '#ffffff',
};
