import Dropdown from "react-bootstrap/Dropdown";

function Dropdown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hard</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;
