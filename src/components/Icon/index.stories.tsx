import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  CloseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  AvatarIcon,
  DeliveryAutoIcon,
  DeliveryManIcon,
  HeartIcon,
  FavIcon,
  LogoIcon,
  PepperIcon,
  PixIcon,
  ReloadIcon,
  ErrorIcon,
  AddIcon,
  EditIcon,
  InfoIcon,
  SubtractIcon,
  TrashCanIcon,
  SearchIcon,
  PlantIcon,
  DolarSignIcon,
  SuccessIcon,
  CheckIcon,
  StarIcon,
  ShareIcon,
} from ".";
import { IconBase } from "./svg/base";

type Story = StoryObj<typeof IconBase>;

const meta: Meta<typeof IconBase> = {
  title: "Icons",
  component: IconBase,
  args: {
    color: "#7B1FA2",
  },
  argTypes: {
    color: {
      control: {
        type: "color",
        presetColors: ["#7B1FA2"],
      },
    },
  },
};

const defaultArgs = {
  color: "red",
  size: 25,
};

export const ArrowDown: Story = {
  render: (args) => <ArrowDownIcon {...defaultArgs} {...args} />,
};

export const ArrowLeft: Story = {
  render: (args) => <ArrowLeftIcon {...defaultArgs} {...args} />,
};

export const ArrowRight: Story = {
  render: (args) => <ArrowRightIcon {...defaultArgs} {...args} />,
};

export const Close: Story = {
  render: (args) => <CloseIcon {...defaultArgs} {...args} />,
};

export const Add: Story = {
  render: (args) => <AddIcon {...defaultArgs} {...args} />,
};

export const Avatar: Story = {
  render: (args) => <AvatarIcon {...defaultArgs} {...args} />,
};

export const DeliveryAuto: Story = {
  render: (args) => <DeliveryAutoIcon {...defaultArgs} {...args} />,
};

export const DeliveryMan: Story = {
  render: (args) => <DeliveryManIcon {...defaultArgs} {...args} />,
};

export const Heart: Story = {
  render: (args) => <HeartIcon {...defaultArgs} {...args} />,
};

export const Fav: Story = {
  render: (args) => <FavIcon {...defaultArgs} {...args} />,
};

export const Logo: Story = {
  render: (args) => <LogoIcon {...defaultArgs} {...args} />,
};

export const Pepper: Story = {
  render: (args) => <PepperIcon {...defaultArgs} {...args} />,
};

export const Pix: Story = {
  render: (args) => <PixIcon {...defaultArgs} {...args} />,
};

export const Reload: Story = {
  render: (args) => <ReloadIcon {...defaultArgs} {...args} />,
};

export const Error: Story = {
  render: (args) => <ErrorIcon {...defaultArgs} {...args} />,
};

export const Edit: Story = {
  render: (args) => <EditIcon {...defaultArgs} {...args} />,
};

export const Info: Story = {
  render: (args) => <InfoIcon {...defaultArgs} {...args} />,
};

export const Subtract: Story = {
  render: (args) => <SubtractIcon {...defaultArgs} {...args} />,
};

export const Star: Story = {
  render: (args) => <StarIcon {...defaultArgs} {...args} />,
};

export const Share: Story = {
  render: (args) => <ShareIcon {...defaultArgs} {...args} />,
};

export const TrashCan: Story = {
  render: (args) => <TrashCanIcon {...defaultArgs} {...args} />,
};

export const Plant: Story = {
  render: (args) => <PlantIcon {...defaultArgs} {...args} />,
};

export const DolarSign: Story = {
  render: (args) => <DolarSignIcon {...defaultArgs} {...args} />,
};

export const Success: Story = {
  render: (args) => <SuccessIcon {...defaultArgs} {...args} />,
};

export const Check: Story = {
  render: (args) => <CheckIcon {...defaultArgs} {...args} />,
};

export const Search: Story = {
  render: (args) => <SearchIcon {...defaultArgs} {...args} />,
};

export default meta;
