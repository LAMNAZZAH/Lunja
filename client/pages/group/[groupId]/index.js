import { useRouter } from 'next/router'; 

const group = () => {
    const router = useRouter();
    const groupId = router.query.groupId;
  return (
    <div>
        <h2>the group Id to fetch it's data is: {groupId}</h2>
    </div>
  )
}

group.requireAuth = true;

export default group