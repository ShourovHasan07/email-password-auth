import { useRef } from "react";
import auth from "../../firebase/firebase .config";
import { sendPasswordResetEmail } from "firebase/auth";

const HeroRegister = () => {

  const emailRef = useRef(null);


  const handleRegister = (e) => {
    e.preventDefault();
    console.log("from sbmittet");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  const handelForget = (e) => {
    const email = emailRef.current.value
    if(!email){

      console.log("ples provide email" ,emailRef.current.value);
      return;
    }
    else if( ! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log('please valid email')
      return;
    }
    // send validation email
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('please cheack your mail')
    })
    .catch(error=>{
      console.log(error)
    })
    
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handelForget}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
