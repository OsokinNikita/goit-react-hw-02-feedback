export function FidbeckOptions({ options, addFeedBack }) {
  return options.map(name => {
    return (
      <button onClick={addFeedBack} name={name} type="button">
        {name}
      </button>
    );
  });
}
