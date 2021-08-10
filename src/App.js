import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { connect } from 'react-redux'
import { decrementAction, incrementAction } from './actions'
import { Button } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  count: state.count,
})
// mapStateToProps decides which portions of the redux store you want to bind to the props of
// this component
// mapStateToProps always needs to return an object

// the keys of mapStateToProps are going to be the props of your connected component

const mapDispatchToProps = (dispatch) => ({
  increment: (howMuch) => dispatch(incrementAction(howMuch)),
  decrement: (howMuch) => dispatch(decrementAction(howMuch)),
})

// incrementAction is an action creator, a function returning me the right action every time

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="success" onClick={() => props.increment(1)}>
          + 1
        </Button>
        <Button variant="success" onClick={() => props.increment(2)}>
          + 2
        </Button>
        <p>{props.count}</p>
        <Button variant="success" onClick={() => props.decrement(1)}>
          - 1
        </Button>
        <Button variant="success" onClick={() => props.decrement(2)}>
          - 2
        </Button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// what connect does is creating a HOC (high order component)
// our component now receives additional props!

// mapStateToProps
// mapDispatchToProps
