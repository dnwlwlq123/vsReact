import React from 'react';
import Test01 from './components/Test01';
import Test02 from './components/Test02';
import Test03 from './components/Test03';


const App = () => {
  return (
    <div>
      {/*최상단에는 반드시 <div></div>로 감싸주어야 한다*/}
      <Test01 />
      <hr/>
      <Test02 />
      <hr/>
      <Test03 />
    </div>
  );
};

export default App;
