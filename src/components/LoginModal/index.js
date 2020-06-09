import React from "react";

function LoginModal(props) {
  return (
    <div className="LoginModal">
      <form action="" method="get" class="form-example">
        <div class="form-example">
          <label for="name">Enter a screen name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="form-example">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div class="form-example">
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
