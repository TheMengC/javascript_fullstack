import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput';

class App extends React.Component {
  // 静态属性
  state = {
    commentList: [
      {userName: 'li', comment: '1111'}
    ]
  }
  onPublish = (userName, comment) => {
    console.log(userName, comment);
    let c = { userName, comment }
    // 不可变数据 
    // let obj = {}; let obj1 = obj; obj1.name = 'li';
    // let obj1 = Object.assign({}, obj); 
    let list = this.state.commentList.slice(0);
    list.push(c);
    // this.state.commentList = list
    this.setState({
      commentList: list
    })

  }
  handleDel = (event) => {
    // del i ?
    // data-i 
    const i = parseInt(event.target.dataset.i);
    // this.state.commentList.splice(i, 1);
    const list = this.state.commentList.slice(0);
    list.splice(i, 1);
    this.setState({
      commentList: list
    })
  }
  render() {
    return (
      <>
        <CommentInput onPublish={this.onPublish} />
        {/* <CommentList /> 响应式编程 */}
        { this.state.commentList.length }
        { this.state.commentList && this.state.commentList.map(
          (c, i) => {
            return (
              <li key={i}>
                {c.userName}: {c.comment }
                <button data-i={i} onClick={this.handleDel}>删除</button>
              </li>
            )
          }
        )}
      </>
    )
  }
}

export default App;
