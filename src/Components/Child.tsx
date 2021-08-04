import { ChangeEvent, ReactElement } from 'react';

interface IChildProps {
    name: string;
    onChange(value: string): void;
}

const Child = ({name, onChange}: IChildProps): ReactElement => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange(e.target.value);
    };

    return (
        <div>
            <div className="field">
            <label className="label">Hey my name is {name}!</label>
            <div className="control">
                <div className="select">
                <select id="great-names" onChange={handleChange}>
                    <option value="Frarthur">James</option>
                    <option value="Gromulus">Dan</option>
                    <option value="Thinkpiece">Andrew</option>
                </select>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Child;