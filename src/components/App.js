import React, {Component} from 'react'
import Head from './Head/Head'
import Todo from './Todo/Todo';

class App extends Component {
        render() {
            return(
                <>
                    <Head/>
                    <Todo/>
                </>
            )
        }
    }



export default App