import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
