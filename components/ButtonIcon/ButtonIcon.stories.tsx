import type { Meta, StoryObj } from "@storybook/react"
import { ButtonIcon } from "./ButtonIcon"
import {PhoneArrowDownLeftIcon} from "@heroicons/react/24/solid";

const meta: Meta<typeof ButtonIcon> = {
  title: "ButtonIcon",
  component: ButtonIcon,
  args: {
    intent: "primary",
    underline: false,
    children: "Button Icon",
    size: "lg",
    Icon: PhoneArrowDownLeftIcon
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof ButtonIcon>

export const Default: Story = {
  render: (args) => <ButtonIcon {...args}/>,
}

export default meta
