import  { useCallback, memo } from 'react'
import cn from 'classnames';

import Panel from '../Panel';
import {settings} from '../../hooks/useSettings';
import {SettingsLevel} from '../../types';
import style from './style.module.css';
import ButtonGitHub from './ButtonGitHub/ButtonGitHub';

interface IProps {
  className?: string;
  level: SettingsLevel;
  onLevelChange: (level: SettingsLevel) => void;
}

function Settings({className = '', level, onLevelChange}: IProps) {
  const handleLevelChange = useCallback(
    (settingsLevel: SettingsLevel) => () => onLevelChange(settingsLevel),
    [onLevelChange],
  );

  return (
    <Panel className={cn(style.Settings, className)}>
      {settings.map((s) => (
        <button
          key={s.level}
          className={cn(style.button, { [style.isActive]: level === s.level })}
          onClick={handleLevelChange(s.level)}>
          {s.level}
        </button>
      ))}
     <ButtonGitHub/>
    </Panel>
  )
}

export default memo(Settings);
