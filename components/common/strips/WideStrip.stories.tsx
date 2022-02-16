
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WideStrip } from './WideStrip';

export default {
    title: 'components/common/strips/WideStrip',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof WideStrip>;

const Template: ComponentStory<typeof WideStrip> = (args) => <WideStrip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    align: 'left',
};

export const WithRawText = Template.bind({});
WithRawText.args = {
    children: 'Hello World',
};
