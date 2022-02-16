
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MediumStrip } from './MediumStrip';

export default {
    title: 'components/common/strips/MediumStrip',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof MediumStrip>;

const Template: ComponentStory<typeof MediumStrip> = (args) => <MediumStrip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    align: 'left',
};

export const WithRawText = Template.bind({});
WithRawText.args = {
    children: 'Hello World',
};
