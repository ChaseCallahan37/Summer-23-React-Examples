function Table() {
  const students = [
    { name: "Alice", age: 20, grade: 10 },
    { name: "Bob", age: 21, grade: 19 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
