import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "Marbella/Skeleton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = (args: any) => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
