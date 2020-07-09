import ApiBaseConfig from "./ApiBaseConfig";
export const ContrFunc = {
  Controllers: {
    casino: "casino",
  },
  Functions: {
    games: "games",
  },
};

export const getData = async (
  controllername,
  functionname,
  spinnerFunct,
  parameters
) => {
  if (spinnerFunct !== null) {
    spinnerFunct();
  }
  let response = await ApiBaseConfig.get(
    `/${controllername}/${functionname}`,
    parameters
      ? {
          params: {
            ...parameters,
          },
        }
      : null
  );
  return response;
};

export const giveDataAndGetResponse = async (
  controllername,
  functionname,
  data,
  spinnerFunct,
  parameters
) => {
  if (spinnerFunct !== null) {
    spinnerFunct();
  }
  let response = await ApiBaseConfig.post(
    `/${controllername}/${functionname}`,
    {
      ...data,
    },
    parameters
      ? {
          params: {
            ...parameters,
          },
        }
      : null
  );

  return response;
};
export const sendFiles = async (
  controllername,
  functionname,
  data,
  spinnerFunct
) => {
  if (spinnerFunct !== null) {
    spinnerFunct();
  }
  let response = await ApiBaseConfig.post(
    `/${controllername}/${functionname}`,

    data,

    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );

  return response;
};
