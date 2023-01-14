function Login2(){
    return(
      <div>
        <Input/>
        <Button onClick={(e)=>{
          console.log(e)
          alert(e.target.value)}}>로그인</Button>
      </div>
    )
  }
  
  class Login extends React.Component{
    constructor(){
      super()
      this.state = {id:"ID를 입력하세요"}
    }
  
    render(){
      return(
        <div>
        <Input onChange={(event)=>this.setState({id:event.target.value})}/>
        <Button value={this.state.id} onClick={(event)=>{alert(this.state.id )}}>Login</Button>
      </div>
      )
    }
  }


// App.js의 App에서 <Login/> 달고 사용하면 됨