import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                  integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                  crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
                  integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
                  crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js" integrity="sha512-6DC1eE3AWg1bgitkoaRM1lhY98PxbMIbhgYCGV107aZlyzzvaWCW1nJW2vDuYQm06hXrW0As6OGKcIaAVWnHJw=="></script>
      </Head>
      <body>
     
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
