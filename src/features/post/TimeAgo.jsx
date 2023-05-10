import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamps }) => {
  let timeAgo = "";
  if (timestamps) {
    const date = parseISO(timestamps);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span>
      &nbsp; <i>{timeAgo}</i>{" "}
    </span>
  );
};

export default TimeAgo;
