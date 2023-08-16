import React, {useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AppConfig from "../logic/configs/AppConfig";
import { IContactUs } from "../models/widgets/IContactUs";
import useForm from "../hooks/useForm";

// Constants
import {
  TOPIC_OPTIONS_EN,
  COUNTRY_OPTIONS_EN,
  RECAPTCHA_CONFIG as recaptcha
} from "../logic/constants/contact-us/EN";
import { TOPIC_OPTIONS_IT, COUNTRY_OPTIONS_IT } from "../logic/constants/contact-us/IT";
import { TOPIC_OPTIONS_FR, COUNTRY_OPTIONS_FR } from "../logic/constants/contact-us/FR";

// Components
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import Input from "../components/UI/Input/Input";
import Row from "../components/UI/Row/Row";
import Text from "../components/UI/Text/Text";
import Textarea from "../components/UI/Textarea/Textarea";
import styled from "styled-components";
import Dropdown from "../components/Dropdown/Dropdown";

// Services
import ReCAPTCHA from "react-google-recaptcha";
import { MAILGUN_SEND_MESSAGE } from "../services/mailgun";

interface IOption {
  label: string,
  value: string,
}

const { html } = AppConfig;
let topicOptions: IOption[];
let countryOptions: IOption[];

const ContactUs = ({
  captchaLabel,
  descriptions,
  disclaimer,
  forms,
  header,
  recipient,
  requiredField,
  submit,
}: IContactUs) => {

  const [captcha, setCaptcha] = useState(null);

  const {
    error,
    formData,
    isValid,
    register,
    reset,
    validateAll,
  } = useForm();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();
  const { locale } = router;
  
  useEffect(() => {
    switch (locale) {
      case "fr":
        topicOptions = TOPIC_OPTIONS_FR;
        countryOptions = COUNTRY_OPTIONS_FR;
        break;
      case "it":
        topicOptions = TOPIC_OPTIONS_IT;
        countryOptions = COUNTRY_OPTIONS_IT;
        break;
      default:
        topicOptions = TOPIC_OPTIONS_EN;
        countryOptions = COUNTRY_OPTIONS_EN;
        break;
    }
  }, [locale])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getInputName = (label: string) => {
    if (label) {
      switch (label) {
        case "Name": return "name"
        case "Surname": return "surname"
        case "Country of residence": return "country"
        case "E-mail": return "email"
        case "Topic (please choose from the following)": return "topic"
        case "Title of your message": return "title"
        case "Message": return "message"
        default: return "";
      }
    }
    return "";
  }

  const handleSendMessage = async () => {
    validateAll();
    if (isValid && captcha !== null) {
      const response = await MAILGUN_SEND_MESSAGE({
        country: formData.country.value,
        email: formData.email.value,
        message: formData.message.value,
        name: formData.name.value,
        surname: formData.surname.value,
        title: formData.title.value,
        topic: formData.topic.value,
      });
      
      if (response) {
        alert("Message sent successfully.");
        reset();
        scrollToTop();
        setCaptcha(null);
        if (recaptchaRef?.current) {
          recaptchaRef?.current?.reset();
        }
        return;
      }

      scrollToTop();
      return console.log("Message sending failed. Please try again later.")
    }

    console.log("Please fill up the form properly and complete the form.");
    return scrollToTop();
  };

  const handleRecaptcha = (value: any) => {
    if (value) {
      return setCaptcha(value);
    }

    return setCaptcha(null);
  }

  const handleErroredCaptcha = () => setCaptcha(null);

  const handleExpiredCaptcha = () => setCaptcha(null);
  
  return (
    <Container
      margin="0 auto"
      maxWidth={{
        _: "640px"
      }}
      pb={{
        _: "40px",
        tablet: "120px"
      }}
      pt={{
        _: "24px",
        tablet: "48px"
      }}
      px={{
        _: "16px",
        tablet: "0px"
      }}
    >
      {/* FORM TITLE */}
      <Text
        fontFamily="Avenir Bold"
        fontSize="24px"
        pb={{
          _: "8px"
        }}
      >
        {html(header)}
      </Text>

      {/* FORM DESCRIPTION */}
      <Text
        fontFamily="Avenir Regular"
        fontSize="18px"
        pb={{
          _: "8px"
        }}
      >
        {html(descriptions)}
      </Text>

      {/* REQUIRED FIELD */}
      <Row>
        <Text
          color="#e95145"
          fontSize="14px"
          pr="3px"
        >
          *
        </Text>
        <Text
          fontFamily="Avenir Regular"
          fontSize="14px"
          pb="8px"
        >
          {html(requiredField)}
        </Text>
      </Row>

      {/* FORM INPUTS */}
      {forms && forms?.map((input: any, key: number) => {

        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const name = input?.name || getInputName(input?.label);
        const inputAttributes = {
            required: input?.required,
            type: input?.type,
        };

        switch (input?.type) {
          case "text":
            return (
              <InputWrapper key={key}>
                <Input
                  error={error[name]}
                  errorMessage={error[name]}
                  label={input?.label}
                  name={name}
                  placeholder={input?.placeholder}
                  required={input?.required}
                  {...register(name, { ...inputAttributes })}
                />
              </InputWrapper>
            );
          case "email":
            return (
              <InputWrapper key={key}>
                <Input
                  error={error[name]}
                  errorMessage={error[name]}
                  label={input?.label}
                  name={name}
                  placeholder={input?.placeholder}
                  required={input?.required}
                  {...register(name, { ...inputAttributes, pattern: emailPattern })}
                />
              </InputWrapper>
            );
          case "select":
            return (
              <InputWrapper key={key}>
                <Dropdown
                  error={error[name]}
                  errorMessage={error[name]}
                  label={input?.label}
                  name={name}
                  placeholder={input?.placeholder}
                  required={input?.required}
                  options={
                    name === "country"
                      ? countryOptions
                      : topicOptions
                  }
                  {...register(name, { ...inputAttributes })}
                />
              </InputWrapper>
            );
          case "textarea":
            return (
              <InputWrapper key={key}>
                <Textarea
                  error={error[name]}
                  errorMessage={error[name]}
                  label={input?.label}
                  maxLength={200}
                  name={name}
                  placeholder={input?.placeholder}
                  required={input?.required}
                  showCharsCount
                  rows={4}
                  {...register(name, { ...inputAttributes })}
                />
              </InputWrapper>
            );
          default:
            return null;
        }
      })}

      {/* GOOGLE CAPTCHA */}
      {captchaLabel && (
        <Text
          fontFamily="Avenir Bold"
          fontSize="10px"
          pb={1}
          pt={1}
        >
          {html(captchaLabel)}
        </Text>
      )}
      <ReCAPTCHA
        ref={recaptchaRef}
        onChange={handleRecaptcha}
        onErrored={handleErroredCaptcha}
        onExpired={handleExpiredCaptcha}
        sitekey={recaptcha?.siteKey}
      />

      {/* DISCLAIMER */}
      <Text
        fontFamily="Avenir Regular"
        fontSize="14px"
        py={{
          _: "24px"
        }}
      >
        {html(disclaimer)}
      </Text>

      {/* SEND MESSAGE */}
      <Button
        children={submit}
        minWidth={{
          _: "100%",
          tablet: "154px",
        }}
        onClick={handleSendMessage}
        variant="primary"
      />
    </Container>
  );
};
const InputWrapper = styled.div`
  padding: 8px 0;
`;

export default ContactUs;
