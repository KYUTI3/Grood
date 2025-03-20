const ElapsedTime: React.FC = () => {
  const getNewTime = (seconds: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    return time;
  };

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
  } = useTimer({ expiryTimestamp: getNewTime(0), autoStart: true });

  const handleReset = () => {
    // Reset the timer to 0
    const newTime = getNewTime(0);
    // Re-initialize the timer
    reset(newTime);
  };

  return (
    <div>
      <h1>Elapsed Time</h1>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};


export default ElapsedTime;