import { Meta, StoryObj } from "@storybook/react";
import Editor from ".";

const meta = {
  title: "components/editor/Editor",
  component: Editor,
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export { Editor };
