import { FC, useState } from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

const Toggle: FC = () => {

    const [color, setColor] = useState<string>(green);

    const changeColor = (): void => {
        let newColor = color === green?yellow:green;
        setColor(newColor);
    }
    return (
        <div className="field" style={{background: color}}>
        <label className="label">Change my background color</label>
        <div className="has-text-centered">
          <button
            className="button is-info is-centered"
            onClick={changeColor}>Change color
          </button>
        </div>
      </div>
    );
};

export default Toggle;