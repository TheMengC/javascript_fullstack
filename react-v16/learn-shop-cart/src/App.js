import React, {Component} from 'react'
import logo from './logo.svg' 

// 函数型的组件传递props
function Welcome1(props) {
  return <div>Hello, {props.name}</div>
}

export default class App extends Component {
  constructor (props) {
    super(props)

    // 初始状态
    this.state = {
      count: 0,
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      // 更新状态
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      })
    }, 1000)

    // 注意：setState() 是异步的
    this.setState((prevState, preProps) => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count)
    })
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  render () {
    const name = '蜗牛'
    const jsx = <p>hello, 同学们</p>
    return (
      <div>
        App组件
        <h1>{this.state.count}</h1>
        <p>{this.formatName({firstName: 'tom', lastName: 'Jerry'})}</p>
        <img src={logo} style={{ width: '100px'}} className='img' />
        {jsx}
        <Welcome1 name="tom" />
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}