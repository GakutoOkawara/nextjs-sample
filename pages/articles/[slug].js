import { AppHead } from "../../components/AppHead"

const ArticlePage = (props) => {
  return (
    <>
      <AppHead 
        title={props.title}
        description={props.description}
        slug={props.slug}
      />
      <h1>{props.title}</h1>
    </>
  )
}

export default ArticlePage