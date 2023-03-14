import {useCallback, useMemo} from 'react';
import Panel from '../Panel';
import Field from '../Field';
import Settings from '../Settings';
import Statistics from '../Statistics';
import useGameController from '../../hooks/useGameController';
import {GameState, SettingsLevel} from '../../types';

import style from './style.module.css';

export default function Game() {
  const {
    settings,
    setSettingsByLevel,
    fields,
    onFieldOpen,
    fieldsOpened,
    formattedTimer,
    prepareGame,
    continuePlaying,
    pause,
    gameState,
    flagsCount,
    setFlag,
    deleteFlag,
  } = useGameController();

  // Button labels getters
  const playButtonLabel = useMemo(() => {
    switch (gameState) {
      case GameState.Idle:
        return 'Играть';
      default:
        return 'С начала';
    }
  }, [gameState]);

  const pauseButtonLabel = useMemo(() => {
    switch (gameState) {
      case GameState.Pause:
        return 'Продолжить';
      default:
        return 'Пауза';
    }
  }, [gameState]);

  // Grid styles for specific settings
  const fieldsStyle = useMemo(
    () => ({
      gridTemplateColumns: `repeat(${settings.xFieldsCount}, 1fr)`,
      gridTemplateRows: `repeat(${settings.yFieldsCount}, 1fr)`,
    }),
    [settings],
  );

  // Event handlers
  const handlePauseButtonClick = useCallback(() => {
    if (gameState === GameState.Pause) {
      continuePlaying();
    } else {
      pause();
    }
  }, [gameState, pause, continuePlaying]);

  return (
    <>
      <Settings level={settings.level} onLevelChange={setSettingsByLevel} />
      <Panel className={style.Game}>
        <section className={style.fields} style={fieldsStyle}>
          {Array.from(fields.values()).map((field) => (
            <Field
              key={field.id}
              field={field}
              gameState={gameState}
              onOpen={onFieldOpen}
              onSetFlag={setFlag}
              onDeleteFlag={deleteFlag}
              isSmall={settings.level !== SettingsLevel.Beginner}
            />
          ))}
        </section>
        <aside className={style.aside}>
          <div className={style.stats}>
            <Statistics value={formattedTimer} icon="🕑" title="Таймер" />
            <Statistics
              value={`${fieldsOpened}/${settings.xFieldsCount * settings.yFieldsCount - settings.bombsCount}`}
              icon="✅"
              title="Открытые ячейки"
            />
            <Statistics
              value={`${settings.bombsCount - flagsCount}/${settings.bombsCount}`}
              icon="🚩"
              title="Флажки"
            />
            <Statistics value={`${settings.xFieldsCount}x${settings.yFieldsCount}`} icon="📐" title="Размер поля" />
          </div>
          <div className={style.buttonWrapper}>
            {gameState === GameState.Playing || gameState === GameState.Idle || (
              <button className={style.button} onClick={prepareGame}>
                {playButtonLabel}
              </button>
            )}
            {(gameState === GameState.Playing || gameState === GameState.Pause) && (
              <button className={style.button} onClick={handlePauseButtonClick}>
                {pauseButtonLabel}
              </button>
            )}
           
          </div>
        </aside>
      </Panel>
    </>
  );
}
