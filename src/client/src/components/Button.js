import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Button = ({ onChange }) => {
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Item">
        <Dropdown.Item as="button" onSelect={() => onChange("carrot")}>
          carrot
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("apple")}>
          apple
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("grapes")}>
          grapes
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("cake")}>
          cake
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("tv")}>
          tv
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("crackers")}>
          crackers
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("chips")}>
          chips
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("ham")}>
          ham
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onChange("beef")}>
          beef
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Button;
