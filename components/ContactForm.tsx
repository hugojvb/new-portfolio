import { FC, Dispatch, SetStateAction, MutableRefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type setString = Dispatch<SetStateAction<string>>;

interface Props {
  nameInput: string;
  setNameInput: setString;
  nameError: boolean;
  emailInput: string;
  setEmailInput: setString;
  emailError: boolean;
  messageInput: string;
  setMessageInput: setString;
  messageError: boolean;
  recaptchaRef: MutableRefObject<any>;
  verifyRecaptcha: () => Promise<void>;
  recaptchaError: boolean;
  submitMessage: (e: any) => Promise<void>;
  processing: boolean;
}

const ContactForm: FC<Props> = ({
  nameInput,
  setNameInput,
  nameError,
  emailInput,
  setEmailInput,
  emailError,
  messageInput,
  setMessageInput,
  messageError,
  recaptchaRef,
  verifyRecaptcha,
  recaptchaError,
  submitMessage,
  processing,
}): JSX.Element => {
  return (
    <form className="w-full flex flex-col justify-around items-center my-8 h-auto">
      <div className="relative w-5/6 lg:w-1/2 mt-12">
        <input
          placeholder=" "
          className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary transition-all duration-300 focus:border-primary"
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          required
        />
        <label className="absolute left-0 bottom-2.5" htmlFor="name">
          Name *
        </label>
      </div>
      {nameError && (
        <p className="text-red-400 flex justify-start w-5/6 lg:w-1/2 text-xs mt-1">
          Please insert your name
        </p>
      )}
      <div className="relative w-5/6 lg:w-1/2 mt-12">
        <input
          placeholder=" "
          className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary transition-all duration-300 focus:border-primary"
          type="email"
          name="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
        />
        <label className="absolute left-0 bottom-2.5" htmlFor="email">
          Email *
        </label>
      </div>
      {emailError && (
        <p className="text-red-400 flex justify-start w-5/6 lg:w-1/2 text-xs mt-1">
          Please insert a valid email
        </p>
      )}
      <div className="relative w-5/6 lg:w-1/2 mt-12">
        <textarea
          rows={3}
          minLength={50}
          placeholder=" "
          className="py-2 border-b-2 border-secondary w-full resize-none outline-none hover:border-primary transition-all duration-300 focus:border-primary"
          name="message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          required
        ></textarea>
        <label className="absolute left-0 top-2" htmlFor="message">
          Message *
        </label>
      </div>
      {messageError && (
        <p className="text-red-400 flex justify-start w-5/6 lg:w-1/2 text-xs">
          Please insert a message of at least 50 characters
        </p>
      )}
      <div className="mt-12">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={verifyRecaptcha}
          hl="en"
        />
        {recaptchaError && (
          <p className="text-red-400 flex justify-start text-xs mt-1">
            Please complete the recaptcha
          </p>
        )}
      </div>
      <button
        type="submit"
        onClick={submitMessage}
        className="custom-fill border-2 border-primary rounded-full w-32 h-14 focus:outline-none mt-14"
      >
        {processing ? "Processing . . ." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
