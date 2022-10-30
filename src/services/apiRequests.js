

export const getCompaniesData = async (data={}) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("http://demo2211087.mockable.io/mock",options);
  // console.log(response.json())
  return await response.json();
};
