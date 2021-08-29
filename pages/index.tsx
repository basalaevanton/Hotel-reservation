import {
  Button,
  Htag,
  P,
  Input,
  ButtonIcon,
  TagIcon,
  Rating,
} from '../components';
import type { NextPage } from 'next';
import 'normalize.css';
import { useState } from 'react';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              border: '1px solid gray',
              borderRadius: '5px',
            }}
          >
            <h1> NextJs app...</h1>
            <h2>Hello World!</h2>
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
            <Input placeholder="Email" arrow="right" />
            <Input type="date" placeholder="Email" />
            <ButtonIcon icon="up" />
            <ButtonIcon icon="like">12</ButtonIcon>
            <ButtonIcon icon="arrow" />
            <TagIcon appearance="comfort" />
            <TagIcon appearance="convenience" />
            <TagIcon appearance="cosiness" />
            <Rating isEditable rating={rating} setRating={setRating} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
