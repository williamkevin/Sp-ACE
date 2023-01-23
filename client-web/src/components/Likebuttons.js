import React from "react";
import { Button } from "semantic-ui-react";

class Buttons extends React.Component{
    constructor(){
        super()
        this.state = {
            likes: 0
        }
    }

    render(){
        return (
            <div>
                <Button
                color="red"
                content="Like"
                icon="heart"
                label={{
                    basic: true,
                    color: "red",
                    pointing: "left",
                    content: this.state.likes,
                }}
                onClick = {() => this.setState(prevState => {
                    return {likes: prevState.likes + 1}
                })}
            />
            </div>
        )
    }
}

export default Buttons