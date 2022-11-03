import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function ConfirmResetPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignin = async () => {
    try {
      console.log(form);
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
      {/* <Image
        src={require("../../public/bg-forgot-pw.png")}
        // width={600}
        // height={800}
        // layout="re"
        // style={{ margin: "0" }}
        className="banner--img--forgot"
      /> */}
      <div className="banner--forgot ">
        <div className="overlay">
          <Link href="signin" className="mb-5  bg-primary mt-5">
            <p
              className="back-forgot"
              style={{
                cursor: "pointer",

                marginRight: "3000px",
                color: "white",
              }}
            >
              Back
            </p>
          </Link>
          <h1 className="text-center title-forgot mb-5">
            {" "}
            Don’t worry, we got your back!
          </h1>
          <div className="form-forgot text-center  ">
            <input
              type="text"
              className="input-forgot text-white mb-4"
              placeholder="Enter your email adress"
            />
            <button className="btn btn-forgot mb-5">Send Link</button>
            <p className="desc-forgot mt-5">
              You will receive a link to reset your password. If you haven’t
              received any link, click Resend Link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
