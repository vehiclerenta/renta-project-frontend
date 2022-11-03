import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toast, ToastContainer } from "react-bootstrap";
export default function Signin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignin = async () => {
    try {
      console.log(form);
      setShowToast(true);
      //   const result = await axios.post("/auth/login", form);
      //   Cookies.set("userId", result.data.data.id);
      //   Cookies.set("token", result.data.data.token);
      //   if (!result.data.data.pin) {
      //     alert("You don't have a pin, please add a pin");
      //     router.push("/create-pin");
      //   } else {
      //     await dispatch(getDataUserById(result.data.data.id));
      //     alert(result.data.msg);
      //     //   proses kondisi pengecekan pin jika ada akan diarahkan ke home jika tidak ada akan diarahkan ke create pin
      //     router.push("/home");
      //   }
      //   console.log(result);
    } catch (error) {
      //   console.log(error);
    }
  };
  return (
    <div>
      <div className="container-fluid w-100">
        <div className="row">
          <div
            className="col-6 bg-auth  auth--left"
            // className=""
            // style={{ marginLeft: "20px" }}
          >
            <Image
              src="/bg-auth.jpg"
              width={600}
              height={800}
              layout="responsive"
              // style={{ margin: "0" }}
            />
          </div>
          <div className="col-6 auth--right ">
            <div className="form form-auth p-3 my-3 mx-5  mt-4 ">
              <div className="form--header  mb-5">
                <p className="title--auth">Login</p>
              </div>
              <div className="   ">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-100 input--auth mb-3"
                  name="email"
                  onChange={handleOnChange}
                />
                <input
                  onChange={handleOnChange}
                  name="password"
                  type="password"
                  placeholder="Password (min 6 character)"
                  className="w-100 input--auth mb-5 "
                />
                {!form.email || !form.password || form.password.length < 6 ? (
                  <button
                    type="button"
                    className="btn btn--auth w-100 mb-2"
                    onClick={handleSignin}
                    disabled
                  >
                    Signin
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn--auth w-100 mb-2"
                    onClick={handleSignin}
                  >
                    Signin
                  </button>
                )}

                <Link href="forgot-password" className="mb-5 color-black ">
                  <p
                    style={{
                      cursor: "pointer",

                      marginRight: "380px",
                    }}
                  >
                    Forgot password?
                  </p>
                </Link>
                <p className="legend mt-5 mb-5">
                  <span> or try another way</span>
                </p>
                <button
                  type="button"
                  className="btn btn--google w-100 mb-4 "
                  //   onClick={handleSignin}
                >
                  <img
                    src="/google.png"
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Signin With Google
                </button>
                <button
                  // type="button"
                  className="btn btn--or w-100 mb-3"
                  //   onClick={handleSignin}
                  href="signup"
                >
                  Signup
                </button>
                <ToastContainer
                  position="top-center"
                  className="p-3 position-fixed toast-container"
                >
                  <Toast
                    show={showToast}
                    onClose={() => {
                      setShowToast(false);
                    }}
                  >
                    <Toast.Header>
                      <strong className="me-auto">Success</strong>
                      <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>Your profile is updated</Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
