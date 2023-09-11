import { Meta, StoryObj } from "@storybook/react";
import NavigationTabs from ".";

const meta = {
  title: "components/navigation/NavigationTabs",
  component: NavigationTabs,
} satisfies Meta<typeof NavigationTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export { NavigationTabs };
