import React, { useState } from "react";

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  return (
    <>
      <h1>ログインページ</h1>
      <form>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={signInEmail}
            onChange={e => setSignInEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={signInPassword}
            onChange={e => setSignInPassword(e.target.value)}
          />
        </div>
        <button>SignIn</button>
      </form>
    </>
  );
};

export default SignIn;
