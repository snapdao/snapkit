import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tabs, TabsProps } from '.'
import { Tab } from './Tab'

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => <>
  <Tabs {...args}>
    <Tab title="Tab1" key={0}></Tab>
    <Tab title="Tab2" key={1}></Tab>
  </Tabs>
</>

export const Example = Template

export default {
  title: 'Tabs',
  component: Tabs,
  args: {}
} as ComponentMeta<typeof Tabs>
