import React from 'react';
import {Comment, Form, Button, Header} from 'semantic-ui-react';
import moment from "moment"

import sw2 from "./sw2.jpeg"
// import sw3 from "./sw3.jpeg"
// import sw4 from "./sw4.jpeg"
// import sw5 from "./sw5.jpeg"

function SingleComment (detail) {
    return(
        <Comment>
        <Comment.Content>
        <Comment.Avatar as='a' src={sw2}/>
        <Comment.Author as='a'>세원</Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>
        </Comment.Content>
        </Comment>
    )
}

class Comments extends React.Component{

    constructor(){
        super()
        this.state = {
            inputContent: "",
            inputTime: 0,
            commentsList: []
        }
    }

    render(){
      console.log(this.state.commentsList)
      return(
        <Comment.Group style={{marginLeft:"380px"}}>
            <Header as='h3' dividing>후기</Header>

        {this.state.commentsList.map(comments => <SingleComment info ={comments}/>)}

        <Form reply>
            <Form.TextArea
            value={this.state.inputContent} 
            placeholder="후기를 남겨주세요"
            onChange={(e) => this.setState({inputContent: e.target.value})}
            />
            <Button
            content='후기 작성'
            labelPosition='left'
            icon='edit'
            secondary
            onClick={() => { if (this.state.inputContent !== ""){
                this.setState((prevState) => {
                    return {
                        commentsList : [...prevState.commentsList, {content: this.state.inputContent, time: moment().format("YYYY/MM/DD HH:mm:ss")} ],
                        inputContent: ""
                }
            });
            }
            else {
                alert("내용을 입력해주세요")
            }}
    }
            />
        </Form>
        </Comment.Group>
      )
    }
  }

  export default Comments
