/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Close from "../close/Close";
import Vertical from "../vertical/Vertical";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {!isOpen && (
        <>
          <Close toggle={toggle} />
          <Button text="DELETE" style="delete" />
          <Button text="+" style="plus" />
          <Button text="go!" style="go" />
          <Button text="CANCEL" style="cancel" />
          <Button text="CREATE" style="create" />
        </>
      )}
      {isOpen && (
        <Modal toggle={toggle}>
          <h3>Delete this Quest?</h3>
          <Button text="CANCEL" style="cancel" toggle={toggle} />
          <Vertical />
          <Button text="DELETE" style="delete" />
        </Modal>
      )}
    </>
  );
};

export default Main;
