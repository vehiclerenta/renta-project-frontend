import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
export default function ChangePassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangePassword = async () => {
    try {
      console.log(form.newPassword);
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
            className="col-6 bg-auth bg-primary auth--left"
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
          <div className="col-6 ">
            <div className="form p-3 my-3 mx-5  mt-4">
              <div className="form--header  mb-4">
                <p className="title--auth mb-4">Reset Password</p>
                <p className="desc-auth ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam adipisci facilis eveniet necessitatibus, aspernatur
                  reiciendis porro! Aspernatur dolor aperiam quasi dolorem ea
                  reprehenderit praesentium cumque. Cum adipisci odit provident
                  exercitationem?
                </p>
              </div>
              <div className="form-auth py-5 ">
                <input
                  type="password"
                  placeholder="New Password (min 6 character)"
                  className="w-100 input--auth mb-3"
                  name="newPassword"
                  onChange={handleOnChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password "
                  className="w-100 input--auth mb-5"
                  name="confirmPassword"
                  onChange={handleOnChange}
                />
                {!form.newPassword ||
                !form.confirmPassword ||
                form.newPassword.length < 6 ||
                form.newPassword !== form.confirmPassword ? (
                  <button
                    type="button"
                    className="btn btn--auth w-100 mb-2"
                    onClick={handleChangePassword}
                    disabled
                    style={{ cursor: "notAllowed" }}
                    //   { form.confirmPassword === null && }
                  >
                    Change Password
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn--auth w-100 mb-2"
                    onClick={handleChangePassword}
                    //   { form.confirmPassword === null && }
                  >
                    Change Password
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
