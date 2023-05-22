import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  name: string;
  phone: string;
  email: string;
  agree: boolean;
};

const ContactForm: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
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
        <h2 className="text-2xl font-bold mb-6">Зворотній звя`зок</h2>

        <div className="mb-4 relative py-1">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Ім`я
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Це поле є обов'язковим" })}
            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm absolute top-20 left-0">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-4 relative py-1">
          <label htmlFor="phone" className="block mb-2 font-semibold">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: "Це поле є обов'язковим" })}
            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm absolute top-20 left-0">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="mb-4 relative py-1">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Електронна пошта
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Це поле є обов'язковим",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Введіть коректну електронну пошту",
              },
            })}
            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm absolute top-20 left-0">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-4 relative py-1">
          <input
            type="checkbox"
            id="agree"
            {...register("agree", { required: "Це поле є обов'язковим" })}
            className="mr-2 leading-tight text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <label htmlFor="agree" className="font-semibold">
            Приймаю умови
          </label>
          {errors.agree && (
            <span className="text-red-500 text-sm absolute top-6 left-0">
              {errors.agree.message}
            </span>
          )}
        </div>
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
