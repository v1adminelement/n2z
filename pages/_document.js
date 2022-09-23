import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
       
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

         
          <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"/>

          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&display=swap" 
            rel="stylesheet"
          />

          <link
             href="https://fonts.googleapis.com/icon?family=Material+Icons"
             rel="stylesheet" 
          />          
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument