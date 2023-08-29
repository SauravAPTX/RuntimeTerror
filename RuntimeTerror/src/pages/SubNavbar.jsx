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
        <Divider orientation="  " />
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
              <DropdownItem key="Toddler">Toddler</DropdownItem>
              <DropdownItem key="Toddler Boy">Toddler Boy</DropdownItem>
              <DropdownItem key="Toddler Girl">Toddler Girl</DropdownItem>
         </DropdownMenu>
         </Dropdown>
        </div>
        <Divider orientation="  " />
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
              <DropdownItem key="Kid">Kid</DropdownItem>
              <DropdownItem key="Boy">Boy</DropdownItem>
              <DropdownItem key="Girl">Girl</DropdownItem>
         </DropdownMenu>
         </Dropdown>
        </div>
        <Divider orientation="  " />
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
              <DropdownItem key="New & Popular">New & Popular</DropdownItem>
              <DropdownItem key="Just Arrived">Just Arrivedy</DropdownItem>
              <DropdownItem key="Halloween Shop">Halloween Shopl</DropdownItem>
              <DropdownItem key="Family Matching Moments">Family Matching Moments</DropdownItem>
              <DropdownItem key="Basics">Basics</DropdownItem>
              <DropdownItem key="Little Planet">Little Planets</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Divider orientation="  " />
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
              <DropdownItem key="Shoes">Shoes</DropdownItem>
              <DropdownItem key="Baby Girl (0-6)">Baby Girl (0-6)</DropdownItem>
              <DropdownItem key="Baby Boy (0-6)">Baby Boy (0-6)</DropdownItem>
              <DropdownItem key="Kid Girl (13-4Y)">Kid Girl (13-4Y)</DropdownItem>
              <DropdownItem key="Kid Boy (13-4Y)">Kid Boy (13-4Y)</DropdownItem>
              <DropdownItem key="Toddler (4-12)">Toddler (4-12)</DropdownItem>
            </DropdownMenu>
          </Dropdown>  
        </div>
        <Divider orientation="  "/>
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
              <DropdownItem key="Sale">Sale</DropdownItem>
              <DropdownItem key="Buy 1, Get 2 Free Denim">Buy 1, Get 2 Free Denim</DropdownItem>
              <DropdownItem key="Doorbusters">Doorbusters</DropdownItem>
              <DropdownItem key="Clearance">Clearance</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
