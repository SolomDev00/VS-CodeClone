interface IProps {
  src: string;
}

const IconImg = ({ src }: IProps) => {
  return <img className="w-5 h-5" src={src} />;
};

export default IconImg;
