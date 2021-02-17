import React from 'react'

function TableRow(props) {
    return (
        <div>
            <tr>
              <td><img src={props.picture}/></td>
              <td>{props.firstName}</td>
              <td>{props.lastName}</td>
              <td>{props.email}</td>
              <td>{props.gender}</td>
            </tr>
        </div>
    )
}

export default TableRow