function PerfumeForm({ name, brand, setName, setBrand }) {
  return (
    <div>
      <input
        className="input"
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        placeholder="Enter scent name"
      />
      <input
        className="input"
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
        type="text"
        brand="brand"
        placeholder="Enter scent brand"
      />
    </div>
  );
}

export default PerfumeForm;
