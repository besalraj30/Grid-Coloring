const Box = ({filled, onClick, isDisabled, label}) => {
    return (
        <button type="button" aria-label={label} onClick={onClick} className={`cell ${filled ? "cell-activated" : ""}`} disabled={isDisabled} />
    )
}

export default Box;