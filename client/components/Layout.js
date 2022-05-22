import Head from 'next/head';
import Footer from './Footer';

export default function Layout({title, description, keywords, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords} />
            </Head>
            {children}
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Lunja Academy',
    description: 'Better education with Lunja', 
    keywords: 'university, education, study'
}