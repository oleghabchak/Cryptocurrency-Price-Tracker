import Head from 'next/head';
import Link from 'next/link'

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="Layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a>
                        <svg 
                            width="300" 
                            height="300" 
                            viewBox="0 0 256 256" 
                            xmlns="http://www.w3.org/2000/svg" 
                            preserveAspectRatio="xMidYMid"
                        >
                            <path 
                                d="M188.718 69.333l-29.842-13.128H97.003l-29.66 13.372-24.676 27.41L128 210.463l85.333-113.474-24.615-27.655zm17.504 28.39l-26.986 20.194-19.19-28.755 27.152-12.778 19.024 21.34zm-36.893 23.272H85.09l16.766-29.781 50.212.121 17.261 29.66zm-66.8-60.346h51.401l25.306 11.16-25.414 11.07h-51.4L77.263 71.818l25.267-11.17zM68.745 76.384l25.463 12.763-18.234 28.202L49.72 97.723l19.024-21.34zm-9.24 36.207l16.59 13.989 39.472 64.956-56.063-78.945zm27.886 17.643h79.985L128 202.804l-40.61-72.57zm52.986 61.302l39.472-64.956 16.59-13.989-56.062 78.945z" 
                                fill="#36CEF9"/>
                        </svg>
                    </a>
                </Link> 
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;