import { 
    Toggle,
} from './styled';

interface Props {
    checked: boolean;
    handleUnitChange: () => void;
}

const ToggleSwitch = ({checked, handleUnitChange} : Props) => {
    return (
        <div>
            <Toggle htmlFor="unit_switcher">
                <input type="checkbox" id="unit_switcher" checked={checked} onChange={handleUnitChange} />
                {(!checked) ? (<span className='celcius'>C</span>) : (<span className='fahrenheit'>F</span>)}
            </Toggle>
        </div>
    )
};

export default ToggleSwitch;