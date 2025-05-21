const SEO = ({ title, name, content }) => {
  return (
    <>
      <title>{title}</title>
      <meta name={name} content={content} />
    </>
  );
};

export default SEO;
