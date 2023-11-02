import { Meta, StoryObj } from "@storybook/react";
import ButtonConclude from ".";

const meta = {
  title: "components/buttons/ButtonConclude",
  component: ButtonConclude,
} satisfies Meta<typeof ButtonConclude>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {};

export { ButtonConclude };
