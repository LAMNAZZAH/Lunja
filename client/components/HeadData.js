import Head from "next/head";

const HeadData = ({title, description, keywords}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default HeadData;



HeadData.defaultProps = {
  title: 'Lunja Academy',
  description: 'Better education with Lunja', 
  keywords: 'university, education, study'
}
