const Image = ({
  src,
  alt,
  customStyle,
}: {
  src: string;
  alt: string;
  customStyle?: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${customStyle}`}
      onLoad={(event) => event.currentTarget.classList.add("loaded")}
    />
  );
};

export default Image;
