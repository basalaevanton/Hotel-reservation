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

import { useActions, useTypedSelector } from '../hooks';

const Search: NextPage = () => {
  const { showModalRegistration } = useTypedSelector((state) => state.ui);
  const { openModal, closeModal } = useActions();

  const toggleModal = () => {
    openModal();
  };
  return (
    <div>
      <Button appearance="primary" onClick={toggleModal}>
        click on me
      </Button>
      <Modal showModal={showModalRegistration}>ifo</Modal>
    </div>
  );
};

export default withLayout(Search);
