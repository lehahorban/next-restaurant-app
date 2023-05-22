import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormType } from "./FormType";
import Input from "../Input/Input";

const ContactForm: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    toast.success("Ваше повідомлення відправлено");
    reset();
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="bg-transparent p-4">
      <button
        type="button"
        onClick={navigateToHome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
      >
        На головну
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[440px] mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Зворотний зв`язок</h2>

        <Input label="Ім`я" name="name" errors={errors} register={register} />
        <Input
          label="Телефон"
          name="phone"
          errors={errors}
          register={register}
        />

        <Input
          label="Електронна пошта"
          name="email"
          errors={errors}
          register={register}
        />
        <Input
          label="Приймаю умови"
          name="agree"
          checkbox={true}
          errors={errors}
          register={register}
        />

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md hover:bg-green-600"
        >
          Відправити
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
