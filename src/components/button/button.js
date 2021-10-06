/*const Button = ({variant, children, onClick}) => {
    const classes = `button ${variant}`
    return (
        <button  className={classes} onClick={onclick}>
            {children}
        </button>
            
    )
};
export default Button;*/

export default function Button({
  buttonType,
  buttonOnclick,
  buttonText,
  buttonClass
}) {
  return (
    <button type={buttonType}
      onClick={buttonOnclick}
      className={buttonClass}
    >
      {buttonText}
    </button>
  )
}


/* /*    {itemsList.map((item) => {
              return (
                <CardList
                  {...item}
                  key={item.id}
                  onClick={() => {
                    setItemsList([...itemsList, { ...item }])
                    console.log(item)
                  }}
                />
              );
            })}*/




