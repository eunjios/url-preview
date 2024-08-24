import { useRef } from 'react';

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}
function UrlForm({ setUrl }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      setUrl(value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="url" ref={inputRef} />
      <button type="submit">확인</button>
    </form>
  );
}

export default UrlForm;
