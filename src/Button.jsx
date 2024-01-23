function Button () {


    const handleClick = (e) => e.target.textContent = "I Love You";
    return (
        <button onClick={(e) =>handleClick(e)}>Click Me</button>
    );
}

export default Button;