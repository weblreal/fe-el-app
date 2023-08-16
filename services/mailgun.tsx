import axios from "axios";

const BASE_URL = "https://api.mailgun.net/v3";
const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY;
const DOMAIN = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN;

const token = `api:${API_KEY}`;
const encodedToken = Buffer.from(token).toString('base64');

const config: any = {
  headers: {
    "Authorization": `Basic ${encodedToken}`,
    "Content-Type": "multipart/form-data",
  }
}

export const MAILGUN_SEND_MESSAGE = async (details: any) => {
  let data: any;
  const url = `${BASE_URL}/${DOMAIN}/messages`;

  const {
    country,
    email,
    message,
    name,
    surname,
    title,
    topic
  } = details;

  const getRecipient = (topic: string) => {
    switch (topic) {
      case "Financial information": return "ir@essilorluxottica.com";
      case "Press/Media relation": return "media@essilorluxottica.com";
      default: return "contact@essilorluxottica.com"
    }
  };

  const payload = {
    from: email,
    to: `${getRecipient(topic)}, mark.jumarang@essilor.com`,
    subject: "Contact US form",
    html: `
      <html>
        <strong>Title of the message</strong><br>
        ${title}<br><br>

        <strong>Topic</strong><br>
        ${topic}<br><br>

        <strong>Name</strong><br>
        ${name}<br><br>

        <strong>Surname</strong><br>
        ${surname}<br><br>

        <strong>Country of residence</strong><br>
        ${country}<br><br>

        <strong>Email</strong><br>
        <a href=mailto:${email}>${email}</a><br><br>

        <strong>Message</strong><br>
        ${message}<br><br>
      </html>
    `,
    "o:dkim": "false",

  }

  try {
    const response = await axios.post(url, payload, config)
    data = {
      ...response
    }
  } catch (err) {
    console.error("MAILGUN ERROR", err);
    data = null;
  }

  return data
};