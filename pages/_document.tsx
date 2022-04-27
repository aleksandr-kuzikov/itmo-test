import Document, {Head, Html, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>

                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument