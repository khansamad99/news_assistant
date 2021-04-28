import React,{useState,useEffect} from 'react'
import allanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/News/NewsCards'
import useStyles from './style'
import { Grid ,Grow, Typography} from '@material-ui/core';

const allanKey = '9ad17421040645669d468a70e2ddc29e2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [articles,setnewsArticles] = useState([])
  const classes = useStyles()
  
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

  
  return (
    <div className="container">
        <Typography variant="h2" align="center">
          NEWS ASSISTANT
        </Typography>
      <NewsCards articles={articles}/>
    </div>
  );
}

export default App