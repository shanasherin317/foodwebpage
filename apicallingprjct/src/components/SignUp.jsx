import 'animate.css';
const SignUpPage = () => {
  return (
    <div className="signup-container animate__animated animate__heartBeat">
     <h2 style={{textAlign:"center"}}>Sign up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email"  required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword"  required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
