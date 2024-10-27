import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  args: {
    bgColor: "white",
  },
  argTypes: {
    bgColor: {
      options: ["white", "dark"],
      control: { type: "select" },
      description: "Définit la couleur de fond de la navbar",
    },
  },
};

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => <Navbar {...args} />,
};

export default meta;