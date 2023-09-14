import Image from 'next/image'
import styles from './page.module.css'
import { gql } from 'apollo-server-micro'

import gqlClient from '../../graphql/apollo-client'

import { Link } from '../../types/Link'

type Props = {
  links: Link[]
}

export default function Home({ links }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          MANAGE LINKS
          <code className={styles.code}> with GraphQL, Typescript, Next and Prisma</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Links List <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Total Links <span>-&gt;</span>
          </h2>
          <p>{links ? links.length : 0}</p>

        </a>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  try {
    const { data } = await gqlClient.query({
      query: gql`
        query {
          links {
            id
            title
            url
          }
        }
      `,
      fetchPolicy: 'no-cache',
    });

    console.log(data);
    console.error("Erros na consulta GraphQL:", data.errors);


    return {
      props: {
        links: data.links
      }
    }
  } catch (error) {
    console.error("Erro na consulta GraphQL:", error);
    return {
      props: {
        links: []
      }
    }
  }
}

