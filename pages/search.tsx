import {
  Button,
  Htag,
  P,
  Input,
  ButtonIcon,
  TagIcon,
  Rating,
  Checkbox,
  RadioInput,
  Switch,
  RangeInput,
  Accordion,
  Dropdown,
  Modal,
} from '../componentsUI';
import type { NextPage } from 'next';
import 'normalize.css';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';

const Search: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Button appearance="primary" onClick={toggleModal}>
        click on me
      </Button>
      <Modal showModal={showModal}>ifo</Modal>
    </div>
  );
};

export default withLayout(Search);
