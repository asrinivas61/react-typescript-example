import { FC, useState } from 'react';
import Child from './Child';

const Parent: FC = () => {
    const [name, setName] = useState<string>('');

    const changeName = (newName: string): void => {
        setName(newName);
    };
    
    return (
        <Child 
    		name={name}
            onChange={changeName}/>
    );
};

export default Parent;