import React from "react";

class EmployeeTable extends React.Component {
    // constructor() {
    //     super()

    // }
    render() {
        console.log(this.props.employeeData)
        return (
            <table>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                {
                    this.props.employeeData.map((employee) => {
                        return (


                            <tr>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                            </tr>

                        )
                    })
                }
            </table>
        )
    }
}

export default EmployeeTable;