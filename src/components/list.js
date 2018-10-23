import React from "react";

class List extends React.Component {
  render() {
    
    let datas = [
        { date: "10/24/2018", title: "Delhi", amount: 100 },
        { date: "10/25/2018", title: "asdf", amount: 101 },
        { date: "10/26/2018", title: "2312312sad4", amount: 120 },
        { date: "10/27/2018", title: "Delhasdfa", amount: 150 },
      ];

    return (
    <tbody>
        {datas.map(data => (
        <tr>
          <td>{data.date}</td>
          <td>{data.title}</td>
          <td>{data.amount}</td>
          <td><button>Edit</button><button>Delete</button></td>
          </tr>
        ))}
    </tbody>
    );
  }
}

export default List;