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
        </div>
      </div>
    </div>
  );
};

export default Home;
