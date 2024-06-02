import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../../../utils/Input";
import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form[("username", "email", "password", "rePassword")] === "") {
      toast.error("All fields are required");
    } else if (form["password"] !== form["rePassword"]) {
      toast.error("Your passwords don't match");
      return;
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: user.uid,
          username: form.userName,
          email: form.email,
          userImg: "",
          bio: "",
        });
        navigate("/");
        toast.success("User has been created");
        setModal(false);
    }
  }
  };
  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl">Sign Up with email</h2>
      <p className="w-full sm:w-[25rem] mx-auto py-[3rem]">
        Enter the email address associated with your account, and we'll send a
        magic link to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="username" title="username" />
        <Input form={form} setForm={setForm} type="email" title="email" />
        <Input form={form} setForm={setForm} type="password" title="password" />
        <Input
          form={form}
          setForm={setForm}
          type="password"
          title="rePassword"
        />
        <button className="px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">
          Sign Up
        </button>
      </form>
      <button
        onClick={() => setSignReq("")}
        className="mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto"
      >
        <MdKeyboardArrowLeft /> All sign Up options
      </button>
    </div>
  );
};

export default SignUp;
