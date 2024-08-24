import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  url: string;
}

interface Meta {
  title: string | null;
  image: string | null;
  description: string | null;
}

function UrlPreview({ url }: Props) {
  const [meta, setMeta] = useState<Meta>({
    title: null,
    image: null,
    description: null,
  });

  const fetchMeta = async (url: string) => {
    try {
      const response = await axios.get<Meta>('/api/meta', {
        params: { url },
      });
      setMeta(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchMeta(url);
  }, [url]);

  return (
    <div>
      {meta.image && <img src={meta?.image} width={400} />}
      {meta.title && <p>{meta.title}</p>}
      {meta.description && <p>{meta.description}</p>}
      <p>{url}</p>
    </div>
  );
}

export default UrlPreview;
