import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const useGif = (tag) => {
  const [loader, setLoader] = useState(false);
  const [gif, setGif] = useState();
  const API_KEY = "EQHdiTzwImWSQrxTLpOoDIM9bwNsNOcO";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  async function getMeme(tag) {
    setLoader(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    if (data.meta.status === 200 && data.data.length !== 0) {
      const gifUrl = data.data.images.downsized_large.url;
      console.log(gifUrl);
      setGif(gifUrl);
      setLoader(false);
    } else {
      const { data } = await axios.get(url);
      const gifUrl = data.data.images.downsized_large.url;
      console.log(gifUrl);
      setGif(gifUrl);
      setLoader(false);
    }
  }
  /* eslint-disable */

  useEffect(() => {
    getMeme(tag);
  },[]);
/* eslint-enable */


  return { loader, gif, getMeme };
};

export default useGif;
