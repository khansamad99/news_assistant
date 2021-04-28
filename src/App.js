import React,{useEffect} from 'react'
import allanBtn from '@alan-ai/alan-sdk-web'

const allanKey = '9ad17421040645669d468a70e2ddc29e2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {

  useEffect(() => {
    allanBtn({
      key:allanKey,
      onCommand:({command,articles}) => {
        if(command === 'newHeadlines'){
          console.log(articles)
        }
      }
    })
  }, [])
  return (
    <div>
      hello
    </div>
  )
}

export default App