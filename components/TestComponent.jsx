export const TestComponent = (props) => {
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
}

export const testComponentSchema = {
  name: "TestComponent",
  label: "Test component",
  fields: [
    {
      label: "Items",
      name: "items",
      type: "object",
      list: true,
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
      ],
    }
  ],
};