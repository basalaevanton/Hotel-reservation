import { Button, Htag, P } from '../components';
import type { NextPage } from 'next';
import 'normalize.css';

const Home: NextPage = () => {
  return (
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
            width: '90vw',
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
        </div>
      </div>
    </div>
  );
};

export default Home;
