import { Profile } from "./task01/Profile";
import { Statistics } from "./task02/Statistics";
import { FriendList, FriendListItem } from "./task03/Friendlist";
import { TransactionHistory } from "./task04/Transactions";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
};
