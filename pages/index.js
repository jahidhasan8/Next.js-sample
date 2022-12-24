import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  return (
    <div className='text-center'>
      <Banner></Banner>
      <div>
        {
          posts.map(post => <div key={post.id} className="card my-10 mx-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>

             <p>{post?.body}</p>
            </div>
          </div>)
        }

        <Link href="/posts">
        <button className="btn btn-primary">See More</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const data = await res.json()

  return {
    props: {
      posts: data
    }
  }
}