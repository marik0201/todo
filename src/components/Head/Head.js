import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { Jumbotron, Button } from 'react-bootstrap'

class Head extends Component {
    state = {
        title: null
    }

   

    render = () => (
        <>
            <Jumbotron>
                <img src='https://image.ibb.co/k7cmVT/logo_w.png' alt='asdfghj'/>
                
                <Button bsStyle="link" href="https://pixelplex.io" target="_blank">PixelPlex</Button>
                <Button bsStyle="link" href=" ">Home</Button>
                {this.state.title}
            </Jumbotron>
        </>
        );
}

export default Head