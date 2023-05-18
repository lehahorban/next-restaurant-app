import { NextPage } from "next";
import ContactForm from "@/components/ContactForm";
import { ToastContainer } from "react-toastify";

interface Props {}

const Contacts: NextPage<Props> = () => {
  return (
    <>
      <ContactForm />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contacts;
