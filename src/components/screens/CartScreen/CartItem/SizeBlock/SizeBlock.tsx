export default function SizeBlock({ data }: { data: string[] }) {
  return (
    <div>
      <label htmlFor='size-select'>
        Size
        <select id='size-select'>
          {data.map((size, i) => (
            <option key={i}>{size}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
