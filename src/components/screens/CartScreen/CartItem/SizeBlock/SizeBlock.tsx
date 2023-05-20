export default function SizeBlock({ data }: { data: string[] }) {
  return (
    <div>
      <label>Size</label>
      <select>
        {data.map((size) => (
          <option>{size}</option>
        ))}
      </select>
    </div>
  );
}
