import React, { Component } from 'react';
import { GET_ONECOMMENTS,GET_COMMENTS } from "../../request/api";
import './index.scss'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments:[]
         }
    }

    getComments = (id) => {
        GET_ONECOMMENTS(id).then(res => {
            console.log(res.data);
        })
        GET_COMMENTS().then(res => {
            console.log(res.data);
            this.setState({
                comments:res.data
            })
        })
    }

    componentDidMount(){
        this.getComments(1)
    }

    render() { 
        return ( 
            <ul>
                {
                    this.state.comments.map(comment => <li key={comment.id} className="commentItem">
                        <p>{comment.content}</p>
                        <span>{comment.id}</span>
                    </li>)
                }
            </ul>
         );
    }
}
 
export default Layout;