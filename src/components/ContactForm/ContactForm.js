import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck } from "@fortawesome/pro-light-svg-icons";

import FormControl from "../Form/FormControl";
import Label from "../Form/Label";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import SubmitButton from "../Form/SubmitButton";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();
    setSending(true);

    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("message", message);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbxZgghwJqlQDPNXmqFgokuzd_56aubcoCMXUdTm/exec",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(function(response) {
        setSending(false);
        setSent(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Form className="wow animated fadeIn" onSubmit={handleFormSubmit}>
      <FormControl>
        <Label>Your name:</Label>
        <Input
          type="text"
          name="name"
          onChange={event => setName(event.target.value)}
          required
          disabled={sending || sent}
        />
      </FormControl>

      <FormControl>
        <Label>Your email address:</Label>
        <Input
          type="email"
          name="email"
          onChange={event => setEmail(event.target.value)}
          required
          disabled={sending || sent}
        />
      </FormControl>

      <FormControl>
        <Label>Message:</Label>
        <TextArea
          rows="5"
          name="message"
          onChange={event => setMessage(event.target.value)}
          required
          disabled={sending || sent}
        />
      </FormControl>

      <FormControl>
        <SubmitButton
          submitting={sending}
          success={sent}
          disabled={sending || sent}
        >
          {!sending && (
            <FontAwesomeIcon
              icon={sent ? faCheck : faPaperPlane}
              style={{ marginRight: "0.5rem" }}
            />
          )}
          {sent ? "Sent!" : sending ? "Sending..." : "Send Message"}
        </SubmitButton>
      </FormControl>
    </Form>
  );
};

const Form = styled.form`
  position: relative;

  ${props =>
    props.sent &&
    `
        :before {
            content: "Thanks for the message!";
            position: absolute;
            background-color: rgba(255,255,255, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            text-align: center;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 99;
        }
  `}
`;

export default ContactForm;
