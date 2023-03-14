import style from './style.module.css'
import cn from 'classnames'
const ButtonGitHub = () => {
    return (
      <a
        href="https://github.com/adlite/minesweeper-react-typescript"
        className={cn(style.button, style.buttonGitHub)}
        target="_blank"
        rel="noreferrer">
        <img
          src="/assets/img/github.svg"
          alt="View source on GitHub"
          className={style.githubIcon}
        />
        GitHub
      </a>
    )
}
 
export default ButtonGitHub ;