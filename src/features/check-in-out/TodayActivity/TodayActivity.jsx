import Spinner from "../../../ui/Spinner";
import TodayItem from "../TodayItem";
import { useTodayActivity } from "../useTodayActivity";
import "./TodayActivity.scss";

const TodayActivity = () => {
  const { activities, isLoading } = useTodayActivity();
  return (
    <div className="today-items">
      <h2>Today</h2>

      {!isLoading ? (
        activities?.length > 0 ? (
          <div className="today-items__list">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </div>
        ) : (
          <p className="today-item__no-activity">No activity today...</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TodayActivity;
