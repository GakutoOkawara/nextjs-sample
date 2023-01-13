const SSRArticlePage = (props) => {
  return (
    <div>
      <h1>{props.article.title}</h1>
      <p>{props.article.body}</p>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const slug = context.params.slug
  const data = await import("../../data/articles.json")
  const article = data.articles.find(article => {
    return article.slug === slug
  })

  if (!article) {
    return {
      notFound: true
    }
  }

  return {
    props: { article }
  }
}

export default SSRArticlePage