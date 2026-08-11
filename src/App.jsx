import { Button } from '@shared/src'
import { test } from '@shared/src'

function App() {
  return (
    <div>
      서브모듈을 연결한 메인 프로젝트
      <Button onClick={test}>버튼</Button>
    </div>
  )
}

export default App
