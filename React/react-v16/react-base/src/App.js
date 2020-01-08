import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

// jsx
function App() {
  let person = [{age: 16, name: 'li'}, {age: 18, name: 'mei'}]
  // age > 17
  // find 声明式
  let p = person.find(p => p.age > 17);
  // 命令式
  for(let pp of person) {
    if (pp.age > 17) {
      //
    }
  }
  // 所有人年龄
  let ages = person.map(p => p.age);
  console.log(ages);
  // map filter reduce 
  let arr = [0, 1, 2];

  function receiveFromButton(d) {
    console.log('从子组件：', d)
  }
  return (
    <div className="App">
      <Button type="primary" receiveFromButton={receiveFromButton}>登录</Button>
      {
        arr
      }
      {
        person.map((p, i) => {
         return <li key={i}>{p.name}-{p.age}</li>
        })
      }
      {
        person.length > 3 ? <h3>有三个人</h3> : <h3>小于三个人</h3>
      }
      {
        person.length === 2 && <h2>2个人</h2>
      }
      {
        false
      }
      {
        null
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
