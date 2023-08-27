import React from 'react';
import { Divider, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Subnavbar = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">NextUI Components</h4>
        <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-small">
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize"
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="Baby">Baby</DropdownItem>
              <DropdownItem key="Baby Boy">Baby Boy</DropdownItem>
              <DropdownItem key="Baby Girl">Baby Girl</DropdownItem>
              <DropdownItem key="Baby Neutral">Baby Neutral</DropdownItem>
              <DropdownItem key="Baby Nursery & Gear">Baby Nursery & Gear</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};

export default Subnavbar;
