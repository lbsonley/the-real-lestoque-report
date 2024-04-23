export default (options: any) => {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();
  const key = JSON.stringify(options);

  return useFetch("https://graphql.datocms.com", {
    key,
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
    },
    body: {
      query,
      variables,
    },
    transform: ({ data, errors }) => {
      console.log(errors);
      if (errors) throw new Error(errors[0].message);

      return data;
    },
  });
};
