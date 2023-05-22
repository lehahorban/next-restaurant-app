import { NextPage } from "next";

interface FormData {
  name: string;
  phone: string;
  email: string;
  agree: boolean;
}

const Input: NextPage<FormData> = () => {
  return <div></div>;
};

export default Input;
