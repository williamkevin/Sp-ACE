import React from 'react'
import styles from '../components/Login.styled.css'

const Login = () => {
  return (
    <body class="body">
    <div>
        <section class="login-form">
            <h1 style={{size:20}}>로그인</h1>
            <form action="">
                <div class="int-area">
                    <input type="text" name="id" id="id" autoComplete='off' required></input>
                    <label for="id"></label> 
                </div>
                <div class="int-area">
                    <input type="password" name="id" id="id" autoComplete='off' required></input>
                    <label for="pw"></label>
                </div>
                <div class="btn-area">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div class="caption">
                <a href="">Forget Password</a>
                <br></br>
                <a href="/signup">회원가입</a>
            </div>
        </section>
        {/* <script>
            let id = $('#id');
            let pw = $('#pw');
            let = btn $('#btn');

            $(btn).on('click', function() {
                if($(id).val() == "") {
                    $(id).next('label').addClass("warning");
                    setTimeout(funcion() {
                        $('label').removeClass('warning');
                    }, 1500);
                }
                else if($(pw).val() == "") {
                    $(pw).next('label').addClass('warning');
                }
            })
        </script> */}
    </div>
    </body>
  )
}

export default Login