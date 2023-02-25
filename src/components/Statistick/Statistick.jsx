export function Statistick({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>TotalFeedback: {totalFeedback}</li>
        <li>PositivePercentage: {positivePercentage}</li>
      </ul>
    </div>
  );
}
