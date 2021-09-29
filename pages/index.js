import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grupo Silva Assunção</title>
        <meta name="description" content="Qualite Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div class='navBar'>
          <nav>
            <ul>
                <li>Home</li>
                <li>Quem Somos</li>
                <li>Produtos</li>
                <li>Compre Online</li>
                <li>Contato</li>
            </ul>  
          </nav>
        </div>
        <h1 className={styles.title}>
          Grupo Silva Assunção
        </h1>

        <p className={styles.description}>
          Fornecendo o Essencial{' '}
          <code className={styles.code}>Só pedir</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Gás em Botijas &rarr;</h2>
            <p>Gás em botijas para onde precisar levar.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Produtos de Limpeza &rarr;</h2>
            <p>Com os químicos certos para sua necessidade!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Água &rarr;</h2>
            <p>A fonte da vída, onde seu a qualidade é muito importante.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Serviços Digitais &rarr;</h2>
            <p>
              Serviço de impressão, Fotocópias, Digitalizações e muito mais.
            </p>
          </a>
        </div>
      </main>
      <div>
        <Header>ok</Header>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
