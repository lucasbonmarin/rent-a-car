import './PickCarButton.scss';

export type PickCarButtonProps = {
    label: string;
    classname: string;
    onClick: () => void;
};

const PickCarButton = ({
    label,
    classname,
    onClick
}: PickCarButtonProps) => (
    <button
        className={classname}
        onClick={onClick}
    >
        {label}
    </button>
);

export default PickCarButton;