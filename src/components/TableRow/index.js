import React from 'react'

function TableRow(props) {
    return (
        
            <tr key="props.key">
              <td><img src={props.picture}/></td>
              <td>{props.firstName}</td>
              <td>{props.lastName}</td>
              <td>{props.email}</td>
              <td>{props.gender}</td>
            </tr>
        
    )
}

export default TableRow
