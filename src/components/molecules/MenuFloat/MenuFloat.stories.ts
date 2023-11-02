import { Meta, StoryObj } from "@storybook/react";
import MenuFloat from ".";

const meta = {
  title: "components/navigation/MenuFloat",
  component: MenuFloat,
} satisfies Meta<typeof MenuFloat>;

export default meta;
type Story = StoryObj<typeof meta>;

export { MenuFloat };
