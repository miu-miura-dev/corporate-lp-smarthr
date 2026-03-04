export const sendContact = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log("送信データ:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });
};