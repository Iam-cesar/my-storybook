import { Meta, StoryObj } from "@storybook/react";
import ButtonHoverNeon from ".";

const meta = {
  title: "components/buttons/ButtonHoverNeon",
  component: ButtonHoverNeon,
} satisfies Meta<typeof ButtonHoverNeon>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {};

export { ButtonHoverNeon };
