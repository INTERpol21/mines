import ReactDOM from 'react-dom/client'
import App from './components/App'

import './styles/vendor/reset.css'
import './styles/colors.css'
import './styles/main.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(<App />)
