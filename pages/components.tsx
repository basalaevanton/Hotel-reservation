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

const Home: NextPage = () => {
  // rating
  const [rating, setRating] = useState<number>(3);
  //

  // radioInput
  const [selectedInput, setSelectedInput] = useState<string>('');

  const handleChange = (e: string) => {
    setSelectedInput(e);
  };
  //

  // Switch Button
  const [toggle, setToggle] = useState<boolean>(false);
  const switchChange = () => {
    setToggle(!toggle);
  };
  //

  // Range Input

  //

  //

  // modal

  //

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        // height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          border: '1px solid gray',
          borderRadius: '5px',
          background: 'white',
        }}
      >
        <>
          <h1> NextJs app...</h1>
          <h2>Hello World!</h2>
        </>

        <Button appearance="primary">click on me</Button>

        <Button appearance="ghost">click on me</Button>
        <Button border="primary">click on me</Button>
        <Button border="ghost">click on me</Button>
        <Button unactive>click on me</Button>
        <Button appearance="primary" arrow="right">
          click on me
        </Button>
        <Htag tag="h1">This one is the sub-section or widget title </Htag>
        <Htag tag="h2">This one is the sub-section or widget title </Htag>
        <Htag tag="h3">This one is the sub-section or widget title </Htag>
        <P>
          This is the body text which is used for most of the design, like
          paragraphs, lists, etc.
        </P>
        <Input placeholder="Email" arrow />
        <Input type="date" placeholder="Email" />
        <ButtonIcon icon="up" />
        <ButtonIcon icon="like">12</ButtonIcon>
        <ButtonIcon icon="arrow" />
        <TagIcon appearance="comfort" />
        <TagIcon appearance="convenience" />
        <TagIcon appearance="cosiness" />
        <Rating isEditable rating={rating} setRating={setRating} />
        <Checkbox label="checkbox" />
        <Accordion title="Title">
          <Checkbox label="checkbox1" />
          <Checkbox label="checkbox2" />
          <Checkbox label="checkbox3" />
          <Checkbox label="checkbox4" />
          <Checkbox label="checkbox5" />
        </Accordion>
        <Checkbox
          label="Широкий коридор"
          info="Ширина коридоров в номере не менее 91 см."
        />

        <RadioInput
          name="gender"
          label="Мужчина"
          isChecked={selectedInput === 'Мужчина'}
          handleChange={handleChange}
        />
        <RadioInput
          name="gender"
          label="Женщина"
          isChecked={selectedInput === 'Женщина'}
          handleChange={handleChange}
        />
        <Switch
          label="Получать спецпредложения"
          isChecked={toggle}
          handleToggle={switchChange}
        />

        <RangeInput
          min={0}
          max={500}
          onChange={({ min, max }: { min: number; max: number }) =>
            console.log(`min = ${min}, max = ${max}`)
          }
        />
        <Dropdown title="room" />
        <Dropdown title="guest" />

        <p>end</p>
      </div>
    </div>
  );
};

export default withLayout(Home);
