const EmpDesign=(props)=>{
    return(
        <>
          <tr>
            <td>{props.sn}</td>
            <td>{props.nm}</td>
            <td>{props.eno}</td>
            <td>{props.dpt}</td>
            <td>{props.sal}</td>
          </tr>
        </>
    )
}
export default EmpDesign;