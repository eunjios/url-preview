interface Props {
  url: string;
}

function UrlPreview({ url }: Props) {
  return <div>{url}</div>;
}

export default UrlPreview;
