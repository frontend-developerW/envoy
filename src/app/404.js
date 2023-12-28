import Link from '../../components/Link'

const Homepage = () => {

  return (
    <>
      <main>
        <div>
          <Link href="/">
            <button type="button">{t['common:back-to-home']}</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage
