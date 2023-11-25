import React, { useState } from 'react';
import { Button, notification } from 'antd';
import './Mood.css';

const Mood: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<string | null>(null);

  const setMood = (mood: string) => {
    setCurrentMood(mood);
    showNotification(mood);
  };

  const showNotification = (mood: string) => {
    let message = '';
    let color = '';

    switch (mood) {
      case 'sad':
        message = "Don't Be Sad Brother, This Time Will Also Pass.";
        color = '#ff7f50'; // Coral color
        break;
      case 'happy':
        message = 'Be Happy Always, Farmart is With You.';
        color = '#32cd32'; // Lime green color
        break;
      case 'normal':
        message = 'Be Happy in Every Situation.';
        color = '#87ceeb'; // Sky blue color
        break;
      default:
        break;
    }

    if (message) {
      notification.open({
        message: 'Mood Update',
        description: message,
        style: {
          backgroundColor: color,
        },
      });
    }
  };

  return (
    <div className="mood-container">
      <h1>HOW'S YOUR MOOD BUDDY!</h1>
      <div className="emoji-container">
        <Button className={`emoji-button ${currentMood === 'sad' && 'selected'}`} onClick={() => setMood('sad')}>
          😢
        </Button>
        <Button className={`emoji-button ${currentMood === 'happy' && 'selected'}`} onClick={() => setMood('happy')}>
          😊
        </Button>
        <Button className={`emoji-button ${currentMood === 'normal' && 'selected'}`} onClick={() => setMood('normal')}>
          😐
        </Button>
      </div>
      {currentMood && (
        <p style={{ color: currentMood === 'sad' ? 'white' : currentMood === 'happy' ? 'white' : 'white' }}>
          {currentMood === 'sad'
            ? "Don't Be Sad Brother, This Time Will Also Pass."
            : currentMood === 'happy'
            ? 'Be Happy Always, Farmart is With You.'
            : 'Be Happy in Every Situation.'}
        </p>
      )}
    </div>
  );
};

export default Mood;
