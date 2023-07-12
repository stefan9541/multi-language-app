import "./index.css";

type Props = {
  title: string;
};

export default function Banner({ title }: Props) {
  return (
    <div className="banner-wrapper">
      <img className="banner-img" src="/banner-photo.jpg" alt="banner" />
      <h1 className="banner-header">{title}</h1>
    </div>
  );
}
