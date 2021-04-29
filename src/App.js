import React,{useState,useEffect} from 'react'
import allanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/News/NewsCards'
import wordsToNumbers from 'words-to-numbers'
import useStyles from './style'
import {Typography} from '@material-ui/core';

const allanKey = '9ad17421040645669d468a70e2ddc29e2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [articles,setnewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles()
 
  
  useEffect(() => {
    allanBtn({
      key:allanKey,
      onCommand:({command,articles,number}) => {
        if(command === 'newsFromSource'){
          setnewsArticles(articles)
          setActiveArticle(-1)
        } else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle +1)
        } else if(command === 'open'){
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            allanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            allanBtn().playText('Opening...');
          } else {
            allanBtn().playText('Please try that again...');
          }
        } 
      }
    })
  }, [])

  
  return (
    <div className="container">
        <Typography variant="h2" align="center">
          NEWS ASSISTANT
        </Typography>
      <NewsCards articles={articles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App