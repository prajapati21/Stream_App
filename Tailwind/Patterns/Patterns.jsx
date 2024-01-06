import Style from "./Patterns.module.css";

export const PatterOne = ({children}) =>{
    const design = (
        <>
            <div className={Style.one}>
            {children}
            </div>
        </>
    );
    return design;
}

export const PatterTwo = ({children}) =>{
    const design = (
        <>
            <div className={Style.two}>
            {children}
            </div>
        </>
    );
    return design;
}