import { NextPage } from "next";
import ContactForm from "@/components/ContactForm";

interface Props {}

const Contacts: NextPage<Props> = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contacts;
