import "./CustomButton.scss"
export const CustomButton = ({onClick, children}) =>{

    return(
            <div onClick={onClick} className="custom-button-container">
                {children}
          </div>
    )
}