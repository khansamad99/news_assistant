import React,{useState,useEffect} from 'react'
import allanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards'


const allanKey = '9ad17421040645669d468a70e2ddc29e2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [articles,setnewsArticles] = useState([])

  useEffect(() => {
    allanBtn({
      key:allanKey,
      onCommand:({command,articles}) => {
        if(command === 'newsFromSource'){
          setnewsArticles(articles)
        }
      }
    })
  }, [])

  console.log(articles)
  return (
    <div>
      <NewsCards articles={articles}/>
    </div>
  )
}

export default App