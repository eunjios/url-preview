import { useState } from 'react';
import UrlForm from './UrlForm';
import UrlPreview from './UrlPreview';

function Url() {
  const [url, setUrl] = useState('');

  return (
    <>
      <UrlForm setUrl={setUrl} />
      <UrlPreview url={url} />
    </>
  );
}

export default Url;
