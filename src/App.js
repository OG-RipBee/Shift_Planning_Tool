import { useState, useEffect } from "react";

function ShiftPlanner() {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({ employee: "", shift: "", hours: "", extra: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch shifts from backend or Excel
  }, []);

  const handleInputChange = (e) => {
    setNewShift({ ...newShift, [e.target.name]: e.target.value });
  };

  const addShift = () => {
    if (!newShift.employee || !newShift.shift || !newShift.hours) {
      setError("All fields must be filled");
      return;
    }
    setShifts([...shifts, newShift]);
    setNewShift({ employee: "", shift: "", hours: "", extra: "" });
    setError(null);
  };

  return (
    <div>
      <h1>Shift Planner</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input name="employee" placeholder="Employee Name" value={newShift.employee} onChange={handleInputChange} />
      <input name="shift" placeholder="Shift" value={newShift.shift} onChange={handleInputChange} />
      <input name="hours" placeholder="Hours" type="number" value={newShift.hours} onChange={handleInputChange} />
      <input name="extra" placeholder="Extra Hours" type="number" value={newShift.extra} onChange={handleInputChange} />
      <button onClick={addShift}>Add Shift</button>
    </div>
  );
}

export default ShiftPlanner;
