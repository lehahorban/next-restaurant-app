import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { ToastContainer } from "react-toastify";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Сторінка контактів" />
      </Head>
      <ContactForm />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contacts;
