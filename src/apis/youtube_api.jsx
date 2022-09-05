const youtube_api = () => {
  console.log("Started");
  gapi.client.init({
    "apiKey": import.meta.env.API_Key,
  });
};

gapi.load("client", youtube_api);

export default youtube_api;
