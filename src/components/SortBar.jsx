import React from 'react';
import {Col, Dropdown, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectShop, setSortCurrent} from "../app/shopSlice";
import {sortTypes} from "../utils/sortTypes";

const SortBar = () => {
  const {sortCurrent} = useSelector(selectShop)
  const dispatch = useDispatch()

  return (
    <Row className="mb-4">
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {sortCurrent.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              sortTypes.map((sortItem) =>
                <Dropdown.Item
                  key={sortItem.type}
                  active={sortItem.type === sortCurrent.type }
                  onClick={() => dispatch(setSortCurrent(sortItem))}
                >
                  {sortItem.name}
                </Dropdown.Item>
              )
            }
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default SortBar;